import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContextProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const { cart, getCart, changeProductCount, deleteProdInCart, getCartLength } =
    useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);
  const handleOrder = () => {
    navigate("/order");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container maxWidth="lg">
        <h1 style={{ color: "orange" }}> MY CART</h1>
        {cart?.products.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      Type
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Image
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Price
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      SubPrice
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Count
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.products.map((elem) => (
                    <TableRow
                      key={elem.item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {elem.item.title}
                      </TableCell>
                      <TableCell align="center">{elem.item.type}</TableCell>
                      <TableCell align="right">
                        <img
                          width="40px"
                          src={elem.item.img}
                          alt={elem.item.title}
                        />
                      </TableCell>
                      <TableCell align="right">{elem.item.price}</TableCell>
                      <TableCell align="right">{elem.subPrice}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() =>
                            changeProductCount(elem.count + 1, elem.item.id)
                          }
                        >
                          <ArrowDropUpIcon />
                        </IconButton>
                        {elem.count}
                        <IconButton
                          onClick={() => {
                            +elem.count > 0
                              ? changeProductCount(elem.count - 1, elem.item.id)
                              : deleteProdInCart(elem.item.id);
                          }}
                        >
                          <ArrowDropDownIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => deleteProdInCart(elem.item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography
              variant="h4"
              style={{ color: "orange", margin: "20px" }}
            >
              Total price : ${cart.totalPrice}
            </Typography>
            <Button
              variant="contained"
              color="warning"
              onClick={() => navigate("/order")}
            >
              BUY NOW FOR ${cart.totalPrice}
            </Button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"
              alt=""
            />
            <br />
            <Button component={Link} to="/products">
              Start Shopping
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
