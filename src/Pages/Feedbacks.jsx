import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const initValues = {
  title: "",
  description: "",
};

const Feedbacks = ({ saveValues, compForEdit, oneProd, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //for edit
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);
  useEffect(() => {
    if (compForEdit && oneProd) {
      setInpValues(oneProd);
    }
  }, [oneProd]);

  //end of for edit

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
      price: +inpValues.price,
    };

    saveValues(obj);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className="form"
      >
        <TextField
          className="text-field"
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={3}
        />
        <Button
          type="submit"
          variant="contained"
          color="warning"
          className="text-button"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Feedbacks;
