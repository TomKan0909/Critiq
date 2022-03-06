import { TableBody, Container, Typography, Grid } from "@mui/material";
import React from "react";

import RoastCard from "./roastCard";
import { RoastCardContainer } from "./styles";

export default function RoastList() {
  const [users, updateUsers] = React.useState([
    "Good Student",
    "Bad Student",
    "Okay Student",
    "sdfsdfd",
    "Good Student",
    "Bad Student",
    "Okay Student",
    "sdfsdfd",
  ]);

  return (
    <RoastCardContainer container spacing={6}>
  
          {users.map((user) => (
            <Grid item xs={6}>
            <RoastCard name={user} />

            </Grid>
          ))}
    </RoastCardContainer>
  );
}
