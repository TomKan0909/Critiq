import * as React from 'react';
import { Box } from '@mui/material';
import Message from './message';
const MessageList = (props) => {
    const {messages, viewer} = props
    const chatStyle = {
        overflowY: 'scroll'
    }
    return (
        <Box sx={chatStyle} maxHeight={'80%'}>
            {messages.map(message => (
            <Message 
                sender={message.sender}
                viewer={viewer}
                content={message.content}>
            </Message>))}
        </Box>
    )
}
export default MessageList