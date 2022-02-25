import { Link } from "react-router-dom";
import Image from '../components/profile/image';
import TextCard from "../components/profile/textCard";
import StatsCard from '../components/profile/stats';
import Grid from "@mui/material/Grid";

const Profile = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Image/>
          <TextCard/>
          <StatsCard/>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </Grid>
      </Grid>
   
    );
}

export default Profile;