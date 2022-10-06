import React from "react";

import RoastCard from "./roastCard";
import { RoastCardContainer } from "./styles";

import { Grow, Box, Slide } from "@mui/material";

export default function RoastList({ activeFilters, rooms, inProp, setInProp }) {
  let roomsList;
  if (rooms === undefined || rooms === null) {
    roomsList = [];
  } else {
    roomsList = rooms;
  }

  const checkFilter = (room) => {
    if (activeFilters.length === 0) {
      return true;
    }

    for (const filter of activeFilters) {
      if (Object.values(room.creator).includes(filter)) {
        return true;
      }
    }
    return false;
  };

  return (
    <RoastCardContainer container justifyContent="space-around">
      {
        // Only get rooms who's host satisfy the tags
        roomsList.map((room) => (
          <Grow in={checkFilter(room)} mountOnEnter unmountOnExit timeout={300}>
            <Box>
              <RoastCard room={room} inProp={inProp} setInProp={setInProp} />
            </Box>
          </Grow>
        ))
      }
    </RoastCardContainer>
  );
}
