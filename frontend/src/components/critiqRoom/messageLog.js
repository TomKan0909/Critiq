import * as React from "react";
import { Box } from "@mui/material";
import Message from "./message";

const MessageLog = (props) => {
  const { messages, maxHeight, scroll} = props;
  console.log(scroll)
  const messagesEndRef = React.useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
  }

  if (scroll) {
    scrollToBottom()
  }

  const chatStyle = {
    overflowY: "scroll",
  };
  return (
    <Box sx={chatStyle} maxHeight={maxHeight}>
      {messages.map((message) => (
        <Message sender={message.sender} content={message.content}></Message>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};
export default MessageLog;
