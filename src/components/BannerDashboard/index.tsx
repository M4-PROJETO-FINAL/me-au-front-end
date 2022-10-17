import { Box, Button, Container, Typography } from "@mui/material";

import bg_dashboard from "../../assets/bg_dashboard.svg";
import ImageContainer from "../../assets/ImageContainer.png";
import { lightTheme } from "../../styles/themes";
import { ImgDb } from "./styles";

const BannerDashboard = () => {
  return (
    <Container
      sx={{
        backgroundImage: `url(${bg_dashboard})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h4" sx={{ color: lightTheme.colors.aquaLight }}>
            Nós estamos aqui para cuidar do seu{" "}
            <Typography
              component="span"
              variant="h4"
              sx={{ color: lightTheme.colors.orange }}
            >
              animal de estimação
            </Typography>
          </Typography>
          <Typography variant="h6">
            Fazemos nossos clientes felizes oferecendo o tratamento e a estadia
            que seu pet merece
          </Typography>

          <Box display="flex" gap="15px">
            <Button
              variant="contained"
              sx={{
                backgroundColor: lightTheme.colors.orange,
                "&:hover": lightTheme.colors.orangeLight,
              }}
            >
              Reserve um horário
            </Button>
            <Button variant="outlined" sx={{ color: lightTheme.colors.gray1 }}>
              Confira nossos preços
            </Button>
          </Box>
        </Box>
        <Box>
          <ImgDb src={ImageContainer} />
        </Box>
      </Container>
    </Container>
  );
};

export default BannerDashboard;
