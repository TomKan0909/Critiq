import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Chat from "../components/roastRoom/chat";
import { Container } from "@mui/material";
import Profile from '../components/profile/profile';

const RoastRoom = () => {
  return (
    <>
      <Container>
          <Grid container>
              <Grid item xs={6}>
                <Profile/>
              </Grid>
              <Grid item xs={6}>
                <Chat/>
              </Grid>
          </Grid>
      </Container>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default RoastRoom;