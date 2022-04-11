import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
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
      <h1>My Favorites</h1>

      {fav?.products.length > 0 ? (
        fav.products.map((elem) => (
          <Card
            sx={{ maxWidth: 345, backgroundColor: "#3A3A38" }}
            key={elem.item.id}
          >
            <CardMedia
              component="img"
              height="220"
              image={elem.item.img}
              alt={elem.item.title}
            />
            <CardContent sx={{ display: "flex" }}>
              <Typography
                gutterBottom
                variant="h6"
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
        ))
      ) : (
        <>
          <h2>You don't have any favorite product yet</h2>
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
        </>
      )}
    </div>
  );
};

export default Favorite;
