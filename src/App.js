import "./App.css";
import Toastify from "./Components/Tostify/Toastify";
import ProductContextProvider from "./Context/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import CartContextProvider from "./Context/CartContextProvider";
import AuthContextProvider from "./Context/AuthContextProvider";
import FavoriteContextProvider from "./Context/FavoriteContextProvider";

function App() {
  return (
    <FavoriteContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <Toastify />
            <MyRoutes />
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </FavoriteContextProvider>
  );
}
export default App;
