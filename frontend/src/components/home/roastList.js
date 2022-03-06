import { TableBody, Container, Typography, Grid, Box } from "@mui/material";
import React from "react";

import RoastCard from "./roastCard";
import { RoastCardContainer } from "./styles";

import users from "../../data/users";
import usernames from "../../data/usernames";

import exampleUser from "../../data/exampleUser";

export default function RoastList() {
  const [usersList, updateUsers] = React.useState(usernames.slice(0,30));

  return (
    <RoastCardContainer container justifyContent="space-around">
          {usersList.map((user) => (
                <RoastCard user={users[user]} />
          ))}
    </RoastCardContainer>
  );
}
