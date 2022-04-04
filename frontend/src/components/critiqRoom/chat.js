import * as React from "react";
import MessageLog from "./messageLog";
import { TextField, Typography, Box } from "@mui/material";
import { saveMessage } from "../../apis/RoomAPI";
import { useParams } from 'react-router-dom';
const Chat = ({room}) => {

  const roomId = useParams().id
  const [text, setText] = React.useState("");

  
  const updateMessage = (event) => {
    setText(event.target.value);
  };

  const sendMessage = async (event) => {
    if (event.key === "Enter" && text !== "") {
      const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
      const message = {
        sender: currentUser,
        content: text, 
      }
      await saveMessage(roomId, message);
      setText("");
    }
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
      <MessageLog messages={room.messages} maxHeight="75%"></MessageLog>
      <TextField
        sx={chatFormStyle}
        onChange={updateMessage}
        onKeyDown={sendMessage}
        placeholder={"Aa"}
        value={text}
        inputProps={{ style: { fontSize: "1.2rem" } }}
      ></TextField>
    </Box>
    // https://stackoverflow.com/a/55992355
  );
};
export default Chat;
