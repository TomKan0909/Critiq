import { Link } from "react-router-dom";
import Image from "../components/profile/image";
import TextCard from "../components/profile/textCard";
import StatsCard from "../components/profile/stats";
import Profile from "../components/profile/profile";
import Grid from "@mui/material/Grid";
import ButtonStack from "../components/profile/buttonStack";
import { Typography } from "@mui/material";
import React from "react";
import RoastHistoryCard from "../components/profile/roastHistoryCard";
import exampleUser from "../data/exampleUser";
import users from "../data/users";
import { getHistory } from "../apis";
import NavBar from "../components/home/navBar";

const exampleHistoryCard = {
  messages: [
    { sender: exampleUser, content: "loren ipsum" },
    { sender: exampleUser, content: "loren ipsum" },
    { sender: exampleUser, content: "loren ipsum" },
    { sender: exampleUser, content: "loren ipsum" },
    { sender: users["Eda"], content: "loren ipsum" },
    { sender: users["Eda"], content: "loren ipsum" },
    { sender: users["Eda"], content: "loren ipsum" },
    { sender: exampleUser, content: "loren ipsum" },
    { sender: exampleUser, content: "loren ipsum" },
    { sender: exampleUser, content: "loren ipsum" },
    { sender: exampleUser, content: "loren ipsum" },
    { sender: users["Eda"], content: "loren ipsum" },
    { sender: users["Eda"], content: "loren ipsum" },
    { sender: users["Eda"], content: "loren ipsum" },
  ],
  roomID: 340598,
  date: new Date(),
};

function CritiqHistory() {
  /* This function will have an useEffect hook to send a authorized GET call to our server to retrieve
     user's roast history messages and pass it down as props to RoastHistoryCard
  **/

  // const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const [rooms, setRooms] = React.useState([]);
  const [inProp, setInProp] = React.useState(true);

  React.useEffect(() => {
    const getAndSetRooms = async () => {
      try {
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        const roomsHistory = (await getHistory(currentUser._id)).data.rooms;
        setRooms(roomsHistory);
      } catch (error) {
        console.log(error);
      }
    };
    getAndSetRooms();
  }, []);

  return (
    <React.Fragment>
      <NavBar inProp={inProp} setInProp={setInProp} /> 
      <React.Fragment></React.Fragment>
      <Typography variant="h1">Critique History</Typography>
      <Grid container spacing={2}>
        {
          // Only get rooms who's host satisfy the tags
          rooms.map((room) => (
            <Grid item xs={4}>
              <RoastHistoryCard room={room} />
            </Grid>
          ))
        }
      </Grid>
    </React.Fragment>
  );
}

export default CritiqHistory;
