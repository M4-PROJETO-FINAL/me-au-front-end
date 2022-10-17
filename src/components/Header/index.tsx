import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import bandeiraBR from "../../assets/bandeiraBR.png";
import bandeiraUS from "../../assets/bandeiraUS.png";
import Logo from "../../assets/Group 22.svg";
import { Button } from "../Button/style";
import LoginAndRegister from "../LoginAndRegister";
import { Container, Bandeiras } from "./styles";

const Header = () => {
  const [openFormLogin, setOpenFormLogin] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpenFormLogin(true);
  };

  const handleClose = () => {
    setOpenFormLogin(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <img onClick={() => navigate("/")} src={Logo} alt="Cat Logo" />

        <ul>
          <li>Sobre nós</li>
          <li>Serviços</li>
          <Link to="/accommodations/all">Acomodações</Link>
          <Link to="/contact">Contato</Link>
        </ul>

        <Bandeiras>
          <div>
            <img src={bandeiraBR} alt="Bandeira do Brasil" /> PT-BR
          </div>
          <div>
            <img src={bandeiraUS} alt="Bandeira dos Estados Unidos" /> ENG
          </div>
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
            onClick={() => handleClickOpen()}
          >
            Login ou registro
          </Button>
        </div>
        <LoginAndRegister
          openFormLogin={openFormLogin}
          handleClose={handleClose}
        />
      </Container>
    </motion.div>
  );
};
export default Header;
