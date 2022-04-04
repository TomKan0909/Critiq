import Grid from "@mui/material/Grid";
import Chat from "./chat";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import Profile from "../profile/profile";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getRoomById, stopRoom } from "../../apis";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CritiqRoom = () => {
 
  const [room, setRoom] = useState()
  const roomId = useParams().id

  useEffect(() => {
    const getAndSetRoom = async () => {
      const room = (await getRoomById(roomId)).data.room
      setRoom(room)
    }

    getAndSetRoom()

  }, [])

  const navigate = useNavigate();

  const handleStop = async () => {
    const status = await stopRoom(roomId)
    console.log(status)
    navigate('/') 
  }

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
    return ('Loading')
  }

  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
  console.log(currentUser.isAdmin)

  console.log(currentUser)
  console.log(room)
  


  if (currentUser.isAdmin || currentUser._id === room.creator._id ) {
    interaction = (
      <Button sx={stopButtonStyle} onClick={handleStop} fullWidth variant="contained">
        stop room
      </Button>
    );
  } else {
    interaction = (
      <Box sx={ratingBoxStyle}>
        <Typography variant="h4">leave a rating</Typography>
        <Rating
          sx={ratingStyle}
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

  if (!room){
    return ('Loading ...')
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Profile {...room.creator} />
        </Grid>
        <Grid item xs={6}>
          <Chat subject={room.creator} />
          {interaction}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CritiqRoom;
