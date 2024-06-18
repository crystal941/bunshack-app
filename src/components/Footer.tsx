import React from "react";
import { Box, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import ShareIcon from "@mui/icons-material/Share";

const Footer: React.FC = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": { fontSize: "40px", cursor: "pointer", mr: 2 },
            "& svg: hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <XIcon />
          <GoogleIcon />
          <ShareIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
        >
          All Rights Reserved &copy; 2024 BunShack Breakfast
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
