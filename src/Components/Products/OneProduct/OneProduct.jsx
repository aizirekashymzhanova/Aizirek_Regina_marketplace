import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import { useCart } from "../../../Context/CartContextProvider";
import { useAuth } from "../../../Context/AuthContextProvider";
import { useFavorite } from "../../../Context/FavoriteContextProvider";
import { notify } from "../../Tostify/Toastify";

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const { addDelToFav, isProdInFav } = useFavorite();
  const [inCart, setInCart] = useState(isProdInCart(item.id));
  const [inFav, setInFav] = useState(isProdInFav(item.id));
  const { currentUser } = useAuth();

  //likes

  const [like, setLike] = useState(0);
  const [likeActive, setLikeactive] = useState(false);

  const liked = () => {
    if (likeActive) {
      setLikeactive(false);
      setLike((prev) => prev - 1);
      localStorage.setItem("likes", JSON.stringify(like));
    } else {
      setLikeactive(true);
      setLike((prev) => prev + 1);
      localStorage.setItem("likes", JSON.stringify(like));
    }
  };
  let getLikes = () => {
    let likes = +localStorage.getItem("likes") || 0;
  };
  useEffect(() => {
    getLikes();
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, height4: 500 }} className="one-card">
        <CardMedia
          component="img"
          height="240"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="green">
            ${item.price}
          </Typography>
          <Typography variant="body1">Type: {item.type}</Typography>
        </CardContent>

        <CardActions>
          {currentUser.user === null ? (
            <IconButton
              onClick={() => {
                notify(
                  "error",
                  "Dear Customer, please sign IN/UP to purchase."
                );
              }}
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                addDelToCart(item);
                setInCart(isProdInCart(item.id));
              }}
              color={inCart ? "warning" : "inherit"}
            >
              <ShoppingCartIcon />
            </IconButton>
          )}

          {currentUser.user === null ? (
            <IconButton
              onClick={() => {
                notify(
                  "error",
                  "Dear Customer, please sign IN/UP to save favorites."
                );
              }}
              color="inherit"
            >
              <BookmarkAddIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => {
                addDelToFav(item);
                setInFav(isProdInFav(item.id));
              }}
            >
              {inFav ? <BookmarkRemoveIcon /> : <BookmarkAddIcon />}
            </IconButton>
          )}
          <IconButton color="inherit" onClick={liked}>
            {likeActive ? (
              <FavoriteIcon color="warning" />
            ) : (
              <FavoriteBorderIcon />
            )}

            {like}
          </IconButton>
          <Button component={Link} to={`detail/${item.id}`} size="small">
            more...
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
