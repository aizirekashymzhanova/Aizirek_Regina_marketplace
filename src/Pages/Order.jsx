import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useCart } from "../Context/CartContextProvider";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Order() {
  const navigate = useNavigate();
  const { cart } = useCart();
  return (
    <div style={{ alignItems: "center" }}>
      <h2>order</h2>
      <TextField
        id="standard-basic"
        label="First Name"
        variant="standard"
      />{" "}
      <br />
      <TextField id="standard-basic" label="Last Name" variant="standard" />
      <br />
      <TextField id="standard-basic" label="Address" variant="standard" />{" "}
      <br />
      <Button
        variant="outlined"
        color="success"
        onClick={() => navigate("/payment")}
      >
        Pay : ${cart.totalPrice}
      </Button>
    </div>
  );
}
