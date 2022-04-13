import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContextProvider";
import { useComContext } from "../../Context/ComContextProvider";
import SendIcon from "@mui/icons-material/Send";

const AddCom = () => {
  const { addCom, getCom } = useComContext();
  const { currentUser } = useAuth();
  const { prodId } = useParams();

  const [values, setValues] = useState({
    author: "",
    title: "",
    prodId: prodId,
  });

  useEffect(() => {
    setValues({ ...values, author: currentUser.user });
  }, [currentUser]);

  const handleChange = (e) => {
    let newCom = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newCom);
  };

  function handleClick() {
    addCom(values);
    setValues({ title: "", author: "" });
    getCom(prodId);
  }
  return (
    <Container sx={{ display: "flex", my: "20px" }}>
      <TextField
        id="outlined-multiline-static"
        label="Your comment"
        multiline
        fullWidth
        rows={3}
        name="title"
        value={values.title}
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleClick}>
        <SendIcon sx={{ width: "50px", height: "40px" }} />
      </Button>
    </Container>
  );
};

export default AddCom;
