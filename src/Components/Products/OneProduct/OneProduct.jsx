import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../../../Context/CartContextProvider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import Checkbox from "@mui/material/Checkbox";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useAuth } from "../../../Context/AuthContextProvider";
import { notify } from "../../Tostify/Toastify";
import { useFavorite } from "../../../Context/FavoriteContextProvider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const { addDelToFav, isProdInFav } = useFavorite();
  const [inCart, setInCart] = useState(isProdInCart(item.id));
  const [inFav, setInFav] = useState(isProdInFav(item.id));
  const { currentUser } = useAuth();
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
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
              color={inCart ? "secondary" : "inherit"}
            >
              <ShoppingCartIcon />
            </IconButton>
          )}
          <IconButton color="inherit">
            <Checkbox
              {...label}
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon color="success" />}
            />
          </IconButton>

          <IconButton color="inherit" onClick={() => navigate("/feedbacks")}>
            <MapsUgcIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              addDelToFav(item);
              setInFav(isProdInFav(item.id));
            }}
            color={inFav ? "secondary" : "inherit"}
          >
            <BookmarkIcon />
          </IconButton>
          <Button component={Link} to={`detail/${item.id}`} size="small">
            <MoreHorizIcon color="inherit" />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
