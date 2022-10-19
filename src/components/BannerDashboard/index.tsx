import { useMediaQuery } from "react-responsive";

import { Box, Container, Typography } from "@mui/material";

import ImageContainer from "../../assets/ImageContainer.png";
import petIcon from "../../assets/petIcon.svg";
import { lightTheme } from "../../styles/themes";
import { Button } from "../Button/style";
import { ContainerDb, ImgDb, ImgPetIco } from "./styles";

const BannerDashboard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  return (
    <ContainerDb>
      {isMobile ? (
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
              gap: isMobile ? "15px" : "20px",
              maxWidth: "600px",
              minWidth: "190px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <ImgPetIco src={petIcon} />
            <Typography
              className="title--db"
              variant="h4"
              sx={{ color: lightTheme.colors.aquaLight }}
            >
              Nós estamos aqui para cuidar do seu{" "}
              <Typography
                className="title--db"
                component="span"
                variant="h4"
                sx={{ color: lightTheme.colors.orange }}
              >
                animal de estimação
              </Typography>
            </Typography>
            <Typography className="subtitle--db" variant="h6">
              Fazemos nossos clientes felizes oferecendo o tratamento e a
              estadia que seu pet merece
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box className="box--btn">
                <Button
                  className="btn--bg"
                  backgroundColor="rgba(var(--orange), 1)"
                  color="rgba(var(--white), 1)"
                  height="2.5rem"
                  width="100%"
                  fontSize=".875rem"
                  fontWeight="600"
                  borderRadius="0.6rem"
                >
                  Reserve um horário
                </Button>
                <Button
                  className="btn--bg border"
                  backgroundColor="rgba(var(--white), 1)"
                  color="rgba(var(---black), 1)"
                  height="2.5rem"
                  width="100%"
                  fontSize=".875rem"
                  fontWeight="600"
                  borderRadius="0.6rem"
                >
                  Confira nossos preços
                </Button>
              </Box>
              <Box className="db--mobile">
                <ImgDb src={ImageContainer} />
              </Box>
            </Box>
          </Box>
        </Container>
      ) : (
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
              maxWidth: "600px",
              minWidth: "190px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <ImgPetIco src={petIcon} />
            <Typography
              className="title--db"
              variant="h4"
              sx={{ color: lightTheme.colors.aquaLight }}
            >
              Nós estamos aqui para cuidar do seu{" "}
              <Typography
                className="title--db"
                component="span"
                variant="h4"
                sx={{ color: lightTheme.colors.orange }}
              >
                animal de estimação
              </Typography>
            </Typography>
            <Typography className="subtitle--db" variant="h6">
              Fazemos nossos clientes felizes oferecendo o tratamento e a
              estadia que seu pet merece
            </Typography>

            <Box className="box--btn">
              <Button
                className="btn--bg"
                backgroundColor="rgba(var(--orange), 1)"
                color="rgba(var(--white), 1)"
                height="2.5rem"
                width="100%"
                fontSize=".875rem"
                fontWeight="600"
                borderRadius="0.6rem"
              >
                Reserve um horário
              </Button>
              <Button
                className="btn--bg border"
                backgroundColor="rgba(var(--white), 1)"
                color="rgba(var(---black), 1)"
                height="2.5rem"
                width="100%"
                fontSize=".875rem"
                fontWeight="600"
                borderRadius="0.6rem"
              >
                Confira nossos preços
              </Button>
            </Box>
          </Box>
          <Box>
            <ImgDb src={ImageContainer} />
          </Box>
        </Container>
      )}
    </ContainerDb>
  );
};

export default BannerDashboard;
