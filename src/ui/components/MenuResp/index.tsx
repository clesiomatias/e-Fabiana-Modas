import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledMenu } from "./style";

export default function MenuResp() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <a href="/Produtos">
            <LocalMallIcon />
            Produtos
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <a href="/Login">
            <LoginIcon />
            Login
          </a>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
