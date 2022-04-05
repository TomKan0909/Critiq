import * as React from "react";
import MessageLog from "./messageLog";
import { TextField, Typography, Box, Grid } from "@mui/material";
import { saveMessage } from "../../apis/RoomAPI";
import { useParams } from "react-router-dom";
import { grey } from "@mui/material/colors";
const Chat = ({ room }) => {
  const roomId = useParams().id;
  const [text, setText] = React.useState("");
  const [scroll, setScroll] = React.useState(false);

  const updateMessage = (event) => {
    setText(event.target.value);
  };

  const sendMessage = async (event) => {
    if (event.key === "Enter" && text !== "") {
      const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
      const message = {
        sender: currentUser,
        content: text,
      };
      await saveMessage(roomId, message);
      setText("");
      setScroll(true);
    }
  };

  const getScroll = () => {
    if (scroll) {
      setScroll(false);
      return true;
    } else {
      return false;
    }
  };

  const chatStyle = {
    backgroundColor: grey[400],
    borderRadius: "10px",
    marginTop: "5%",
    height: "65vh",
    width: "100%",
    position: "relative",
  };

  const chatBarStyle = {
    backgroundColor: "pink",
    width: "100%",
    borderRadius: "10px",
  };

  const chatFormStyle = {
    position: "absolute",
    bottom: "30px",
    left: "29px",
    width: "90%",
    placeholder: "Aa",
    margin: "0px",
    backgroundColor: "white",
    borderRadius: "5px",
  };

  return (
    <Box sx={chatStyle}>
      <MessageLog
        messages={room.messages}
        height="530px"
        scroll={getScroll()}
      />
      <TextField
        sx={chatFormStyle}
        onChange={updateMessage}
        onKeyDown={sendMessage}
        placeholder={"Aa"}
        value={text}
        inputProps={{ style: { fontSize: "1.2rem" } }}
      />
    </Box>
    // https://stackoverflow.com/a/55992355
  );
};
export default Chat;
