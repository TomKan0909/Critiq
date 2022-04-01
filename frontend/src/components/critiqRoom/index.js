import Grid from "@mui/material/Grid";
import Chat from "./chat";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import Profile from "../profile/profile";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getRoomById, getUserById } from "../../apis";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CritiqRoom = () => {
 
  const [creator, setCreator] = useState()
  const roomId = useParams().id

  useEffect(() => {
    const getAndSetCreator = async () => {
      const room = (await getRoomById(roomId)).data.room
      const creatorId = room.creator 
      const creator = (await getUserById(creatorId))
      console.log(creator)
      setCreator(creator)
    }

    getAndSetCreator()

  }, [])

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
  
  if (sessionStorage.getItem('user') === "admin") {
    interaction = (
      <Button sx={stopButtonStyle} fullWidth variant="contained">
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

  if (!creator){
    return ('Loading ...')
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Profile {...creator} />
        </Grid>
        <Grid item xs={6}>
          <Chat subject={creator} />
          {interaction}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CritiqRoom;
