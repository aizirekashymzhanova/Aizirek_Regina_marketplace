import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Typography } from "@mui/material";

export default function BasicList() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Typography component="body1">Shop</Typography>
        <Typography component="body1">Shop</Typography>
        <Typography component="body1">Shop</Typography>
        <Typography component="body1">Shop</Typography>
      </Grid>
    </Container>
  );
}
