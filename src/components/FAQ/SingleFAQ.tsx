"use client";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, ConfigProvider } from "antd";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const text = `
  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "How do I get started with Car Rental?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Can I rent a car with a debit card?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "What kind of Car Rental do I need?",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "What is a rental car security deposit?",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "Can I cancel or modify my reservation?",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "Is it possible to extend my rental period?",
    children: <p>{text}</p>,
  },
  {
    key: "7",
    label: "Can I cancel or modify my reservation?",
    children: <p>{text}</p>,
  },
  {
    key: "8",
    label: "Is it possible to extend my rental period?",
    children: <p>{text}</p>,
  },
];

const part1 = items.slice(0, 4);
const part2 = items.slice(4);

const SingleFAQ = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            headerBg: "transparent",
            colorTextHeading: "#1A202C",
            contentBg: "transparent",
            fontSize: 16,
          },
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: isSmallScreen ? "0rem" : "1rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginY: "4%",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        {isSmallScreen ? (
          <>
            {" "}
            <Box sx={{ width: "100%" }}>
              <Collapse items={items} style={{ border: "none" }} />
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ width: "100%" }}>
              <Collapse items={part1} style={{ border: "none" }} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Collapse items={part2} style={{ border: "none" }} />
            </Box>
          </>
        )}
      </Box>
    </ConfigProvider>
  );
};

export default SingleFAQ;
