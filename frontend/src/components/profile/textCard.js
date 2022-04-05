import * as React from "react";
import { Typography, Card, CardContent } from "@mui/material";

export default function TextCard({ title, content, sx }) {
  let cardTextCardStyle = {
    maxWidth: 420,
    borderRadius: "10px",
    marginX: "auto",
    marginY: "20px",
  };

  cardTextCardStyle = { ...cardTextCardStyle, ...sx };

  return (
    <Card sx={cardTextCardStyle}>
      <CardContent>
        <Typography variant="caption">{title}</Typography>
        <Typography variant="h5">{content}</Typography>
      </CardContent>
    </Card>
  );
}
