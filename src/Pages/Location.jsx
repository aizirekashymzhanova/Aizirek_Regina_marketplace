import React from "react";

import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Location = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container>
        <Typography
          variant="h4"
          component="div"
          align="center"
          m="50px"
          color="darkred"
        >
          LOCATIONS
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <img
              width="100%"
              src="https://sweetladyjane.com/wp-content/uploads/2021/06/BeverlyHillsStoreFront-40-1080px-rt.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              width="100%"
              src="https://sweetladyjane.com/wp-content/uploads/2021/06/slj_lifestyle-118-1080px.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              width="100%"
              src="https://sweetladyjane.com/wp-content/uploads/2021/06/BeverlyHillsStoreFront-14-1080px.jpg"
              alt=""
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} mt="2px" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Calabasas
                </Typography>
                <Typography variant="body2">
                  23653 Calabasas Rd.
                  <br />
                  Calabasas, CA 91302
                  <br />
                  (818) 914-5080
                  <br />
                  calabasas@sweetladyjane.com
                  <br />
                  Sun – Thurs | 10 am – 4 pm
                  <br />
                  Fri – Sat | 10 am – 7 pm
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Encino
                </Typography>
                <Typography variant="body2">
                  16403 Ventura Blvd. Suite C
                  <br />
                  Encino, CA 91436
                  <br />
                  (818) 783-8188
                  <br />
                  encino@sweetladyjane.com
                  <br />
                  Sun – Thurs | 10 am – 4 pm
                  <br />
                  Fri – Sat | 10 am – 5 pm
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Beverly Hills
                </Typography>
                <Typography variant="body2">
                  214 S. Beverly Drive
                  <br />
                  Beverly Hills, CA 90212
                  <br />
                  (424) 278-1868
                  <br />
                  beverly@sweetladyjane.com
                  <br />
                  Sun – Thurs | 10 am – 4 pm
                  <br />
                  Fri – Sat | 10 am – 5 pm
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          component="div"
          align="center"
          m="50px"
          color="darkred"
        >
          LAST PRE-ORDER PICKUP: ONE HALF HOUR BEFORE CLOSE
        </Typography>
      </Container>
    </Box>
  );
};

export default Location;
