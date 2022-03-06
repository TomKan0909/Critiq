import * as React from 'react';
import { Box } from '@mui/material';
import Message from './message';

const MessageLog = (props) => {
    const {messages, maxHeight} = props
    const chatStyle = {
        overflowY: 'scroll'
    }
    return (
        <Box sx={chatStyle} maxHeight={maxHeight}>
            {messages.map(message => (
            <Message 
                sender={message.sender}
                content={message.content}>
            </Message>))}
        </Box>
    )
}
export default MessageLog