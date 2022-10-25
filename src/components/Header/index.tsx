import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Avatar, Container } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import { changeLanguage } from "i18next";

import bandeiraBR from "../../assets/bandeiraBR.png";
import bandeiraUS from "../../assets/bandeiraUS.png";
import Logo from "../../assets/Group 22.svg";
import { useUserContext } from "../../contexts/UserContext";
import { Button } from "../Button/style";
import DrawerComp from "../Drawer";
import LoginAndRegister from "../LoginAndRegister";
import { Bandeiras } from "./styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginRight: "auto",
    fontFamily: "Public Sans",
    fontWeight: 400,
    fontSize: "16px",
  },
}));

const Header = () => {
  const styles = useStyles();
  const { openFormLogin } = useUserContext();
  const [selectedLanguage, setSelectedLanguage] = useState<"pt" | "en">("pt");
  const isTablet = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as "en" | "pt");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AppBar sx={{ backgroundColor: "#FFF5EF" }} position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Avatar
              className={styles.margin}
              onClick={() => navigate("/")}
              variant="square"
              sx={{ height: "91px", width: "249px" }}
              src={Logo}
              alt="Cat Logo"
            ></Avatar>

            {isTablet ? (
              <DrawerComp />
            ) : (
              <>
                <Link
                  className={styles.margin}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href="/accommodations/all"
                >
                  {t("Acomodações")}
                </Link>
                <Link
                  className={styles.margin}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href="/contact"
                >
                  {t("Contato")}
                </Link>

                <Bandeiras className={styles.margin}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={selectedLanguage}
                      onChange={handleChange}
                    >
                      <MenuItem value="pt">
                        <img src={bandeiraBR} alt="Bandeira do Brasil" /> PT-BR
                      </MenuItem>
                      <MenuItem value="en">
                        <img
                          src={bandeiraUS}
                          alt="Bandeira dos Estados Unidos"
                        />{" "}
                        ENG
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Bandeiras>

                <div className="button--container">
                  <Button
                    backgroundColor="rgba(var(--aquaLight), 1)"
                    color="rgba(var(--white), 1)"
                    height="2.5rem"
                    width="9.1875rem"
                    fontSize=".875rem"
                    fontWeight="600"
                    borderRadius=".9375rem"
                    onClick={() => openFormLogin()}
                  >
                    {t("Login ou registro")}
                  </Button>
                </div>
                <LoginAndRegister />
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};
export default Header;
