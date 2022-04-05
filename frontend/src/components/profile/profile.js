import Image from "./image";
import TextCard from "./textCard";
import StatsCard from "./stats";
import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const innerBoxProfileStyle = {
  alignItems: "center",
  display: "block",
};

/**
 *
 * @param {images} a list of image  object {img}
 * @param {prompts} a list of prompt object{title, content}
 * @param {tags} an object containing tags of(age, gender, height, location, ethnicity, alcohol)
 * @returns
 */
export default function Profile({ name, images, prompts, tags}) {
  return (
    <Grid container>
      <Grid item xs={6}>
      <StatsCard {...tags} />
      <TextCard {...prompts[0]} />
      <TextCard {...prompts[0]} />
      <TextCard {...prompts[1]} />
      <TextCard {...prompts[2]} />
      <Image img={images[1]} />
      </Grid>
      <Grid item xs={6}>
      <Image img={images[2]} />
      <Image img={images[3]} />
      <Image img={images[4]} />
      <Image img={images[5]} />
      </Grid>
    </Grid>
  );
}
