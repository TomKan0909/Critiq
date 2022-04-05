import Grid from "@mui/material/Grid";
import Chat from "./chat";
import {
  Box,
  Button,
  Container,
  Rating,
  Typography,
  Fade,
  Slide,
} from "@mui/material";
import Profile from "../profile/profile";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getRoomById, saveMessage, stopRoom } from "../../apis";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../home/navBar";
import React from "react";

const CritiqRoom = () => {
  const [room, setRoom] = useState();
  const roomId = useParams().id;
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const [inProp, setInProp] = React.useState(true);

  useEffect(() => {
    const getAndSetRoom = async () => {
      const room = (await getRoomById(roomId)).data.room;
      setRoom(room);
    };

    getAndSetRoom();
  });

  const handleRate = async (value) => {
    if (value !== null && value !== undefined) {
      const sendRating = async () => {
        const message = {
          sender: currentUser,
          content: `${currentUser.name} rates: ${value} / 5`,
        };
        await saveMessage(roomId, message);
      };
      sendRating();
    }
  };

  const handleStop = async () => {
    //const status = await stopRoom(roomId);
    setTimeout(() => stopRoom(roomId), 1000);
    setInProp(false);
    console.log("HERE")
    if (currentUser.isAdmin) {
      setTimeout(() => navigate("/admin"), 3000);
    } else {
      setTimeout(() => navigate("/"), 3000);
    }
  };

  const ratingBoxStyle = {
    marginTop: 8,
  };

  const ratingStyle = {
    marginTop: 3,
  };

  const iconStyle = {
    width: 32,
    height: 32,
    color: "pink",
  };

  const emptyIconStyle = {
    width: 32,
    height: 32,
  };

  const stopButtonStyle = {
    minHeight: 80,
    fontSize: "1.5em",
    marginTop: 8,
  };

  let interaction;

  if (!room) {
    return "";
  }

  if (!room.active) navigate("/");

  if (currentUser.isAdmin || currentUser._id === room.creator._id) {
    interaction = (
      <Button
        sx={stopButtonStyle}
        onClick={handleStop}
        fullWidth
        variant="contained"
      >
        STOP ROOM
      </Button>
    );
  } else {
    interaction = (
      <Box sx={ratingBoxStyle}>
        <Typography variant="h4">leave a rating</Typography>
        <Rating
          sx={ratingStyle}
          onChange={(event, value) => {
            handleRate(value);
          }}
          icon={<FavoriteIcon sx={iconStyle}></FavoriteIcon>}
          emptyIcon={
            <FavoriteBorderIcon sx={emptyIconStyle}></FavoriteBorderIcon>
          }
          name="size-large"
          defaultValue={0}
          size="large"
        />
      </Box>
    );
  }

  return (
    <Grid>
      <NavBar inProp={inProp} setInProp={setInProp} />
      <Grid container sx={{ marginTop: "100px" }} columns={12}>
        <Grid item xs={2} />
        <Slide in={inProp} direction="up" timeout={300}>
          <Grid item xs={4}>
            <Profile {...room.creator} />
          </Grid>
        </Slide>
        <Grid item xs={0} />
        <Fade in={inProp} timeout={800}>
          <Grid item xs={4}>
            <Chat room={room} />
            {interaction}
          </Grid>
        </Fade>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default CritiqRoom;
