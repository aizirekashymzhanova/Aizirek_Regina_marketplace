import React, { useEffect } from "react";
import OneProduct from "../Components/Products/OneProduct/OneProduct";
import { useFavorite } from "../Context/FavoriteContextProvider";

const Favorite = () => {
  const { fav, getFav, deleteProdInFav } = useFavorite();

  useEffect(() => {
    getFav();
  }, []);
  return (
    <div>
      <h1>FAVs</h1>
      {fav?.products.length > 0 ? (
        fav.products.map((item) => <OneProduct key={item.id} item={item} />)
      ) : (
        <h2>HEllo</h2>
      )}
    </div>
  );
};

export default Favorite;
