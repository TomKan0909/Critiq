import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Image() {
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 300, borderRadius: '10px'}}>
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        image="/images/kanye_profile.jpeg"
      /> 
    </Card>
  );
}
