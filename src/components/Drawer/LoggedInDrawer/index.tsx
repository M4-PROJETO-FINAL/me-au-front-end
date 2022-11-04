import { useState } from "react";
import { Link } from "react-router-dom";

import BedIcon from "@mui/icons-material/Bed";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useUserContext } from "../../../contexts/UserContext";
import { Button } from "../../Button/style";

const LoggedInDrawerComp = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useUserContext();

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            width: "15rem",
            alignItems: "center",
            backgroundImage:
              "linear-gradient(117deg, rgba(181,229,227,1) 0%, rgba(181,229,227,1) 5%, rgba(30,143,130,1) 100%)",
          },
        }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItem onClick={() => setOpen(false)} divider>
            <ListItemText>
              <div className="button--container">
                <Button
                  backgroundColor="rgba(var(--aquaLight), 1)"
                  color="rgba(var(--white), 1)"
                  height="2.5rem"
                  width="9.1875rem"
                  fontSize=".875rem"
                  fontWeight="600"
                  borderRadius=".9375rem"
                  colorHover="rgba(var(--aquaDark), 1)"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div>
            </ListItemText>
          </ListItem>

          <ListItem sx={{ m: "auto" }} onClick={() => setOpen(false)} divider>
            <ListItemText
              sx={{
                "& .MuiTypography-root-bXPcIX": {
                  display: "flex",
                },
              }}
            >
              <BedIcon
                fontSize="small"
                sx={{ color: "common.white", marginRight: "5px" }}
              />
              <Link to={"/dashboard"}>Dashboard</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <IconButton onClick={() => setOpen(!open)} sx={{ color: "#65C1BC" }}>
        <MenuIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default LoggedInDrawerComp;
