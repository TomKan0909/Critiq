import * as React from "react";
import Plot from "./plot";
import { Container, Typography, Fade, Grow, Box } from "@mui/material/";
import { titleStyle } from "../../styles";
import DataSelector from "./dataSelector";

// https://mui.com/components/grid/
const KeyStats = ({ inProp }) => {
  const [source, setSource] = React.useState("None");

  const handleChange = (event) => {
    setSource(event.target.value);
  };

  return (
    <Container>
      <Fade in={inProp} timeout={800}>
        <Typography sx={titleStyle} variant="h3" gutterBottom>
          Key Statistics
        </Typography>
      </Fade>
      <Grow in={inProp} timeout={300}>
        <Box>
          <DataSelector source={source} onChange={handleChange} />
        </Box>
      </Grow>
      <Plot source={source} />
    </Container>
  );
};

export default KeyStats;
