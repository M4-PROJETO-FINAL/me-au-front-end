import { Container, useMediaQuery } from "@mui/material";

import CardsPets from "../../components/CardsPets";
import Menu from "../../components/Menu";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <Menu />
      <CardsPets />
    </Container>
  );
};

export default Dashboard;
