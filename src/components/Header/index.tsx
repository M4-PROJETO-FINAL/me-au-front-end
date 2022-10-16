import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { motion } from "framer-motion";

import bandeiraBR from "../../assets/bandeiraBR.png";
import bandeiraUS from "../../assets/bandeiraUS.png";
import Logo from "../../assets/Group 22.svg";
import { Button } from "../Button/style";
import FormLogin from "../FormLogin";
import { Container, Bandeiras } from "./styles";

const Header = () => {
  const [openFormLogin, setOpenFormLogin] = useState(false);
  const [selectCountry, setSelectCountry] = useState("BR");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setSelectCountry(event.target.value as string);
  };

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
        <img src={Logo} alt="Cat Logo" />

        <ul>
          <li onClick={() => navigate("/register", { replace: true })}>
            Serviços
          </li>
          <li onClick={() => navigate("/accommodations", { replace: true })}>
            Acomodações
          </li>
          <li onClick={() => navigate("/contact", { replace: true })}>
            Contato
          </li>
        </ul>

        <Bandeiras>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={selectCountry}
              onChange={handleChange}
            >
              <MenuItem value="BR">
                <img src={bandeiraBR} alt="Bandeira do Brasil" /> PT-BR
              </MenuItem>
              <MenuItem value="USA">
                <img src={bandeiraUS} alt="Bandeira dos Estados Unidos" /> ENG
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
            onClick={() => handleClickOpen()}
          >
            Login ou registro
          </Button>
        </div>
        <FormLogin openFormLogin={openFormLogin} handleClose={handleClose} />
      </Container>
    </motion.div>
  );
};
export default Header;
