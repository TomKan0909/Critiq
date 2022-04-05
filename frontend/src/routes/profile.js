import { Link } from "react-router-dom";
import Image from "../components/profile/image";
import TextCard from "../components/profile/textCard";
import StatsCard from "../components/profile/stats";
import Profile from "../components/profile/profile";
import { Grid, Box } from "@mui/material";
import { Slide } from "@mui/material";
import ButtonStack from "../components/profile/buttonStack";
import exampleUser from "../data/exampleUser";
import { useLocation } from "react-router-dom";
import NavBar from "../components/home/navBar";
import { useState, useEffect } from "react";
import { getUserProfile } from "../apis";
import React from "react";
import { grey } from "@mui/material/colors";

function ProfileView() {
  // const { state } = useLocation();
  // console.log(state);
  // const { user } = state;

  // let user = sessionStorage.getItem("user");
  // user = JSON.parse(user);

  const [user, setUser] = useState();
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [inProp, setInProp] = React.useState(true);

  useEffect(() => {
    async function getUser() {
      const res = await getUserProfile();
      console.log(res);
      setUser(res);
    }
    console.log(openEditProfile);
    getUser().catch(console.error);
  }, [openEditProfile]);

  if (!user) {
    return "";
  }

  const profileStyle = {
    border: "solid " + grey[400],
    borderRadius: "10px",
    backgroundColor: grey[200],
    marginBottom: "2%",
    maxHeight: "800px",
    marginTop: "100px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      color: "black",
    },
    "::-webkit-scrollbar-thumb:vertical": {
      backgroundColor: grey[600],
      borderRadius: "20px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: grey[400],
      borderRadius: "20px",
    },
  };

  const imageStyle = {
    marginBottom: "-20px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };

  const textCardStyle = {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
  };

  /** This function will have a GET server call to retrieve information about current user to pass props down into Profile Component */
  return (
    <Box>
      <NavBar inProp={inProp} setInProp={setInProp} />
      <Grid container spacing={2} sx={{ marginTop: "50px" }}>
        <Grid item xs={2} />
        <Slide in={inProp} timeout={300} direction="up">
          <Grid item xs={8} sx={profileStyle}>
            <Grid container>
              <Grid item xs={4} justifyContent="center">
                <Grid container justifyContent="center">
                  <Grid item xs={12}>
                    <Image img={user.images[0]} sx={imageStyle} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextCard
                      title={user.job}
                      content={user.name}
                      sx={textCardStyle}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonStack
                      openEditProfile={openEditProfile}
                      setOpenEditProfile={setOpenEditProfile}
                      setInProp={setInProp}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Profile {...user} />
              </Grid>
            </Grid>
          </Grid>
        </Slide>
        <Grid item xs={2} />
      </Grid>
    </Box>
  );
}

export default ProfileView;
