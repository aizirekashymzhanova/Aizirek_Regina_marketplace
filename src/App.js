import "./App.css";
import Toastify from "./Components/Tostify/Toastify";
import ProductContextProvider from "./Context/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import CartContextProvider from "./Context/CartContextProvider";
// import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Toastify />
        <MyRoutes />
      </ProductContextProvider>
    </CartContextProvider>
  );
}
export default App;
