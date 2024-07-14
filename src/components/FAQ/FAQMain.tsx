import SectionsHeader from "@/components/SectionsHeader";
import React from "react";
import SingleFAQ from "./SingleFAQ";
import { Box } from "@mui/material";

const FAQMain = () => {
  return (
    <Box sx={{ padding: " 2.5rem 4%" }}>
      <SectionsHeader
        question="Take a look at the"
        heading="Frequently Asked Questions"
      />
      <SingleFAQ />
    </Box>
  );
};

export default FAQMain;
