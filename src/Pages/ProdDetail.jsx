import { Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContextProvider";

import MySkeleton from "../Components/Skeleton/MySkeleton";
import { display } from "@mui/system";

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
        </Paper>
      </div>
    </Container>
  );
};

export default ProdDetail;
