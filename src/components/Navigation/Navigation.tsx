"use client";
import React from "react";
import NextLink from "../NextLink";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
interface Navigation {
  href: string;
  linkName: string;
}

const navigation_data = [
  { href: "/", linkName: "Home page" },
  { href: "/find-a-car", linkName: "Find a car" },
  { href: "/", linkName: "Contact us" },
  { href: "/", linkName: "About" },
];

const Navigation: React.FC = () => {
  const currentPath = usePathname();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2.5rem",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      {navigation_data.map(({ href, linkName }, index) => (
        <Box key={index}>
          <NextLink href={href}>
            <Typography
              sx={{
                color: currentPath === href ? "#3563E9" : "#1A202C",
                fontWeight: "bold",
              }}
            >
              {linkName}
            </Typography>
          </NextLink>
        </Box>
      ))}
      ENG
    </nav>
  );
};

export default Navigation;
