import React from "react";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          component="div"
          align="center"
          m="50px"
          color="darkred"
        >
          OUR STORY
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} sx={{ textAlign: "left" }}>
            <Typography variant="h6" component="div" mt="50px">
              When Jane Lockhart and her husband Donald were dating, he’d often
              cook dinner and she’d make dessert. Jane soon realized that
              working with the best ingredients and simple technique made for
              layers of exquisite texture, rich flavors, and perfect sweetness.
              Jane had fallen in love with baking… and Donald!
              <br />
              <br />
              With support from her family and friends, Jane began baking out of
              her home, selling her delicious desserts to local LA restaurants.
              Quickly, her reputation for taste, quality and style grew, and in
              1988, the original Sweet Lady Jane Bakery opened in West
              Hollywood.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <img
              width="100%"
              src="https://sweetladyjane.com/wp-content/uploads/2020/01/JaneLockhart-DayOne_polaroid.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
      <Box>
        <img src="" alt="" />
      </Box>
      <Container>
        <Typography variant="h6" component="div" mt="50px">
          Ever since then, Sweet Lady Jane has been a part of family traditions,
          intimate friendly gatherings and the most exclusive celebrations. Our
          signature Triple Berry cake is known around the world and ordered
          daily by moms, dads and the Hollywood glitterati.
          <br />
          More than three decades later, Jane’s commitment to freshness and
          simple, all-natural ingredients remains one of our core values. At
          Sweet Lady Jane we break our own eggs, peel our own apples, roll our
          own pastry, and squeeze our own lemons. We use the finest fair trade
          chocolate, the freshest butter and cream, the highest quality
          in-season fruit, and no preservatives. Our mission is simple – we make
          good things even better.
          <br />
          Thank you for being our customer.
        </Typography>
      </Container>
    </>
  );
};

export default About;
