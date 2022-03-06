import { Table, TableCell, Container, Grid, Card, styled } from "@mui/material";

export const RoastCardItem = styled(Card)(({ theme }) => ({
  backgroundColor: "#ECEEEE",
  minWidth: "40vh"
  // borderRadius: "60px",
  // marginTop: "500px",
}));

export const RoastCardContainer = styled(Grid)(({ theme }) => ({
  // backgroundColor: "#ECEEEE",
  borderRadius: "20px",
  marginBottom: "100px",
}));

export const StickyProfile = styled(Container)(({ theme }) => ({
  // backgroundColor: "#ECEEEE",
  // marginTop: "500px",
  position: "sticky",
  top: "15vh",
}));


