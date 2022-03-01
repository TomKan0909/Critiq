import { Stack, Button, Alert, Snackbar } from "@mui/material";
import React from 'react';
import EditProfile from "./editProfile";

export default function ButtonStack () {
    const [open, setOpen] = React.useState(false);
    const [openEditProfile, setOpenEditProfile] = React.useState(false);
    const handleOpenEditProfile = () => setOpenEditProfile(true);
    const handleCloseEditProfile = () => setOpenEditProfile(false);


    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    console.log(openEditProfile)
    return (
        <Stack spacing='40px' sx={{alignItems: 'center', marginTop: '300px'}}>
            <Button onClick={handleOpenEditProfile} variant='contained' color='primary' size="medium" sx={{maxWidth:"200px"}}>
                Edit Profile
            </Button>
            <EditProfile open={openEditProfile} handleClose={handleCloseEditProfile}/>
            <Button variant='contained' color='success' size="medium" onClick={handleClick} sx={{maxWidth:"200px"}}>
                Go Live
            </Button>
            <Button variant='contained' color='info' size="medium" sx={{maxWidth:"200px"}}>
                View Roast History
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </Stack>
    )

}