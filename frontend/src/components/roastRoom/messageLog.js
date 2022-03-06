import * as React from 'react';
import { Box } from '@mui/material';
import Message from './message';
const MessageList = (props) => {
    const {messages, viewer, maxHeight} = props
    const chatStyle = {
        overflowY: 'scroll'
    }
    return (
        <Box sx={chatStyle} maxHeight={maxHeight}>
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