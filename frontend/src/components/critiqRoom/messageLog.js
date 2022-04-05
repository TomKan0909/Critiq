import * as React from "react";
import { Box } from "@mui/material";
import Message from "./message";
import { grey } from "@mui/material/colors";

const MessageLog = (props) => {
  const { messages, height, scroll} = props;
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
    borderBottom: "solid 3px " + grey[600],
    backgroundColor: grey[200],
    borderTopLeftRadius: "10px",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      color: "black",
    },
    "::-webkit-scrollbar-thumb:vertical": {
      backgroundColor: grey[600],
      borderRadius: "20px"
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: grey[400],
      borderRadius: "20px"
    }
  };

  return (
    <Box sx={chatStyle} height={height}>
      {messages.map((message) => (
        <Message sender={message.sender} content={message.content}></Message>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};
export default MessageLog;
