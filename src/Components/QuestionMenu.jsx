import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
function QuestionMenu({menuInfo, question}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <div>
      <Button
        className="menu-opener"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {question}
        <img src="" alt="" />
      </Button>
      <Menu
        id="basic-menu"
        className="w-[100%]"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          {menuInfo}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default QuestionMenu;
