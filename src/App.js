import "./App.css";
import Toastify from "./Components/Tostify/Toastify";
import ProductContextProvider from "./Context/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import CartContextProvider from "./Context/CartContextProvider";
import AuthContextProvider from "./Context/AuthContextProvider";
import FavoriteContextProvider from "./Context/FavoriteContextProvider";
import ComContextProvider from "./Context/ComContextProvider";
import LikeContextProvider from "./Context/LikeContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <LikeContextProvider>
        <ComContextProvider>
          <FavoriteContextProvider>
            <CartContextProvider>
              <ProductContextProvider>
                <Toastify />
                <MyRoutes />
              </ProductContextProvider>
            </CartContextProvider>
          </FavoriteContextProvider>
        </ComContextProvider>
      </LikeContextProvider>
    </AuthContextProvider>
  );
}
export default App;
