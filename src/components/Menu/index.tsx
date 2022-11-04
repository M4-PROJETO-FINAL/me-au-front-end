import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PetsIcon from "@mui/icons-material/Pets";
import { Avatar } from "@mui/material";

import Gui from "../../assets/Developers/Gui.png";
// import { useUserContext } from "../../contexts/UserContext";

import { useUserContext } from "../../contexts/UserContext";
import {
  MenuContainer,
  MenuTabs,
  ProfileTab,
  Paragraph,
  MobileContainer,
} from "./styles";

const Menu = () => {
  const { user } = useUserContext();
  const { t } = useTranslation();

  return (
    <MenuContainer>
      <ProfileTab>
        <Avatar
          variant="circular"
          sx={{
            height: "55px",
            width: "54px",
          }}
          src={user?.profile_img}
          alt="User Avatar"
        >
          {user?.name.charAt(0)}
        </Avatar>
        <div>
          <p>
            {t("Olá")}, {user?.name}!
          </p>
          <p>{t("Esta é sua conta")} :)</p>
        </div>
      </ProfileTab>

      <MobileContainer>
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
      </MobileContainer>
    </MenuContainer>
  );
};

export default Menu;
