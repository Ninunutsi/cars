import { Box, Typography } from "@mui/material";
import React from "react";
import QuestionForm from "../QuestionForm";
import SectionsHeader from "../SectionsHeader";

const SendAQuestion = () => {
  return (
    <Box
      sx={{
        background: "#3563E9",
        padding: { xs: "2rem 2%", md: "4.5rem 4%" },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box mb={{ xs: "2rem", md: "0" }}>
          <SectionsHeader
            question="Do you have"
            heading="Any Questions?"
            headingColor="#FFFFFF"
          />
          <Typography
            variant="body1"
            color={"#F6F7F9"}
            fontSize={"17px"}
            lineHeight={"25px"}
            fontWeight={"bold"}
            width={"80%"}
            margin={" 1rem auto"}
            textAlign={"center"}
          >
            Ask us a question and we will get back to you as soon as possible.
          </Typography>
        </Box>
        <QuestionForm />
      </Box>
    </Box>
  );
};

export default SendAQuestion;
