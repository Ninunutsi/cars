import React from "react";
import CardSingle from "../CardSingle";
import { singleCarI } from "@/interfaces/int";
import { Box, Divider, Typography } from "@mui/material";
import Button from "../Button";

const cars: singleCarI[] = [
  {
    brand: "Toyota",
    model: "Corolla",
    body_type: "Sedan",
    tank_size: 50,
    transmission: 6,
    seats: 5,
    price: 200,
    thumbnail_url:
      "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
  },
  {
    brand: "Honda",
    model: "Civic",
    body_type: "Sedan",
    tank_size: 46,
    transmission: 5,
    seats: 5,
    price: 22,
    thumbnail_url:
      "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
  },
  {
    brand: "Ford",
    model: "Mustang",
    body_type: "Coupe",
    tank_size: 60,
    transmission: 6,
    seats: 4,
    price: 30,
    thumbnail_url:
      "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
  },
  {
    brand: "Chevrolet",
    model: "Tahoe",
    body_type: "SUV",
    tank_size: 80,
    transmission: 6,
    seats: 7,
    price: 50,
    thumbnail_url:
      "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
  },
  {
    brand: "Tesla",
    model: "Model S",
    body_type: "Sedan",
    tank_size: 0,
    transmission: 1,
    seats: 5,
    price: 80,
    thumbnail_url:
      "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
  },
  {
    brand: "Ford",
    model: "Mustang",
    body_type: "Coupe",
    tank_size: 60,
    transmission: 6,
    seats: 4,
    price: 30,
    thumbnail_url:
      "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
  },
  {
    brand: "Chevrolet",
    model: "Tahoe",
    body_type: "SUV",
    tank_size: 80,
    transmission: 6,
    seats: 7,
    price: 50,
    thumbnail_url:
      "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
  },
  {
    brand: "Tesla",
    model: "Model S",
    body_type: "Sedan",
    tank_size: 0,
    transmission: 1,
    seats: 5,
    price: 80,
    thumbnail_url:
      "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
  },
];

const CarsList = () => {
  return (
    <Box padding={"2.5rem 4%"}>
      <Typography color={"#90A3BF"} my={"1rem"} fontWeight={"bold"}>
        Recomendation Cars
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "space-between",
        }}
      >
        {cars.map(
          ({
            brand,
            model,
            body_type,
            tank_size,
            transmission,
            seats,
            price,
            thumbnail_url,
          }) => (
            <CardSingle
              key={model}
              body_type={body_type}
              brand={brand}
              model={model}
              tank_size={tank_size}
              transmission={transmission}
              seats={seats}
              price={price}
              thumbnail_url={thumbnail_url}
            />
          )
        )}
      </Box>
      <Box my={"1.5rem"} display={"flex"} justifyContent={"center"}>
        <Button value={"Show more car"} />
      </Box>
    </Box>
  );
};

export default CarsList;
