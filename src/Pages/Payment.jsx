import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from "reactjs-credit-card/form";
import Card from "reactjs-credit-card/card";
import { notify } from "../Components/Tostify/Toastify";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContextProvider";
import { Button, TextField } from "@mui/material";
import { maxWidth } from "@mui/system";

export default function App() {
  const navigate = useNavigate();
  const { getCartLength, cart } = useCart();
  const handlePay = () => {
    notify("success", "Dear customer, thanks for your shopping! ");
    localStorage.clear();
    getCartLength();
    navigate("/");
  };

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

  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "8px",
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
        <CardNumber placeholder="Card Number" className="payment-inp" /> <br />
        <CardHolder placeholder="Card Holder" className="payment-inp" />
        <br />
        <div style={{ display: "flex" }}>
          <ValidThruMonth />
          <ValidThruYear className="payment-inp" />

          <CardSecurityCode
            placeholder="CVV"
            className="input-text semi payment-inp"
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
