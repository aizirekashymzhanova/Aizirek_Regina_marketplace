import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { Button, Container, Paper, Typography, Box } from "@mui/material";

import { useProductContext } from "../Context/ProductContextProvider";
import MySkeleton from "../Components/Skeleton/MySkeleton";
import AddCom from "../Components/Comments/AddCom";
import ListCom from "../Components/Comments/ListCom";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, oneProd } = useProductContext();

  useEffect(() => {
    getOneProduct(prodId);
  }, []);
  return (
    <>
      <Container
        sx={{
          padding: "20px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          // bgcolor: "#FFEFBA",
        }}
      >
        {oneProd ? (
          <>
            <h2>More details about {oneProd.title}</h2>
            <img width="50%" src={oneProd.img} alt="" />
            <Typography m="5px"> ${oneProd.price}</Typography>
            <Typography m="10px" align="center">
              {oneProd.description}
            </Typography>
            <Link to="/products" className="mobile-link">
              <Button variant="outlined" color="warning">
                {" "}
                Continue Shopping
              </Button>{" "}
            </Link>
          </>
        ) : (
          <MySkeleton />
        )}
      </Container>
      <Box>
        <ListCom />
        <AddCom />
      </Box>
    </>
  );
};

export default ProdDetail;
