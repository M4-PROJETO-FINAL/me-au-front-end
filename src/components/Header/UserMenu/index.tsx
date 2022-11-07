import * as React from "react";
import { useNavigate } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useUserContext } from "../../../contexts/UserContext";

const UserMenu = () => {
  const { user, logout } = useUserContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseAndDashboard = () => {
    setAnchorEl(null);
    navigate("/dashboard/profile");
  };
  const closeAndLogout = () => {
    setAnchorEl(null);
    logout();
    navigate("/");
  };

  return (
    <div>
      <Button
        sx={{ borderRadius: "15px" }}
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {user?.name}
      </Button>
      <Menu
        sx={{ fontFamily: "Public Sans", fontWeight: "500" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleCloseAndDashboard} sx={{ width: "11rem" }}>
          {" "}
          <AccountCircleIcon sx={{ marginRight: "5px" }} />
          Dashboard
        </MenuItem>
        <MenuItem onClick={closeAndLogout}>
          <LogoutIcon sx={{ marginRight: "5px" }} />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
