
import { Grid, Box } from "@mui/material";
import NavBar from "../components/home/navBar";
import React from "react";
import Logo from "../components/logo";
import TagFilter from "../components/home/tagFilter";
import RoastList from "../components/home/roastList";
import SideProfileAdmin from "../components/home/sideProfileAdmin";

export default function HomeAdmin() {
    const [activeFilters, setActiveFilter] = React.useState([]);
  
    let user = sessionStorage.getItem("admin");
    user = JSON.parse(user);
    console.log(user)
  
    return (
      <Box>
        <NavBar />
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Logo />
          </Grid>
          <Grid item xs={12}>
            <TagFilter
              activeFilters={activeFilters}
              setActiveFilter={setActiveFilter}
            />
          </Grid>
          <Grid item xs={5}>
            <RoastList activeFilters={activeFilters} />
          </Grid>
          <Grid xs={1} />
          <Grid item xs={2}>
            <SideProfileAdmin user={user} />
          </Grid>
        </Grid>
      </Box>
    );
  }