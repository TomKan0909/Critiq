import * as React from "react";
import { Box } from "@mui/material";
import Message from "./message";
import { grey } from "@mui/material/colors";

const MessageLog = (props) => {
  const { messages, height, scroll, setScroll, sx } = props;
  const messagesEndRef = React.useRef(null);

  const [numMessagesPlusOne, setNumMessagesPlusOne] = React.useState(0)
  const [firstScroll, setFirstScroll] = React.useState(false)

 React.useEffect(() => {
    if (scroll) {
      if (!firstScroll) {
        setFirstScroll(true)
        setNumMessagesPlusOne(messages.length + 1)
      } else {
        if (messages.length >= numMessagesPlusOne) {
          setScroll(false)
          setFirstScroll(false)
        }
      }
      messagesEndRef.current?.scrollIntoView({behavior: 'auto'});
    }
  })

  let chatStyle = {
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

  chatStyle = {...chatStyle, ...sx}

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
