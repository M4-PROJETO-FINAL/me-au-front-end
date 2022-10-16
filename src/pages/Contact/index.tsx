import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

import PawIcon from "../../assets/petIcon.svg";
import SmilingDog from "../../assets/SmilingDog.svg";
import Facebook from "../../assets/SocialMediaIcons/facebookIcon.svg";
import Instagram from "../../assets/SocialMediaIcons/instagramIcon.svg";
import Twitter from "../../assets/SocialMediaIcons/twitterIcon.svg";
import Whatsapp from "../../assets/SocialMediaIcons/whatsappIcon.svg";
import Location from "../../assets/TemporaryLocation.svg";
import { Container, About, HappyDog, Map } from "./styles";

const Contact = () => {
  return (
    <Container>
      <About>
        <h1>Sobre nós</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </About>
      <HappyDog>
        <img src={PawIcon} alt="Paw Icon" />
        <img src={SmilingDog} alt="Smiling Dog" />
      </HappyDog>
      <h1>Venha nos visitar!</h1>
      <Map>
        <div>
          <p>São Paulo, SP</p>
          <p>Avenida de lugar nenhum</p>
          <p> Rua dos perdidos, 157</p>
        </div>
        <img src={Location} alt="Google Map" />
      </Map>
      <About>
        <h1>Fale Conosco</h1>
        <div>
          <img src={Instagram} alt="Instagram Icon" />
          <img src={Facebook} alt="Facebook Icon" />
          <img src={Twitter} alt="Twitter Icon" />
          <img src={Whatsapp} alt="Whatsapp Icon" />
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
        >
          <TextField id="outlined-text-input" label="Nome" type="text" />

          <TextField id="outlined-text-input" label="Email" type="text" />

          <TextField id="outlined-text-input" label="Assunto" type="text" />

          <TextField id="outlined-text-input" label="Pet" type="text" />

          <TextField
            id="outlined-multiline-static"
            label="Mensagem"
            multiline
            required
            rows={4}
          />
        </Box>
      </About>
    </Container>
  );
};

export default Contact;
