import React from "react";

import TextField from "@mui/material/TextField";
import { Autocomplete, Container, Button, Chip, Box } from "@mui/material";
import {
  genders,
  locations,
  ethnicities,
  alcohols,
  schools,
} from "../../data/users";


let tags = [];
tags = tags.concat(genders);
tags = tags.concat(locations);
tags = tags.concat(ethnicities);
tags = tags.concat(alcohols);
tags = tags.concat(schools);
tags = tags.filter((tag) => tag != "Other");

export default function TagFilter({ activeFilters, setActiveFilter }) {
  const handleFilter = (value) => {
    setActiveFilter(value);
  };

  return (
    <Container component="form">
      <Autocomplete
        multiple
        limitTags={3}
        options={tags}
        onChange={(event, value) => {
          handleFilter(value);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search for a tag(s)" />
        )}
      />
    </Container>
  );
}
