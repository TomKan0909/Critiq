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

import { FilterChip } from "./styles";

let tags = [];
tags = tags.concat(genders);
tags = tags.concat(locations);
tags = tags.concat(ethnicities);
tags = tags.concat(alcohols);
tags = tags.concat(schools);
tags = tags.filter((tag) => tag != "Other");

export default function TagFilter({ activeFilters, addActiveFilter }) {
  const [filter, setFilter] = React.useState("");

  const handleFilter = () => {
    if (tags.includes(filter) && activeFilters.includes(filter) == false) {
      addActiveFilter([...activeFilters, filter]);
    }
  };

  // https://stackoverflow.com/a/62767716
  const handleDelete = (activeFilter) => {
    addActiveFilter((activeFilters) =>
      activeFilters.filter((filter) => filter != activeFilter)
    );
  };

  // const handleDelete = (activeFilter) => {
  //     return;
  // }

  return (
    <Container component="form">
      <Autocomplete
        options={tags}
        onChange={(event, value) => setFilter(value)}
        renderInput={(params) => (
          <TextField {...params} label="Search for a tag(s)" />
        )}
      />
      <Button
        sx={{ margin: "40px" }}
        onClick={handleFilter}
        variant="contained"
        color="primary"
        size="large"
      >
        Add
      </Button>
      <Box justifyContent="left">
        {activeFilters.map((activeFilter) => (
          <FilterChip
            variant="outlined"
            label={activeFilter}
            onDelete={() => handleDelete(activeFilter)}
          />
        ))}
      </Box>
    </Container>
  );
}
