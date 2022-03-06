import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography, Modal, Box } from "@mui/material";
import React from "react";
import MessageList from '../roastRoom/messageLog';

const chatStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    height: '90vh',
    width: '50%',
    margin: 'auto',
    marginTop: '50px',
    backgroundColor: '#F8F0E3'
}

const chatBarStyle = {
    backgroundColor: 'pink',
    width: '100%',
    borderRadius: '10px',
}

export default function RoastHistoryCard({messages, roomID, date}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
      setOpen(true)
  }

  const handleClose = () => {
      setOpen(false)
  }

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: "100%", margin: "10%" }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Room #{roomID}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {date.toLocaleDateString("en-US")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click to view history
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    <Modal open={open} onClose={handleClose}>
        <Box sx={chatStyle}>
            <Typography variant="h4" sx={chatBarStyle} align='center' gutterBottom >Roast Room</Typography> 
            <MessageList messages={messages} viewer={'1'} maxHeight='90%'/>
        </Box>
    </Modal>
    </React.Fragment>
  );
}
