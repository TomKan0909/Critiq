import Image from "./image";
import TextCard from "./textCard";
import StatsCard from "./stats";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const outerBoxProfileStyle = {
  border: "solid",
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
    borderRadius: "20px"
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: grey[400],
    borderRadius: "20px"
  }
};

/**
 *
 * @param {images} a list of image  object {img}
 * @param {prompts} a list of prompt object{title, content}
 * @param {tags} an object containing tags of(age, gender, height, location, ethnicity, alcohol)
 * @returns
 */
export default function Profile({ name, images, prompts, tags }) {
  return (
    <Box sx={outerBoxProfileStyle}>
      <Box sx={innerBoxProfileStyle}>
        <Image img={images[0]} />
        <TextCard {...prompts[0]} />
        <StatsCard {...tags} />
        <Image img={images[1]} />
        <Image img={images[2]} />
        <TextCard {...prompts[1]} />
        <Image img={images[3]} />
        <TextCard {...prompts[2]} />
        <Image img={images[4]} />
        <Image img={images[5]} />
      </Box>
    </Box>
  );
}
