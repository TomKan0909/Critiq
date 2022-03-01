import * as React from 'react';
import { Box } from '@mui/material';
import Message from './message';
const MessageList = (props) => {

    const {messages, viewer} = props
    return (
        <Box>
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