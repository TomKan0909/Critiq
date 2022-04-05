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
import { grey } from "@mui/material/colors";

const chatStyle = {
  border: "4px solid " + grey[400],
  borderRadius: "10px",
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px",
  height: "90vh",
  width: "50%",
  margin: "auto",
  marginTop: "50px",
  backgroundColor: grey[200]
};

const chatBarStyle = {
  width: "100%",
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
      <Card sx={{ maxWidth: "100%", margin: "10%", backgroundColor:  grey[200] }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Typography gutterBottom variant="h4">
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
          <MessageLog messages={room.messages} height={"90vh"} sx={{borderRadius: "10px"}} />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
