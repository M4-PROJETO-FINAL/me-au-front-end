
import { Outlet } from "react-router-dom";
import { Container, useMediaQuery } from "@mui/material";

import CardsPets from "../../components/CardsPets";

import Menu from "../../components/Menu";
import { ContainerDashboard } from "./styles";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
   <ContainerDashboard>
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
      <Outlet />
    </Container>
     </ContainerDashboard>
  );
};

export default Dashboard;
