import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

import PawIcon from "../../assets/petIcon.svg";
import SmilingDog from "../../assets/SmilingDog.jpg";
import Facebook from "../../assets/SocialMediaIcons/facebookIcon.svg";
import Instagram from "../../assets/SocialMediaIcons/instagramIcon.svg";
import Twitter from "../../assets/SocialMediaIcons/twitterIcon.svg";
import Whatsapp from "../../assets/SocialMediaIcons/whatsappIcon.svg";
import Location from "../../assets/TemporaryLocation.jpg";
import { Button } from "../../components/Button/style";
import Developers from "../../components/Devs";
import { Container, About, HappyDog, Map, SocialIcons } from "./styles";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <About>
        <h1>{t("Sobre nós")}</h1>
        <p>
          Me-au é um pet hotel que se preocupa com o bem-estar do seu pet, nós
          temos funcionários trabalhando 24/7 para manter a segurança e cuidado
          dos animaizinhos. Me-au foi fundado em 2022, São Paulo - SP por um
          pequeno time de empreendedores e cresceu rapidamente devido a
          excelente competência e atenciosidade de todo o time, Nós oferecemos
          apenas produtos de alta qualidade e uma equipe altamente treinada que
          ama os animais, todos os membros possuem credenciais do Pet Caretakers
          LTDA. Tragam seu pet e nós garantimos dias inesquecíveis ao seu
          felpudinho!
        </p>
      </About>
      <HappyDog>
        <img src={PawIcon} alt="Paw Icon" />
        <img src={SmilingDog} alt="Smiling Dog" />
      </HappyDog>
      <h1>{t("Venha nos visitar!")}</h1>
      <Map>
        <div>
          <p>São Paulo, SP</p>
          <p>Avenida de lugar nenhum</p>
          <p> Rua dos perdidos, 157</p>
        </div>
        <img src={Location} alt="Google Map" />
        <img src={PawIcon} alt="Paw Icon" />
      </Map>
      <About className="Gap">
        <h1>{t("Fale Conosco")}</h1>
        <div>
          <SocialIcons src={Instagram} alt="Instagram Icon" />
          <SocialIcons src={Facebook} alt="Facebook Icon" />
          <SocialIcons src={Twitter} alt="Twitter Icon" />
          <SocialIcons src={Whatsapp} alt="Whatsapp Icon" />
        </div>
        <Box
          component="form"
          className="formWidth"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
        >
          <TextField
            id="outlined-text-input"
            required
            label="Nome"
            type="text"
          />

          <TextField
            id="outlined-text-input"
            required
            label="Email"
            type="text"
          />

          <TextField
            id="outlined-text-input"
            required
            label="Assunto"
            type="text"
          />

          <TextField
            id="outlined-text-input"
            required
            label="Pet"
            type="text"
          />

          <TextField
            id="outlined-multiline-static"
            label="Mensagem"
            multiline
            required
            rows={4}
          />

          <Button
            backgroundColor="rgba(var(--orange), 1)"
            color="rgba(var(--white), 1)"
            height="2.5rem"
            width="9.1875rem"
            fontSize=".875rem"
            fontWeight="600"
            borderRadius=".9375rem"
            colorHover="#c0581f"
            // onClick={() => handleClickOpen()}
          >
            {t("Enviar")}
          </Button>
        </Box>
      </About>

      <Developers />
    </Container>
  );
};

export default Contact;
