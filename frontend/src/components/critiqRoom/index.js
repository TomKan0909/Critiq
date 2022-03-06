import Grid from "@mui/material/Grid";
import Chat from "./chat";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import Profile from "../profile/profile";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CritiqRoom = ({user, isAdmin}) => {

    const ratingBoxStyle = {
        marginTop: 8
    }

    const ratingStyle = {
        marginTop: 3
    }

    const iconStyle = {
        width: 32,
        height: 32,
        color: 'pink'
    }

    const emptyIconStyle = {
        width: 32,
        height: 32
    }

    const stopButtonStyle = {
        minHeight: 80,
        fontSize: '1.5em',
        marginTop: 8  
      }
  
    let interaction;
    if (isAdmin) {
        interaction = <Button sx={stopButtonStyle} fullWidth variant="contained">stop room</Button>
    } else {
        interaction = 
            <Box sx={ratingBoxStyle}>
                <Typography variant='h4'>leave a rating</Typography>
                <Rating sx = {ratingStyle}
                    icon = {<FavoriteIcon sx={iconStyle}></FavoriteIcon>}
                    emptyIcon = {<FavoriteBorderIcon sx={emptyIconStyle}></FavoriteBorderIcon>}
                        name="size-large" 
                        defaultValue={0} 
                        size="large"/>
            </Box>
    }


    return (
        <Container>
            <Grid container>
                <Grid item xs={6}>
                <Profile {...user} />
                </Grid>
                <Grid item xs={6}>
                    <Chat subject={user} />
                    {interaction}
                </Grid>
            </Grid>
        </Container>
    );
};

export default CritiqRoom;
