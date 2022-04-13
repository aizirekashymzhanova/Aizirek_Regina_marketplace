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
    <LikeContextProvider>
      <ComContextProvider>
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
      </ComContextProvider>
    </LikeContextProvider>
  );
}
export default App;
