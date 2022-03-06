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

const exampleHistoryCard = {
  messages: [{sender: '1', content: 'loren ipsum'},
  {sender: '1', content: 'loren ipsum'},
  {sender: '1', content: 'loren ipsum'},{sender: '1', content: 'loren ipsum'},
  {sender: '2', content: 'loren ipsum'},{sender: '2', content: 'loren ipsum'},
  {sender: '2', content: 'loren ipsum'},
  {sender: '1', content: 'loren ipsum'},
  {sender: '1', content: 'loren ipsum'},
  {sender: '1', content: 'loren ipsum'},{sender: '1', content: 'loren ipsum'},
  {sender: '2', content: 'loren ipsum'},{sender: '2', content: 'loren ipsum'},
  {sender: '2', content: 'loren ipsum'}],
  roomID: 340598,
  date: new Date()
};

function RoastHistory() {
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
