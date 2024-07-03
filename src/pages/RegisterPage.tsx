import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const dataToSend: any = {};

    for (const [key, value] of formData.entries()) {
      dataToSend[key] = value;
    }

    // Create username from the name
    const newUserName = dataToSend.Name.trim().split(" ").join("");
    dataToSend.UserName = newUserName;

    try {
      const response = await fetch("api/LoginController/register", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const messageEl = document.querySelector(".message");

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        if (response.ok) {
          navigate("/login");
        } else {
          if (messageEl) {
            if (data.message) {
              messageEl.innerHTML = data.message;
            } else if (data.errors) {
              let errorMessages =
                '<div>Attention please:</div><div class="normal">';
              data.errors.forEach((error: any) => {
                errorMessages += error.description + " ";
              });
              errorMessages += "</div>";
              messageEl.innerHTML = errorMessages;
            }
          }
        }
      } else {
        const text = await response.text();
        if (messageEl) {
          messageEl.innerHTML = "Unexpected response from server: " + text;
        }
      }
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  return (
    <Layout>
      <div className="content-wrapper">
        <Container sx={{ mb: 15, "@media(max-width: 600px)": { mb: 10 } }}>
          <div className="content">
            <Typography variant="h4">
              Thank you for choosing BunShack Breakfast!
            </Typography>
          </div>
          <Box
            sx={{
              maxWidth: "400px",
              margin: "auto",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              "@media(max-width: 600px)": { "& h4 ": { fontSize: "1.5rem" } },
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Register
            </Typography>
            <form className="register" onSubmit={handleRegister}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="name"
                    label="Name"
                    name="Name"
                    required
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    name="Email"
                    type="email"
                    required
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="Password"
                    name="PasswordHash"
                    type="password"
                    required
                  />
                </Grid>{" "}
              </Grid>
              <Button
                sx={{ mt: "20px" }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Register
              </Button>
            </form>
            <Typography
              variant="body1"
              align="center"
              className="message"
              sx={{ mt: "20px" }}
            ></Typography>
            <Typography variant="body1" align="center" sx={{ mt: "20px" }}>
              Or <StyledLink to="/login">Login</StyledLink>
            </Typography>
          </Box>
        </Container>
        <br />
      </div>
    </Layout>
  );
};

const StyledLink = styled(Link)({
  textDecoration: "none",
  fontWeight: "bold",
  "&:hover": { color: "red" },
});

export default RegisterPage;
