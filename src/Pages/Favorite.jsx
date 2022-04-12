import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useFavorite } from "../Context/FavoriteContextProvider";

const Favorite = () => {
  const { fav, getFav, deleteProdInFav } = useFavorite();

  useEffect(() => {
    getFav();
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "orange" }}>My Favorites</h1>
      <Grid container spacing={2}>
        {fav?.products.length > 0 ? (
          fav.products.map((elem) => (
            <Grid item xs={12} sm={6} md={4} key={elem.item.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: "#3A3A38",
                  height: "300px",
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={elem.item.img}
                  alt={elem.item.title}
                />
                <CardContent sx={{ display: "flex", padding: 2 }}>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="white"
                    component="div"
                    mt="6"
                  >
                    {elem.item.title}
                  </Typography>
                  <Button
                    style={{ margin: 0 }}
                    onClick={() => deleteProdInFav(elem.item.id)}
                  >
                    ❌
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <>
            <Grid item xs={12} sm={12} md={12}>
              <h2 style={{ color: "orange" }}>
                You don't have any favorite product yet!
              </h2>
              <br />
              <img
                src="https://media0.giphy.com/media/3ohhwsjzpejaSWoTkI/200.gif"
                alt=""
              />
              <br />
              <Button
                component={Link}
                variant="outlined"
                color="warning"
                to="/products"
              >
                Start Shopping
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Favorite;
