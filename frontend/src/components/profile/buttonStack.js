import { Stack, Button } from "@mui/material";

export default function ButtonStack () {
    return (
        <Stack spacing='40px' sx={{alignItems: 'center', marginTop: '300px'}}>
            <Button variant='contained' color='primary' size="medium" sx={{maxWidth:"200px"}}>
                Edit Profile
            </Button>
            <Button variant='contained' color='success' size="medium" sx={{maxWidth:"200px"}}>
                Go Live
            </Button>
            <Button variant='contained' color='info' size="medium" sx={{maxWidth:"200px"}}>
                View Roast History
            </Button>
        </Stack>
    )

}