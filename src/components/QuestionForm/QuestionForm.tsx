import { Box, TextField } from "@mui/material";
import React from "react";
import Textarea from "@mui/joy/Textarea";
import Button from "../Button";

const QuestionForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: { xs: "90%", md: "50%" },
        backgroundColor: "white",
        padding: { xs: "1rem", md: "2rem" },
        borderRadius: "0.5rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
            "&:hover fieldset": {
              borderColor: "#3563E9",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3563E9",
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(0, 0, 0, 0.6)",
          },
          "& .MuiInputBase-root": {
            color: "#030c29",
          },
        }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
            "&:hover fieldset": {
              borderColor: "#3563E9",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3563E9",
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(0, 0, 0, 0.6)",
          },
          "& .MuiInputBase-root": {
            color: "#3563E9",
          },
        }}
      />
      <Textarea
        color="primary"
        disabled={false}
        minRows={3}
        maxRows={3}
        placeholder="Write a question here"
        size="md"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)",
            },
            "&:hover fieldset": {
              borderColor: "#3563E9",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3563E9",
            },
          },
          "& .MuiInputBase-root": {
            backgroundColor: "white",
            color: "#3563E9",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#3563E9",
          },
          borderRadius: "0.5rem",
          padding: "0.75rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Button value={"Send"} />
    </Box>
  );
};

export default QuestionForm;
