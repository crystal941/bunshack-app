import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const contact: React.FC = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: "black" }}>
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 2, sm: 4 },
            "& h4": {
              fontWeight: "bold",
              my: { xs: 2, sm: 3 },
              fontSize: { xs: "1.5rem", sm: "2rem" },
              color: "white",
            },
            "& h4:hover": { color: "goldenrod" },
            "& p": {
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: 1.6,
              mb: 3,
              color: "white",
            },
            "& p:hover": { color: "goldenrod" },
          }}
        >
          <Typography variant="h4">Contact Us</Typography>
          <Typography component="p">We'd love to hear from you! </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: { xs: 3, sm: 5 },
              width: "600px",
              "@media (max-width:600px)": {
                width: "300px",
              },
            }}
          >
            <TableContainer component={Paper}>
              <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        bgcolor: "goldenrod",
                        color: "white",
                      }}
                      align="center"
                    >
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <BusinessIcon sx={{ color: "red", pt: 1 }} /> 3097 Great
                      North Road, New Lynn, Auckland 0600
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                      lee.shin@hotmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CallIcon sx={{ color: "green", pt: 1 }} /> (09) 218 9712
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              bgcolor: "white",
              borderRadius: "8px",
              overflow: "hidden",
              p: { xs: 2, sm: 3 },
              "& iframe": {
                border: 0,
                margin: 0,
                padding: 0,
                width: "100%",
                height: "1030px",
              },
              "@media (max-width:600px)": {
                "& iframe": {
                  height: "800px",
                },
              },
              mb: { xs: 3, sm: 5 },
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSexXOG6IxiQpF8to5x1zckD4F25sbEEX5i5A5GkeeDz8jvRdg/viewform?embedded=true"
              style={{ border: 0, margin: 0, padding: 0 }}
            >
              Loading…
            </iframe>
          </Box>
        </Box>
      </div>
    </Layout>
  );
};
export default contact;
