import Image from "../profile/image";
import TextCard from "../profile/textCard";
import StatsCard from "../profile/stats";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const outerBoxProfileStyle = {
  border: "solid " + grey[400],
  borderRadius: "10px",
  backgroundColor: grey[200],
  marginLeft: "10%",
  marginRight: "10%",
  marginTop: "30px",
  marginBottom: "2%",
};
const innerBoxProfileStyle = {
  overflowY: "scroll", // added scroll
  alignItems: "center",
  marginY: "6px",
  display: "block",
  height: "780px",
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

/**
 *
 * @param {images} a list of image  object {img}
 * @param {prompts} a list of prompt object{title, content}
 * @param {tags} an object containing tags of(age, gender, height, location, ethnicity, alcohol)
 * @returns
 */
export default function CritiqProfile({ user }) {
  return (
    <Box sx={outerBoxProfileStyle}>
      <Box sx={innerBoxProfileStyle}>
        <Image img={user.images[0]} />
        <TextCard title={user.occupation} content={user.name} />
        <StatsCard
          age={user.age}
          gender={user.gender}
          height={user.height}
          location={user.location}
          ethnicity={user.ethnicity}
          alcohol={user.alcohol}
          occupation={user.occupation}
          school={user.school}
        />
        <TextCard {...user.prompts[0]} />
        <TextCard {...user.prompts[1]} />
        <TextCard {...user.prompts[2]} />
        <Image img={user.images[1]} />
        <Image img={user.images[2]} />
        <Image img={user.images[3]} />
        <Image img={user.images[4]} />
        <Image img={user.images[5]} />
      </Box>
    </Box>
  );
}
