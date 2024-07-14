"use client";
import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navigation from "../Navigation";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: "80vw", position: "relative" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Navigation />
    </Box>
  );

  return (
    <Box
      sx={{
        padding: "1% 3%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ color: "#3563E9", fontWeight: "bold", fontSize: "30px" }}
      >
        MORENT
      </Typography>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Navigation />
      </Box>
    </Box>
  );
};

export default Header;
