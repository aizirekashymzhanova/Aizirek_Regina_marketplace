import { useNavigate } from "react-router-dom";

import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from "reactjs-credit-card/form";

import Card from "reactjs-credit-card/card";

import { Button, TextField } from "@mui/material";

import { notify } from "../Components/Tostify/Toastify";
import { useCart } from "../Context/CartContextProvider";
import { useState } from "react";

export default function App() {
  const navigate = useNavigate();
  const { getCartLength, cart } = useCart();
  const [textValues, SetTextValues] = useState({
    name: "",
    num: "",
    cvv: "",
  });

  const handleChange = (event) => {
    let per = { ...textValues, [event.target.name]: event.target.value };
    SetTextValues(per);
  };

  const handlePay = () => {
    console.log(textValues);

    if (!textValues.name || !textValues.cvv || !textValues.num) {
      notify("error", "Fill all the blanks");
    } else {
      notify("success", "Dear customer, thanks for your shopping! ");
      localStorage.clear();
      getCartLength();
      navigate("/");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    // left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        margin: "auto",
      }}
    >
      <Card />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
        }}
      >
        <TextField
          id="standard-basic"
          label="First & Last Name"
          variant="standard"
        />{" "}
        <TextField id="standard-basic" label="Address" variant="standard" />{" "}
        <br />
        <CardNumber
          name="num"
          onChange={handleChange}
          placeholder="Card Number"
          className="payment-inp"
          value={textValues.num}
        />{" "}
        <br />
        <CardHolder
          name="name"
          onChange={handleChange}
          placeholder="Card Holder"
          className="payment-inp"
          value={textValues.name}
        />
        <br />
        <div style={{ display: "flex" }}>
          <ValidThruMonth />
          <ValidThruYear className="payment-inp" />

          <CardSecurityCode
            name="cvv"
            onChange={handleChange}
            placeholder="CVV"
            className="input-text semi payment-inp"
            value={textValues.cvv}
          />
        </div>
        <br />
        <Button
          variant="outlined"
          color="warning"
          className="payment-inp"
          onClick={handlePay}
        >
          PAY ${cart.totalPrice}
        </Button>
      </form>
    </div>
  );
}
