import { Avatar, Typography, Grid } from "@mui/material";
import exampleUser from "../../data/exampleUser";
const Message = (props) => {
  const nonViewerAvatarStyle = {
    marginTop: "0.6em",
    marginLeft: 3,
  };

  const viewerAvatarStyle = {
    marginTop: "0.6em",
    marginRight: 3,
  };

  // https://stackoverflow.com/a/17756714
  // https://stackoverflow.com/a/61526114
  const viewerMessageStyle = {
    overflowX: "hidden",
    overflowWrap: "break-word",
    borderRadius: 10,
    padding: 1.2,
    marginRight: 3,
    marginY: 1,
    fontSize: "1.2rem",
  };

  const nonViewerMessageStyle = {
    overflowX: "hidden",
    overflowWrap: "break-word",
    borderRadius: 10,
    padding: 1.2,
    marginLeft: 3,
    marginY: 1,
    fontSize: "1.2rem",
  };

  const { sender, content } = props;

  let viewerColContent = "";
  let nonViewerColContent = "";

  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  if (sender._id === currentUser._id) {
    viewerColContent = content;
    viewerMessageStyle["backgroundColor"] = "pink";
  } else {
    nonViewerColContent = content;
    nonViewerMessageStyle["backgroundColor"] = "#FBDB65";
  }

  let nonViewerAvatar, viewerAvatar;

  if (nonViewerColContent === "") {
    nonViewerAvatar = null;
    viewerAvatar = <Avatar sx={viewerAvatarStyle} src={sender.images[0]} />;
  } else {
    nonViewerAvatar = (
      <Avatar sx={nonViewerAvatarStyle} src={sender.images[0]} />
    );
    viewerAvatar = null;
  }

  return (
    <Grid container>
      <Grid item xs={1}>
        {nonViewerAvatar}
      </Grid>
      <Grid item xs={4}>
        <Typography sx={nonViewerMessageStyle}>
          {nonViewerColContent}
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Typography sx={viewerMessageStyle}>{viewerColContent}</Typography>
      </Grid>
      <Grid item xs={1}>
        {viewerAvatar}
      </Grid>
    </Grid>
  );
};
export default Message;
