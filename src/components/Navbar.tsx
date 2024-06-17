import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import MenuIcon from "@mui/icons-material/Menu";

import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <SoupKitchenIcon />
        BunShack
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login">About</Link>
        </li>
        <li>
          <Link to="/register">Contact</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={"goldenrod"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <SoupKitchenIcon />
            BunShack
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login">About</Link>
              </li>
              <li>
                <Link to="/register">Contact</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
