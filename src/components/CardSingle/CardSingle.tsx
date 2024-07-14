"use client";
import { singleCarI } from "@/interfaces/int";
import { Box, Typography } from "@mui/material";
import React from "react";
import PropaneTankIcon from "@mui/icons-material/PropaneTank";
import PeopleIcon from "@mui/icons-material/People";
import Button from "../Button";
import styled from "styled-components";
import LoadingCard from "../LoadingCard";

const StyledImg = styled.img`
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Example hover effect */
  }
`;
const CardSingle: React.FC<singleCarI> = ({
  body_type,
  brand,
  model,
  tank_size,
  thumbnail_url,
  transmission,
  seats,
  price,
  loading,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "20px 15px",
        cursor: "pointer",
        flex: {
          xs: "1 1 100%", // 100% width on extra-small screens
          sm: "1 1 48%", // 48% width on small screens
          md: "1 1 32%", // 32% width on medium screens
          lg: "1 1 20%", // 24% width on large screens
          xl: "1 1 21%", // 21% width on extra-large screens
        },
      }}
    >
      {loading ? (
        <LoadingCard />
      ) : (
        <Box>
          {" "}
          <Typography
            variant="h6"
            sx={{ color: "#1A202C", fontWeight: "bold" }}
          >
            {brand} {model}
          </Typography>
          <Typography color={"#90A3BF"} fontWeight={"bold"}>
            {body_type}
          </Typography>
          <Box width={"100%"} overflow={"hidden"}>
            <StyledImg src={thumbnail_url} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              my: "1.2rem",
              color: "#90A3BF",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <PropaneTankIcon /> {tank_size}L
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <PropaneTankIcon /> Manual
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <PeopleIcon /> {seats} People
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
              <Typography
                color={"#1A202C"}
                fontSize={"25px"}
                fontWeight={"bold"}
              >
                {" "}
                ${price}.00/
              </Typography>
              <Typography color={"#90A3BF"}>day</Typography>{" "}
            </Box>
            <Button value={"Rent Now"} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CardSingle;
