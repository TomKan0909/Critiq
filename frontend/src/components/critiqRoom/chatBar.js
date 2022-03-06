
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/material/';

const chatBarStyle = {
    borderRadius: 10,
    border: 5
}


const ChatBar = () => {
    return (
           <Typography variant="h4" sx={chatBarStyle} >Roast Room</Typography> 
    )
}
export default ChatBar