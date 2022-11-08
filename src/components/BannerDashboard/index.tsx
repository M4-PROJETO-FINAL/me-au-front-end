import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import { Box, Container, Typography, Button } from "@mui/material";

import ImageContainer from "../../assets/ImageContainer.png";
import petIcon from "../../assets/petIcon.svg";
import { lightTheme } from "../../styles/themes";
import { ContainerDb, ImgDb, ImgPetIco } from "./styles";

const BannerDashboard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <ContainerDb>
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
            {t("Nós estamos aqui para cuidar do seu")}{" "}
            <Typography
              className="title--db"
              component="span"
              variant="h4"
              sx={{ color: lightTheme.colors.orange }}
            >
              {t("animal de estimação")}
            </Typography>
          </Typography>
          <Typography className="subtitle--db" variant="h6">
            {t(
              "Fazemos nossos clientes felizes oferecendo o tratamento e a estadia que seu pet merece",
            )}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box className="box--btn">
              <Button
                type="button"
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: isMobile ? 14 : 16,
                  marginTop: "0.5rem",
                  padding: isMobile ? "0.3rem 0.7rem" : "0.5rem 1.2rem",
                  color: "white",
                  borderRadius: "8px",
                  minWidth: "130px",
                }}
                onClick={() => navigate("accommodations/all")}
              >
                {t("Reserve um horário")}
              </Button>
            </Box>
            {isMobile && (
              <Box className="db--mobile">
                <ImgDb src={ImageContainer} />
              </Box>
            )}
          </Box>
        </Box>
        {!isMobile && <ImgDb src={ImageContainer} />}
      </Container>
    </ContainerDb>
  );
};

export default BannerDashboard;
