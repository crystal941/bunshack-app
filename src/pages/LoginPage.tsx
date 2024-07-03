import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = {
      Email: email,
      Password: password,
      Remember: remember,
    };

    try {
      const response = await fetch("api/LoginController/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        localStorage.setItem("user", email);
        navigate("/");
      } else {
        const responseData = await response.json();
        // Handle error message display or other actions
        console.error("Login error:", responseData.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle general error case
    }
  };

  return (
    <Layout>
      <div className="content-wrapper">
        <Container sx={{ mb: 25, "@media(max-width: 600px)": { mb: 18 } }}>
          <div className="content">
            <Typography variant="h4">Please login to order!</Typography>
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
              Login
            </Typography>
            <form className="login" onSubmit={handleLogin}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    name="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="Password"
                    name="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                      />
                    }
                    label="Remember Password?"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{ mt: "20px" }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </form>
            <Typography
              variant="body1"
              align="center"
              className="message"
            ></Typography>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Typography variant="body1">
                Or <StyledLink to="/register">Register</StyledLink>
              </Typography>
            </div>
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

export default LoginPage;
