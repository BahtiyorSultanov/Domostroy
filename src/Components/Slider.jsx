import React, { useState } from "react";
import { Box, Slider, Stack } from "@mui/material";
function SliderComponent() {
  function valuetext(value) {
    return `${value}`;
  }
  const [value, setValue] = useState([100, 600]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: 290 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={100}
          max={1000}
        />
      </Box>
    </div>
  );
}

export default SliderComponent;
