import React, { useEffect, useReducer, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import Checkbox from "@mui/material/Checkbox";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import { useCart } from "../../../Context/CartContextProvider";
import { useAuth } from "../../../Context/AuthContextProvider";
import { useFavorite } from "../../../Context/FavoriteContextProvider";
import { notify } from "../../Tostify/Toastify";
import { useLikeContext } from "../../../Context/LikeContextProvider";
import { useProductContext } from "../../../Context/ProductContextProvider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const { addDelToFav, isProdInFav } = useFavorite();
  const {
    addLike,
    delLike,
    liked,
    likes,
    likesLength,
    getLikes,
    getLikesLengthforOne,
  } = useLikeContext();
  const [inCart, setInCart] = useState(isProdInCart(item.id));
  const [inFav, setInFav] = useState(isProdInFav(item.id));
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  //likes

  const [like, setLike] = useState({
    user: "",
    prodId: +item.id,
  });

  useEffect(() => {
    getLikesLengthforOne(like.prodId);
    // getLikes();
  }, []);
  useEffect(() => {
    console.log("works" + like.prodId, likesLength);
  }, [likesLength]);

  useEffect(() => {
    setLike({ ...like, user: currentUser.user });
  }, [currentUser]);

  const addDelLike = async () => {
    let checkLikedUsers = likes
      .filter((obj) => {
        return like.prodId === obj.prodId;
      })
      .some((i) => i.user === like.user);
    if (checkLikedUsers) {
      delLike();
    } else {
      addLike(like);
    }
  };
  const handleLike = () => {
    addDelLike(like);
    getLikesLengthforOne(item.id);
  };

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
          <IconButton color="inherit" onClick={() => handleLike()}>
            {liked ? <FavoriteIcon color="warning" /> : <FavoriteBorderIcon />}
            {likesLength}
          </IconButton>
          <Button component={Link} to={`detail/${item.id}`} size="small">
            <MoreHorizIcon color="inherit" />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
