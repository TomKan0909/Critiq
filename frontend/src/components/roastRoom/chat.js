import * as React from 'react';
import { Box } from '@mui/material';
import ChatBar from './chatBar';
import MessageLog from './messageLog';
import { Grid, Button, TextField } from '@mui/material';
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


    return (
        <Box>
            <ChatBar></ChatBar>
            <MessageLog messages={messages} viewer={1}></MessageLog>
            <Grid container rowSpacing={1} 
              columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
              alignItems="center">
              <Grid item xs={5}>
                  <TextField onChange={updateMessage} value={text}></TextField>
              </Grid>
              <Grid item xs={2}>
                  <Button onClick={sendMessage}>Send</Button>
              </Grid>
            </Grid>
            
        </Box>
    )
}
export default Chat