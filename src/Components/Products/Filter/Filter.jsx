import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { Button, MenuItem, Typography } from "@mui/material";

const Filter = ({
  type,
  setType,
  setPage,
  slider,
  setSlider,
  maxSliderValue,
  minSliderValue,
  handleReset,
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Filter</h1>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          style={{ display: "flex", flexDirection: "row" }}
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="Cakes" control={<Radio />} label="Cakes" />
          <FormControlLabel
            value="CheeseCakes"
            control={<Radio />}
            label="CheeseCakes"
          />
          <FormControlLabel
            value="Puddings"
            control={<Radio />}
            label="Puddings"
          />
          <FormControlLabel
            value="cookies"
            control={<Radio />}
            label="Cookies"
          />
          <FormControlLabel value="Tarts" control={<Radio />} label="Tarts" />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Typography color="text.secondary">Price</Typography>
      <Slider
        sx={{ maxWidth: "350px" }}
        value={slider}
        onChange={(e, newValue) => {
          setSlider(newValue);
          setPage(1);
        }}
        valueLabelDisplay="auto"
        max={maxSliderValue}
        min={minSliderValue}
      />
      <br />
      <Button varianr="outlined" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default Filter;
