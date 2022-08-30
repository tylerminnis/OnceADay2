import React, { useEffect, useState } from "react";
import MoodIcon from "@mui/icons-material/Mood";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";
// import axios from "axios";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

// import { motion } from "framer-motion";
import { Typography } from "@mui/material";

// from ninerup...
const style = {
  wrapper: `bg-[#015035] w-screen px-[1.2rem] py-[0.8rem] flex fixed top-0 left-0 right-0 z-10 border-b-8 border-white`,
  logoContainer: `items-center cursor-pointer `,
  logoText: ` text-white font-semibold text-2xl float-right`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#fff] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#000] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: `flex absolute  items-center justify-end right-5`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer mr-3 pr-5`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  rocketImg: `w-10 h-8 float-left`,
  navAvi: `w-8 h-8 ml-2`,
  active: `border-b-4 border-white`,
};

const pages = ["History", "About us"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return  (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <MoodIcon sx ={{ display: { xs: 'none', md: 'flex '}, mr: 1}} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit' // dark blue from colorpicker is #0A396A
                  }}
                  >
                    Once A Day
                  </Typography>
                  <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Toolbar>
        </Container>
    </AppBar>
  )
};

export default Navbar;
