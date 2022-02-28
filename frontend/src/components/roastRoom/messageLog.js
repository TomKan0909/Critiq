import * as React from 'react';
import { Table, TableBody } from '@mui/material';
import Message from './message';
const MessageList = (props) => {

    const {messages, viewer} = props

    return (
        <Table>
            <TableBody>
                {messages.map(message => (
                <Message 
                    sender={message.sender}
                    viewer={viewer}
                    content={message.content}>
                </Message>))}
            </TableBody>            
        </Table>
    )
}
export default MessageList