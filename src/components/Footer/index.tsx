import {
  Avatar,
  Box,
  Button,
  Chip,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import FbIcon from "../../assets/FooterIcons/FbIcon.svg";
import IgIcon from "../../assets/FooterIcons/IgIcon.svg";
import TwitterIcon from "../../assets/FooterIcons/TwitterIcon.svg";
import Logo from "../../assets/Group 22.svg";
import { lightTheme } from "../../styles/themes";
import { ContainerFooter } from "./styles";

const Footer = () => {
  const isTablet = useMediaQuery("(max-width:768px)");

  return (
    <>
      <ContainerFooter>
        <Box
          sx={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            gap: isTablet ? "30px" : "0",
            marginTop: isTablet ? "50px" : "0",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: isTablet ? "90%" : "30%",
              maxWidth: "440px",
            }}
          >
            <Avatar
              variant="square"
              sx={{ height: "91px", width: "249px" }}
              src={Logo}
              alt="Cat Logo"
            ></Avatar>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: isTablet ? "90%" : "33%",
              maxWidth: "440px",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography>
              Inscreva-se para receber nossas promoções e novidades.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <TextField
                size="small"
                fullWidth
                variant="filled"
                placeholder="Coloque seu e-mail"
              ></TextField>
              <Button variant="contained">Enviar</Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              width: isTablet ? "90%" : "30%",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "600" }}>Nossas redes</Typography>
              <Box sx={{ display: "flex" }}>
                <Avatar src={FbIcon} sx={{ height: "30px", width: "30px" }} />
                <Avatar src={IgIcon} sx={{ height: "30px", width: "30px" }} />
                <Avatar
                  src={TwitterIcon}
                  sx={{ height: "30px", width: "30px" }}
                />
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "600" }}>Fale conosco</Typography>
              <Typography sx={{ color: lightTheme.colors.aquaLight }}>
                (11) 1234-5678
              </Typography>
            </Box>
          </Box>
        </Box>
        <Chip className="chip--footer" label="Site desenvolvido por"></Chip>
      </ContainerFooter>
    </>
  );
};

export default Footer;
