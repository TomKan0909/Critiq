import { Grid, Box } from "@mui/material";
import NavBar from "../components/home/navBar";
import React, { useEffect, useState } from "react";
import Logo from "../components/logo";
import TagFilter from "../components/home/tagFilter";
import RoastList from "../components/home/roastList";
import SideProfileAdmin from "../components/home/sideProfileAdmin";
import adminUser from "../data/adminUser";
import { getUserProfile, getAllRooms } from "../apis";

export default function HomeAdmin() {
  const [activeFilters, setActiveFilter] = React.useState([]);

  // let user = sessionStorage.getItem("admin");
  // user = JSON.parse(user);
  const [user, setUser] = useState();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function getAdmin() {
      const res = await getUserProfile();
      setUser(res);
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({ isAdmin: true, ...res })
      );
    }
    getAdmin().catch(console.error);
  }, []);

  useEffect(() => {
    const getAndSetRooms = async () => {
      try {
        const rooms = await getAllRooms();
        setRooms(rooms);
      } catch (error) {
        console.log(error);
      }
    };
    getAndSetRooms();
  }, [activeFilters]);

  if (!user) {
    return "";
  }

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
          <RoastList activeFilters={activeFilters} rooms={rooms} />
        </Grid>
        <Grid xs={1} />
        <Grid item xs={2}>
          <SideProfileAdmin user={user} />
        </Grid>
      </Grid>
    </Box>
  );
}
