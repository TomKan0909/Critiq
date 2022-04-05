import * as React from "react";
import { Box } from "@mui/material";
import Message from "./message";
import { grey } from "@mui/material/colors";

const MessageLog = (props) => {
  const { messages, height, scroll, setScroll } = props;
  const messagesEndRef = React.useRef(null);

  const [numMessages, setNumMessages] = React.useState(0)
  const [numMessagesPlusOne, setNumMessagesPlusOne] = React.useState(0)

 React.useEffect(() => {
    if (scroll) {
      setScroll(false)
      messagesEndRef.current?.scrollIntoView({behavior: 'auto'});
    }
  })



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
      borderRadius: "20px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: grey[400],
      borderRadius: "20px",
    },
  };

  return (
    <Box sx={chatStyle} height={height}>
      {
        messages.map((message) => (
          <Message sender={message.sender} content={message.content}></Message>
        ))
      }
      <div ref={messagesEndRef} />
    </Box>
  );
};
export default MessageLog;
