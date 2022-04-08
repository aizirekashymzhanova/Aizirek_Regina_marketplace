import * as React from "react";
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

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const [inCart, setInCart] = React.useState(isProdInCart(item.id));
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
          <IconButton
            onClick={() => {
              addDelToCart(item);
              setInCart(isProdInCart(item.id));
            }}
            color={inCart ? "secondary" : "inherit"}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Button component={Link} to={`detail/${item.id}`} size="small">
            More Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
