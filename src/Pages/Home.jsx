import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <>
      <AwesomeSlider className="hero" sx={{ bgColor: "green" }}>
        <div>
          <img
            width="100%"
            src="https://cdn.wallpapersafari.com/62/64/TMam8O.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            width="100%"
            height="100%"
            src="https://wallpaperaccess.com/full/986769.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            width="100%"
            src="https://cdn.wallpapersafari.com/91/93/tX0l6Q.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            width="100%"
            src="https://cdn.wallpapersafari.com/4/46/aVROwx.jpg"
            alt=""
          />
        </div>
      </AwesomeSlider>
      <Container>
        <Typography className="home-p" mt="50px">
          At Sweet Lady Jane we break our own eggs, peel our own apples, roll
          our own pastry, and squeeze our own lemons. We use the finest fair
          trade chocolate, the freshest butter and cream, the highest quality
          in-season fruit, and no preservatives.
        </Typography>
        <Typography>
          Our mission is simple – we make good things even better.
        </Typography>
      </Container>
    </>
  );
};

export default Home;
