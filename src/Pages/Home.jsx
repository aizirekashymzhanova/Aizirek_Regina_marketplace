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
        <Typography className="home-p" mt="50px" sx={{ fontWeight: "bold" }}>
          At Sweet Lady Jane we break our own eggs, peel our own apples, roll
          our own pastry, and squeeze our own lemons. We use the finest fair
          trade chocolate, the freshest butter and cream, the highest quality
          in-season fruit, and no preservatives.
        </Typography>
        <Typography className="home-p" color="red" sx={{ fontWeight: "bold" }}>
          Our mission is simple – we make good things even better.
        </Typography>
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7891933950223!2d74.58995091546709!3d42.87729341027228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec98281e85c63%3A0x305e5b2a69cb4fcb!2sMakers%20Studio!5e0!3m2!1sru!2skg!4v1649415754983!5m2!1sru!2skg"
            width="100%"
            height="300"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </Container>
    </>
  );
};

export default Home;
