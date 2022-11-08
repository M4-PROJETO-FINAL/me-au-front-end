import { useTranslation } from "react-i18next";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  Avatar,
  Box,
  Button,
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
  const { t } = useTranslation();

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
            alignItems: "baseline",
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
            <Typography>{t("Texto do footer")}</Typography>
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
              {t("Inscreva-se para receber nossas promoções e novidades")}.
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
                placeholder="E-mail"
                InputProps={{
                  endAdornment: (
                    <Button
                      sx={{
                        padding: "0",
                        minWidth: "0",
                      }}
                    >
                      <SendRoundedIcon />,
                    </Button>
                  ),
                }}
              ></TextField>
              {/* <Button variant="contained">Inscrever</Button> */}
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
              <Typography sx={{ fontWeight: "600" }}>
                {t("Nossas redes")}
              </Typography>
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
              <Typography sx={{ fontWeight: "600" }}>
                {t("Fale Conosco")}
              </Typography>
              <Typography
                sx={{ color: lightTheme.colors.aquaLight, fontWeight: "700" }}
              >
                (11) 1234-5678
              </Typography>
            </Box>
          </Box>
        </Box>
      </ContainerFooter>
    </>
  );
};

export default Footer;
