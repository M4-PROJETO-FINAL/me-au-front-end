import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Avatar, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

import Logo from "../../assets/Group 22.svg";
import { useUserContext } from "../../contexts/UserContext";
import { Button } from "../Button/style";
import DrawerComp from "../Drawer";
import LoggedInDrawerComp from "../Drawer/LoggedInDrawer";
import LoginAndRegister from "../LoginAndRegister";
import DefaultMenu from "./defaultMenu";
import UserMenu from "./UserMenu";

const useStyles = makeStyles(() => ({
  margin: {
    marginRight: "auto",
    fontFamily: "Public Sans",
    fontWeight: 400,
    fontSize: "16px",
  },
}));

const Header = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, openFormLogin } = useUserContext();
  const isTablet = useMediaQuery("(max-width:766px)");
  const isDesktop = useMediaQuery("(min-width: 767px)");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AppBar
        sx={{ backgroundColor: "#FFF5EF", width: "100%" }}
        position="sticky"
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            style={isTablet ? { justifyContent: "space-between" } : {}}
          >
            <Avatar
              className={styles.margin}
              onClick={() => navigate("/")}
              variant="square"
              sx={{ height: "91px", width: "249px", cursor: "pointer" }}
              src={Logo}
              alt="Cat Logo"
            ></Avatar>

            {isDesktop && !user ? (
              <>
                <DefaultMenu />

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
                    onClick={() => openFormLogin()}
                  >
                    {t("Login ou registro")}
                  </Button>
                </div>
                <LoginAndRegister />
              </>
            ) : (
              <>
                {user && isDesktop && (
                  <>
                    <DefaultMenu />

                    <UserMenu />
                  </>
                )}
              </>
            )}

            {isTablet && !user ? (
              <DrawerComp />
            ) : (
              <>{user && isTablet && <LoggedInDrawerComp />}</>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};
export default Header;
