import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Image() {
  return (
    <Card sx={{ maxWidth: 420, maxHeight: 420, borderRadius: '10px', margin: '20px'}}>
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        image="/images/profile.png"
      /> 
    </Card>
  );
}
