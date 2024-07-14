"use client";
import MuiLink, { LinkProps } from "@mui/material/Link";
import Link from "next/link";
import { useParams } from "next/navigation";
import { forwardRef } from "react";

const NextLink = forwardRef<
  HTMLAnchorElement | null,
  Omit<LinkProps<"a", { component: typeof Link }>, "component">
>((props, ref) => {
  const { lang = "" } = useParams();
  const { href, ...restProps } = props;
  return (
    <MuiLink
      component={Link}
      href={`${lang ? `/${lang}` : ""}${href}`}
      underline="none"
      {...restProps}
      ref={ref}
    />
  );
});

export default NextLink;
