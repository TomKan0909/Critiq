import React from "react";
import { Typography, styled } from "@mui/material";
import "./fonts.css";

export default function Logo() {
  return <LogoText variant="h2">C R I T I Q</LogoText>;
}

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
}));
