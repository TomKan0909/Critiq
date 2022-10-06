import { Link } from "react-router-dom";
import Image from "../components/profile/image";
import TextCard from "../components/profile/textCard";
import StatsCard from "../components/profile/stats";
import Profile from "../components/profile/profile";
import ButtonStack from "../components/profile/buttonStack";
import { Typography } from "@mui/material";
import React from "react";
import CritiqHistoryCard from "../components/profile/critiqHistoryCard";
import exampleUser from "../data/exampleUser";
import users from "../data/users";
import { getHistory } from "../apis";
import NavBar from "../components/home/navBar";

import { Slide, Fade, Grid } from "@mui/material";

function CritiqHistory() {
  /* This function will have an useEffect hook to send a authorized GET call to our server to retrieve
     user's roast history messages and pass it down as props to RoastHistoryCard
  **/

  // const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const [rooms, setRooms] = React.useState([]);
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(() => {
    const getAndSetRooms = async () => {
      try {
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        const roomsHistory = (await getHistory(currentUser._id)).data.rooms;
        setRooms(roomsHistory);
        setInProp(true);
      } catch (error) {
        console.log(error);
      }
    };
    getAndSetRooms();
  }, []);


  return (
    <React.Fragment>
      <NavBar inProp={inProp} setInProp={setInProp} />
      <Fade in={inProp} timeout={800}>
        <Typography variant="h2" marginTop={"200px"}>
          Critique History
        </Typography>
      </Fade>
      <Slide direction="up" in={inProp} timeout={300}>
        <Grid container spacing={2}>
          {
            rooms.map((room) => (
              <Grid item xs={4}>
                <CritiqHistoryCard room={room} />
              </Grid>
            ))
          }
        </Grid>
      </Slide>
    </React.Fragment>
  );
}

export default CritiqHistory;
