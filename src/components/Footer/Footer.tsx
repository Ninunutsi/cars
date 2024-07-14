import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "white", padding: "3.5rem 4%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {" "}
          <Typography
            sx={{ color: "#3563E9", fontWeight: "bold", fontSize: "30px" }}
          >
            MORENT
          </Typography>
          <Typography color={"#13131397"}>
            Our vision is to provide convenience and help increase your sales
            business.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "2.5rem" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography color={"#1A202C"} fontSize={"18px"} fontWeight={"bold"}>
              Navigation
            </Typography>
            <Typography sx={{ color: "#13131397", cursor: "pointer" }}>
              Find a car
            </Typography>
            <Typography sx={{ color: "#13131397", cursor: "pointer" }}>
              About
            </Typography>
            <Typography sx={{ color: "#13131397", cursor: "pointer" }}>
              Contact us
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography color={"#1A202C"} fontSize={"18px"} fontWeight={"bold"}>
              Socials
            </Typography>
            <Typography sx={{ color: "#13131397", cursor: "pointer" }}>
              Find a car
            </Typography>
            <Typography sx={{ color: "#13131397", cursor: "pointer" }}>
              About
            </Typography>
            <Typography sx={{ color: "#13131397", cursor: "pointer" }}>
              Contact us
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ m: "2.5rem 0" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#1A202C",
        }}
      >
        <Typography>©2024 MORENT. All rights reserved</Typography>
        <Box display={"flex"} gap={"1rem"}>
          <Typography sx={{ cursor: "pointer" }} fontWeight={"bold"}>
            Privacy & Policy
          </Typography>
          <Typography sx={{ cursor: "pointer" }} fontWeight={"bold"}>
            Terms & Condition
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
