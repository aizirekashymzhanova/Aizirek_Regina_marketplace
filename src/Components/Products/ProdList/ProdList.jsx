import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useProductContext } from "../../../Context/ProductContextProvider";
import OneProduct from "../OneProduct/OneProduct";

const ProdList = () => {
  const { getProducts, products } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {products && products.length > 0 ? (
          products.map((item) => <OneProduct key={item.id} item={item} />)
        ) : (
          <h2>Hello</h2>
        )}
      </Grid>
    </div>
  );
};

export default ProdList;
