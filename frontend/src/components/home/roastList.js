import { TableBody, Container, Typography, Grid, Box } from "@mui/material";
import React from "react";

import RoastCard from "./roastCard";
import { RoastCardContainer } from "./styles";

import users from "../../data/users";
import usernames from "../../data/usernames";

import exampleUser from "../../data/exampleUser";

export default function RoastList({ activeFilters }) {
  const [usersList, updateUsers] = React.useState(usernames.slice(0, 30));

  const checkFilter = (user) => {
    for (const filter of activeFilters) {
      console.log(filter);
      console.log(users[user]);
      if (Object.values(users[user].tags).includes(filter) == false) {
        return false;
      }
    }
    return true;
  };

  return (
    <RoastCardContainer container justifyContent="space-around">
      {
        // Only get rooms who's host satisfy the tags
        usersList
          .filter((user) => checkFilter(user))
          .map((user) => (
            <RoastCard user={users[user]} />
          ))
      }
    </RoastCardContainer>
  );
}
