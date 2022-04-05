import {
  CardActionArea,
  Typography,
  Modal,
  Box,
  CardContent,
  Card,
} from "@mui/material";
import React from "react";
import MessageLog from "../critiqRoom/messageLog";
import exampleUser from "../../data/exampleUser";

const chatStyle = {
  border: "3px solid black",
  borderTopLeftRadius: "10px",
  height: "90vh",
  width: "50%",
  margin: "auto",
  marginTop: "50px",
};

const chatBarStyle = {
  width: "100%",
  borderRadius: "10px",
};

export default function CritiqHistoryCard({ room }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: "100%", margin: "10%" }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Room #{room._id}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {room.createdAt}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click to view history
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={chatStyle}>
          <MessageLog messages={room.messages} height={"90vh"}/>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
