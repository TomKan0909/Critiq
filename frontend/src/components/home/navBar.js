import React, { useState } from "react";
import {
  useScrollTrigger,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Fade,
  Button,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../apis";
import { createRoom, getLatestRoom } from "../../apis";
import { getCurrentUser } from "../../apis";

export default function NavBar({ inProp, setInProp }) {
  const user = JSON.parse(sessionStorage.getItem("currentUser"))

  const navigate = useNavigate();
  const location = useLocation();

  const trigger = useScrollTrigger({
    threshold: 200,
    disableHysteresis: true,
  });

  let appBarStyle = {
    background: trigger ? "black" : "transparent",
    transition: "all .3s ease-in",
  };

  let iconButtonStyle = {
    margin: "20px",
    color: trigger ? "white" : "black",
    borderRadius: "10px",
    fontWeight: "bold",
    float: "right",
    fontSize: "medium",
    transition: "all .3s ease-in",
  };

  let titleStyle = {
    fontFamily: "Nunito",
    color: trigger ? "white" : "black",
    transition: "all .3s ease-in",
  };

  const handleLogout = async () => {
    await logout();
    setInProp(false);
    setTimeout(() => navigate("/login"), 1000);
  };

  const handleHome = () => {
    // Only navigate to home if not already there
    if (location.pathname != "/") {
      setInProp(false);
      if (sessionStorage.getItem("admin")) {
        setTimeout(() => navigate("/admin"), 1000);
      } else {
        setTimeout(() => navigate("/"), 1000);
      }
    }
  };

  const handleProfile = () => {
    // Only navigate to profile if not already there
    if (location.pathname != "/profile") {
      setInProp(false);
      if (sessionStorage.getItem("admin")) {
        setTimeout(() => navigate("/usersAdmin"), 1000);
      } else {
        setTimeout(() => navigate("/profile"), 1000);
      }
    }
  };

  const handleGoLive = async () => {
    let room = (await getLatestRoom()).data.room;
    console.log(room);
    if (room === undefined || !room.active) {
      room = (await createRoom(user)).data;
      console.log(room);
      if (room) {
        setInProp(false);
        setTimeout(() => navigate(`/critiqRoom/${room._id}`), 1000);
      } else {
        console.log("error");
      }
    } else if (room !== undefined && room.active) {
      console.log(room);
      setInProp(false);
      setTimeout(() => navigate(`/critiqRoom/${room._id}`), 1000);
    }
  };

  return (
    <AppBar elevation={trigger ? 10 : 0} sx={appBarStyle}>
      <Fade in={inProp} timeout={800}>
        <Toolbar>
          <Typography variant="h4" sx={titleStyle}>
            C R I T I Q
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            color="highlight"
            onClick={handleGoLive}
            sx={{ ...iconButtonStyle, ...{ color: "white" } }}
          >
            GO LIVE
          </Button>
          <IconButton onClick={handleHome} sx={iconButtonStyle}>
            HOME
          </IconButton>
          <IconButton onClick={handleProfile} sx={iconButtonStyle}>
            MY PROFILE
          </IconButton>
          <IconButton onClick={handleLogout} sx={iconButtonStyle}>
            LOG OUT
          </IconButton>
        </Toolbar>
      </Fade>
    </AppBar>
  );
}
