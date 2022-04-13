import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { Button, Container, Paper, Typography } from "@mui/material";

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
    <Container maxWidth="lg">
      <div>
        <Paper
          sx={{
            padding: "20px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#FFEFBA",
          }}
        >
          {oneProd ? (
            <>
              <h2>More details about {oneProd.title}</h2>
              <img width="400px" src={oneProd.img} alt="" />
              <Typography> ${oneProd.price}</Typography>
              <Typography>{oneProd.description}</Typography>
              <Link to="/products" className="mobile-link"></Link>
            </>
          ) : (
            <MySkeleton />
          )}
          <ListCom />
          <AddCom />
          <Button variant="outlined" color="warning">
            {" "}
            Continue Shopping
          </Button>{" "}
        </Paper>
      </div>
    </Container>
  );
};

export default ProdDetail;
