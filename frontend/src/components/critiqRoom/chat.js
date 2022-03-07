import * as React from "react";
import MessageLog from "./messageLog";
import { TextField, Typography, Box } from "@mui/material";
import exampleUser from "../../data/exampleUser";
const Chat = ({ subject }) => {
  const [messages, setMessages] = React.useState([
    { sender: subject, content: "hi" },
  ]);
  const [text, setText] = React.useState("");

  const getMessages = () => {
    // call to server
    return messages;
  };

  const addMessage = (message) => {
    // call to server
    messages.push(message);
  };

  const updateMessage = (event) => {
    setText(event.target.value);
  };

  const detectReturn = (event) => {
    if (event.key === "Enter" && text !== "") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    addMessage({
      sender: exampleUser,
      content: text,
    });
    setText("");
  };

  const chatStyle = {
    border: "2px solid black",
    borderRadius: "10px",
    marginTop: "5%",
    height: "70vh",
    width: "100%",
  };

  const chatBarStyle = {
    backgroundColor: "pink",
    width: "100%",
    borderRadius: "10px",
  };

  const chatFormStyle = {
    position: "sticky",
    top: "65%",
    width: "90%",
    placeholder: "Aa",
  };

  return (
    <Box sx={chatStyle}>
      <Typography variant="h4" sx={chatBarStyle} align="center" gutterBottom>
        critiq room
      </Typography>
      <MessageLog messages={getMessages()} maxHeight="75%"></MessageLog>
      <TextField
        sx={chatFormStyle}
        onChange={updateMessage}
        onKeyDown={detectReturn}
        placeholder={"Aa"}
        value={text}
        inputProps={{ style: { fontSize: "1.2rem" } }}
      ></TextField>
    </Box>
    // https://stackoverflow.com/a/55992355
  );
};
export default Chat;
