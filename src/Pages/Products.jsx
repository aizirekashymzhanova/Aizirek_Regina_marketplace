import { Container } from "@mui/material";
import React from "react";
import ProdList from "../Components/Products/ProdList/ProdList";
import { Box } from "@mui/material";

const Products = () => {
  return (
    <Box>
      <img
        width="100%"
        src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/757b2a27-6766-43ba-bb46-a4b3153e2ce8.jpg"
        alt=""
      />
      <Container>
        <ProdList />
      </Container>
    </Box>
  );
};

export default Products;
