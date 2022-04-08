import {
  Container,
  IconButton,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <Container align="center">
        <Box className="footer-inside">
          <ListItemButton component={Link} to="/products">
            <ListItemText primary="SHOP" />
          </ListItemButton>
          <ListItemButton component={Link} to="/about">
            <ListItemText primary="ABOUT" />
          </ListItemButton>

          <ListItemButton component={Link} to="/feedbacks">
            <ListItemText primary="FEEDBACKS" />
          </ListItemButton>
        </Box>
        <Box className="footer-inside" align="center">
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <PinterestIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Box>
        <Typography>
          ©2022 Sweet Lady Jane. All Rights Reserved. | Website by A & R
          Creative
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
