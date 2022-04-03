import { Chip, Container, Grid, Card, styled, Box } from "@mui/material";

export const RoastCardItem = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.secondary.main,
  // border: "solid",
  borderRadius: "10px",
  borderWidth: "3px",
  margin: "20px",
  maxWidth: "300px",
}));

export const RoastCardContainer = styled(Grid)(({ theme }) => ({
  borderRadius: "20px",
  marginBottom: "30px",
  // paddingRight: "10px",
  backgroundColor: theme.palette.secondary.main,
  // borderRight: "solid",
  borderColor: "gray",
  borderWidth: "2px",
}));

export const StickyProfile = styled(Container)(({ theme }) => ({
  position: "sticky",
  top: "11vh",
  backgroundColor: theme.palette.secondary.main,
  border: "solid",
  borderColor: theme.palette.secondary.main,
  borderWidth: "3px",
  borderRadius: "20px",
}));

export const FilterChip = styled(Chip)(({ theme }) => ({
  align: "left",
  margin: "10px",
}));