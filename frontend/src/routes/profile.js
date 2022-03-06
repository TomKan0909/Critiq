import { Link } from "react-router-dom";
import Image from "../components/profile/image";
import TextCard from "../components/profile/textCard";
import StatsCard from "../components/profile/stats";
import Profile from "../components/profile/profile";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ButtonStack from "../components/profile/buttonStack";
import exampleUser from '../data/exampleUser';

function ProfileView({user}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Profile {...user} />
      </Grid>
      <Grid item xs={4}>
        <ButtonStack />
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Grid>
    </Grid>
  );
}

export default ProfileView;
