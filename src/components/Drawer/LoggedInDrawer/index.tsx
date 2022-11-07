import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import BedIcon from "@mui/icons-material/Bed";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { changeLanguage } from "i18next";

import bandeiraBR from "../../../assets/bandeiraBR.png";
import bandeiraUS from "../../../assets/bandeiraUS.png";
import { useUserContext } from "../../../contexts/UserContext";
import { Button } from "../../Button/style";
import { Bandeiras } from "../../Header/styles";
import { Links } from "../styles";

const LoggedInDrawerComp = () => {
  const { t } = useTranslation();
  const { logout } = useUserContext();
  const [open, setOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState<"pt" | "en">("pt");

  useEffect(() => {
    changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as "en" | "pt");
  };

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
              <Links to={"/dashboard"}>Dashboard</Links>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpen(false)} divider>
            <ListItemText
              sx={{
                "& .MuiTypography-root-bXPcIX": {
                  display: "flex",
                },
              }}
            >
              <ContactSupportIcon
                fontSize="small"
                sx={{ color: "common.white", marginRight: "5px" }}
              />
              <Links to={"/contact"}>{t("Contato")}</Links>
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
              <Links to="/accommodations/all">{t("Acomodações")}</Links>
            </ListItemText>
          </ListItem>

          <ListItem divider>
            <ListItemText>
              <Bandeiras>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <Select
                    sx={{ color: "common.white" }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={selectedLanguage}
                    onChange={handleChange}
                  >
                    <MenuItem value="pt">
                      <img src={bandeiraBR} alt="Bandeira do Brasil" /> PT-BR
                    </MenuItem>
                    <MenuItem value="en">
                      <img src={bandeiraUS} alt="Bandeira dos Estados Unidos" />{" "}
                      ENG
                    </MenuItem>
                  </Select>
                </FormControl>
              </Bandeiras>
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
