// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThemeToggleButton from './ThemeToggleButton';

import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'goldenrod'}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <SoupKitchenIcon />
        BunShack Breakfast
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <PeopleAltIcon />
            About
          </Link>
        </li>
        <li>
          <Link to="/menu">
            <MenuBookIcon />
            Menu
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <InfoIcon />
            Contact
          </Link>
        </li>
        <li>
          <Link to="/order">
            <ShoppingCartIcon />
            Order
          </Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: '#1A1A19' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <SoupKitchenIcon />
              BunShack Breakfast
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/order">Order</Link>
                </li>
              </ul>
            </Box>
            <ThemeToggleButton />
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
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
    </>
  );
};

export default Navbar;
