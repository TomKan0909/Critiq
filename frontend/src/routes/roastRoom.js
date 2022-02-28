import { Link } from "react-router-dom";
import Image from '../components/profile/image';
import TextCard from "../components/profile/textCard";
import StatsCard from '../components/profile/stats';
import Grid from "@mui/material/Grid";
import Chat from "../components/roastRoom/chat";

const RoastRoom = () => {
  return (
    <>
      <main>
          <Grid container rowSpacing={1} 
              columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
              alignItems="center">
              <Grid item xs={3}>
                <Image/>
                <TextCard/>
                <StatsCard/>
              </Grid>
              <Grid item xs={2}>
                <Chat/>
              </Grid>
          </Grid>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default RoastRoom;