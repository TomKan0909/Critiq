import * as React from 'react';
import ChatBar from './chatBar';
import MessageLog from './messageLog';
import { Grid, Button, TextField, Container, Typography, Box } from '@mui/material';
const Chat = () => {

    const [messages, setMessages] = React.useState([{sender:2, content:'hi'}])
    const [text, setText] = React.useState('')

    const addMessage = (message) => {
        messages.push(message)
    }

    const updateMessage = (event) => {
        setText(event.target.value)
    }

    const sendMessage = () => {
        addMessage({
            sender: 1,
            content: text
        })
        setText('')
    }


    const chatStyle = {
        border: '2px solid black',
        borderRadius: '10px',
        marginTop:'2%',
        height: '91.5vh',
        width: '100%',
     }

    const chatBarStyle = {
        backgroundColor: 'pink',
        width: '100%',
        borderRadius: '10px',

    }

    return (
        <Box sx={chatStyle}>
            <Typography variant="h4" sx={chatBarStyle} align='centre' >Roast Room</Typography> 
            <MessageLog messages={messages} viewer={1}></MessageLog>
            <Grid container rowSpacing={1} 
              alignItems="center">
              <Grid item xs={10}>
                  <TextField fullWidth fullHeight onChange={updateMessage} value={text}></TextField>
              </Grid>
              <Grid item xs={2}>
                  <Button fullWidth fullHeight onClick={sendMessage}>Send</Button>
              </Grid>
            </Grid> 
        </Box>
    )
}
export default Chat