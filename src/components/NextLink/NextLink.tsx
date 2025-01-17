"use client";
import MuiLink, { LinkProps } from "@mui/material/Link";
import Link from "next/link";
import { forwardRef } from "react";

const NextLink = forwardRef<
  HTMLAnchorElement | null,
  Omit<LinkProps<"a", { component: typeof Link }>, "component">
>((props, ref) => {
  const { href, ...restProps } = props;
  return (
    <MuiLink
      component={Link}
      href={`${href}`}
      underline="none"
      {...restProps}
      ref={ref}
      sx={{ display: "inline" }}
    />
  );
});
NextLink.displayName = "NextLink";
export default NextLink;
