import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PetsIcon from "@mui/icons-material/Pets";
import { Avatar } from "@mui/material";

import Gui from "../../assets/Developers/Gui.png";
// import { useUserContext } from "../../contexts/UserContext";
import { MenuContainer, MenuTabs, ProfileTab, Paragraph } from "./styles";

const Menu = () => {
  // const { user } = useUserContext();
  const { t } = useTranslation();

  return (
    <MenuContainer>
      <Link to="/dashboard/">
        <ProfileTab>
          <Avatar
            variant="circular"
            sx={{
              height: "55px",
              width: "54px",
            }}
            src={Gui}
            alt="Cat Logo"
          />
          <div>
            <p>{t("Olá")}, Guilherme!</p>
            <p>{t("Esta é sua conta")} :)</p>
          </div>
        </ProfileTab>
      </Link>

      <Link to="/dashboard/profile">
        <MenuTabs>
          <AccountCircleIcon />
          <Paragraph>{t("Meu perfil")}</Paragraph>
        </MenuTabs>
      </Link>

      <Link to="/dashboard/pets">
        <MenuTabs>
          <PetsIcon />
          <Paragraph>{t("Meus pets")}</Paragraph>
        </MenuTabs>
      </Link>

      <MenuTabs>
        <CalendarMonthIcon />
        <p>{t("Minhas reservas")}</p>
      </MenuTabs>
    </MenuContainer>
  );
};

export default Menu;
