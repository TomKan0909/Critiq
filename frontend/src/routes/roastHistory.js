import { Link } from "react-router-dom";
import Image from '../components/profile/image';
import TextCard from "../components/profile/textCard";
import StatsCard from '../components/profile/stats';
import Profile from '../components/profile/profile'
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import ButtonStack from '../components/profile/buttonStack'

function RoastHistory () {
    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Profile/>  
        </Grid>
        <Grid item xs={4}>
          <ButtonStack/>
        </Grid>
        <Grid item xs={4}>
          <Profile/>
      </Grid>
      </Grid>
    
    );
}

export default RoastHistory;