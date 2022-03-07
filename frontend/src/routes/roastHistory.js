import { Link } from "react-router-dom";
import Image from "../components/profile/image";
import TextCard from "../components/profile/textCard";
import StatsCard from "../components/profile/stats";
import Profile from "../components/profile/profile";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ButtonStack from "../components/profile/buttonStack";
import { Typography } from "@mui/material";
import React from "react";
import RoastHistoryCard from "../components/profile/roastHistoryCard";
import exampleUser from '../data/exampleUser';
import users from '../data/users';

const exampleHistoryCard = {
  messages: [{sender: exampleUser, content: 'loren ipsum'},
  {sender: exampleUser, content: 'loren ipsum'},
  {sender: exampleUser, content: 'loren ipsum'},{sender: exampleUser, content: 'loren ipsum'},
  {sender: users['Eda'], content: 'loren ipsum'},{sender: users['Eda'], content: 'loren ipsum'},
  {sender: users['Eda'], content: 'loren ipsum'},
  {sender: exampleUser, content: 'loren ipsum'},
  {sender: exampleUser, content: 'loren ipsum'},
  {sender: exampleUser, content: 'loren ipsum'},{sender: exampleUser, content: 'loren ipsum'},
  {sender: users['Eda'], content: 'loren ipsum'},{sender: users['Eda'], content: 'loren ipsum'},
  {sender: users['Eda'], content: 'loren ipsum'}],
  roomID: 340598,
  date: new Date()
};

function RoastHistory() {

  /* This function will have an useEffect hook to send a authorized GET call to our server to retrieve
     user's roast history messages and pass it down as props to RoastHistoryCard
  **/
  
  return (
    <React.Fragment>
      <Typography variant="h1">
        Critique History
      </Typography>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <RoastHistoryCard {...exampleHistoryCard}/>
      </Grid>
      <Grid item xs={4}>
      <RoastHistoryCard {...exampleHistoryCard}/>
      </Grid>
      <Grid item xs={4}>
      <RoastHistoryCard {...exampleHistoryCard}/>
      </Grid>
      <Grid item xs={4}>
      <RoastHistoryCard {...exampleHistoryCard}/>
      </Grid>
      <Grid item xs={4}>
      <RoastHistoryCard {...exampleHistoryCard}/>
      </Grid>
      <Grid item xs={4}>
      <RoastHistoryCard {...exampleHistoryCard}/>
      </Grid>
    </Grid>
    </React.Fragment>
  );
}

export default RoastHistory;
