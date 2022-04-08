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

export default function App() {
  const navigate = useNavigate();
  const { getCartLength } = useCart();
  const handlePay = () => {
    notify("success", "Dear customer, thanks for your shopping! ");
    localStorage.clear();
    getCartLength();
    navigate("/");
  };

  return (
    <div>
      <Card />
      <form>
        <CardNumber placeholder="Card Number" className="payment-inp" /> <br />
        <CardHolder placeholder="Card Holder" className="payment-inp" />
        <br />
        <ValidThruMonth c />
        <br />
        <ValidThruYear className="payment-inp" />
        <br />
        <CardSecurityCode
          placeholder="CVV"
          className="input-text semi payment-inp"
        />
        <br />
        <button className="payment-inp" onClick={handlePay}>
          PAY
        </button>
      </form>
    </div>
  );
}
