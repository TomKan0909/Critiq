import {
  List,
  ListItemText,
  ListItemIcon,
  Card,
  CardContent,
  Divider,
  ListItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { HiOutlineCake, HiOutlineLocationMarker } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaRulerVertical, FaGraduationCap } from "react-icons/fa";
import { RiGlobeLine, RiSuitcaseLine } from "react-icons/ri";
import { BiWine } from "react-icons/bi";
import "./stats.css"; // needed to do this to edit appearance of scroll bar; for some reason MUI sx does not support webkit-scrollbar
import React from "react";

const statsTopItemStyle = { borderRight: "1px solid rgba(0, 0, 0, 0.12)" };

function StatsTopItem({ text, children }) {
  return (
    <ListItem sx={statsTopItemStyle}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

const boxStatsTopStyle = { mx: "auto", my: "3px", width: "380px" };
const listStatsTopStyle = {
  display: "flex",
  flexDirection: "row",
  width: "auto",
  direction: "row",
};

function StatsTop({ age, gender, height, location, ethnicity, alcohol }) {
  return (
    <Box sx={boxStatsTopStyle}>
      <List sx={listStatsTopStyle}>
        <StatsTopItem text={age} children={<HiOutlineCake />} />
        <StatsTopItem text={gender} children={<CgProfile />} />
        <StatsTopItem text={height} children={<FaRulerVertical />} />
        <StatsTopItem text={location} children={<HiOutlineLocationMarker />} />
        <StatsTopItem text={ethnicity} children={<RiGlobeLine />} />
        <StatsTopItem text={alcohol} children={<BiWine />} />
      </List>
    </Box>
  );
}

const ListItemWrapper = ({ text, icon }) => {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

const cardStatsCardStyle = { maxWidth: 420, marginX: "auto", marginY: "20px" };
const boxStatsCardStyle = {
  width: "100%",
  maxWidth: 420,
  bgcolor: "background.paper",
};

export default function StatsCard({
  age,
  gender,
  height,
  location,
  ethnicity,
  alcohol,
  occupation,
  school,
}) {
  return (
    <Card sx={cardStatsCardStyle}>
      <CardContent>
        <Box sx={boxStatsCardStyle}>
          <List>
            <ListItemWrapper text={occupation} icon={<RiSuitcaseLine />} />
            <Divider />
            <ListItemWrapper text={school} icon={<FaGraduationCap />} />
            <Divider />
            <ListItemWrapper text={age} icon={<HiOutlineCake />} />
            <Divider />
            <ListItemWrapper text={height} icon={<CgProfile />} />
            <Divider />
            <ListItemWrapper
              text={location}
              icon={<HiOutlineLocationMarker />}
            />
            <Divider />
            <ListItemWrapper text={ethnicity} icon={<RiGlobeLine />} />
            <Divider />
            <ListItemWrapper text={alcohol} icon={<BiWine />} />
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}
