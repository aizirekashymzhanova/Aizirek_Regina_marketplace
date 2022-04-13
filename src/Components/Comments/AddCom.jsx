import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthContextProvider";
import { useComContext } from "../../Context/ComContextProvider";

const AddCom = () => {
  const { addCom, getCom } = useComContext();
  const { currentUser } = useAuth();
  const { prodId } = useParams();

  const [values, setValues] = useState({
    author: "",
    title: "",
    prodId: +prodId,
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
    <div>
      <input
        name="title"
        value={values.title}
        onChange={(e) => handleChange(e)}
        label="Your comment"
        variant="outlined"
      />
      <Button onClick={handleClick}>Send</Button>
    </div>
  );
};

export default AddCom;
