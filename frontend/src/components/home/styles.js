import { Table, TableCell, Container, Grid, Card, styled} from "@mui/material";

import { brown } from "@mui/material/colors";

export const RoastCardItem = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: "20px",
  // border: "solid",
  borderRadius: "10px",
  borderWidth: "3px",
  margin: "20px",
  maxWidth: "300px"
}));

export const RoastCardContainer = styled(Grid)(({ theme }) => ({
  borderRadius: "20px",
  marginBottom: "100px",
  // backgroundColor: "#EEECED",
  border: "solid",
  borderWidth: "3px",
}));

export const StickyProfile = styled(Container)(({ theme }) => ({
  position: "sticky",
  top: "5vh",
  backgroundColor: theme.palette.secondary.main,
  border: "solid",
  borderColor: theme.palette.secondary.main,
  borderWidth: "3px",
  borderRadius: "20px",
}));
