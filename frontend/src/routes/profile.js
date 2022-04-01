import { Link } from "react-router-dom";
import Image from "../components/profile/image";
import TextCard from "../components/profile/textCard";
import StatsCard from "../components/profile/stats";
import Profile from "../components/profile/profile";
import { Grid, Box } from "@mui/material";
import Container from "@mui/material/Container";
import ButtonStack from "../components/profile/buttonStack";
import exampleUser from "../data/exampleUser";
import { useLocation } from "react-router-dom";
import NavBar from "../components/home/navBar";
import {useState, useEffect} from 'react';
import {getUserProfile} from '../apis'

function ProfileView() {
  // const { state } = useLocation();
  // console.log(state);
  // const { user } = state;

  // let user = sessionStorage.getItem("user");
  // user = JSON.parse(user);

  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser (){
      const res = await getUserProfile();
      console.log(res);
      setUser(res);
    }
    getUser().catch(console.error)
  }, [])

  if (!user){
    return ('Loading ...')
  }

  /** This function will have a GET server call to retrieve information about current user to pass props down into Profile Component */

  return (
    <Box>
      <NavBar />

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Profile {...user} />
        </Grid>
        <Grid item xs={4}>
          <ButtonStack />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileView;
