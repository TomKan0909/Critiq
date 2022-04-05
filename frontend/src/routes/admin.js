import { Grid, Box, Slide, Grow, Fade } from "@mui/material";
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
  const [user, setUser] = useState();
  const [rooms, setRooms] = useState([]);
  const [inProp, setInProp] = React.useState(true);

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
      <NavBar inProp={inProp} setInProp={setInProp} />
      <Grid container justifyContent="center" spacing={2} columns={24}>
        <Fade in={inProp} timeout={800}>
          <Grid item xs={24}>
            <Logo />
          </Grid>
        </Fade>
        <Grow in={inProp} timeout={500}>
          <Grid item xs={24}>
            <TagFilter
              activeFilters={activeFilters}
              setActiveFilter={setActiveFilter}
            />
          </Grid>
        </Grow>
        <Slide in={inProp} direction="up" timeout={300}>
          <Grid item xs={13}>
            <RoastList
              activeFilters={activeFilters}
              rooms={rooms}
              inProp={inProp}
              setInProp={setInProp}
            />
          </Grid>
        </Slide>
        <Grid item xs={2} />
        <Slide in={inProp} direction="up" timeout={300}>
          <Grid item xs={4}>
            <SideProfileAdmin user={user} inProp={inProp} setInProp={setInProp} />
          </Grid>
        </Slide>
      </Grid>
    </Box>
  );
}
