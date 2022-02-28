import { Stack, Button, Alert, Snackbar } from "@mui/material";
import React from 'react';

export default function ButtonStack () {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };


    return (
        <Stack spacing='40px' sx={{alignItems: 'center', marginTop: '300px'}}>
            <Button variant='contained' color='primary' size="medium" sx={{maxWidth:"200px"}}>
                Edit Profile
            </Button>
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