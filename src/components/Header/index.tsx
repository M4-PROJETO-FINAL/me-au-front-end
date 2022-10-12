import { useState } from "react";

import { Button } from "@mui/material";
import { motion } from "framer-motion";

import bandeiraBR from "../../assets/bandeiraBR.png";
import bandeiraUS from "../../assets/bandeiraUS.png";
import LogoMeAu from "../../assets/logoMeAu.png";
import FormLogin from "../FormLogin";
import { Container, Bandeiras } from "./styles";

const Header = () => {
  const [openFormLogin, setOpenFormLogin] = useState(false);

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
        <img src={LogoMeAu} alt="Cat Logo" />

        <ul>
          <li>Sobre nós</li>
          <li>Serviços</li>
          <li>Acomodações</li>
          <li>Contato</li>
        </ul>

        <Bandeiras>
          <div>
            <img src={bandeiraBR} alt="Bandeira do Brasil" /> PT-BR
          </div>
          <div>
            <img src={bandeiraUS} alt="Bandeira dos Estados Unidos" /> ENG
          </div>
        </Bandeiras>
        <Button variant="outlined" onClick={handleClickOpen}>
          Login ou registro
        </Button>
        <FormLogin openFormLogin={openFormLogin} handleClose={handleClose} />
      </Container>
    </motion.div>
  );
};
export default Header;
