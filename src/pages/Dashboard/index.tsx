import { Outlet } from "react-router-dom";

import { Container, useMediaQuery } from "@mui/material";

import Menu from "../../components/Menu";
import { UserReviewContextProvider } from "../../contexts/UserReviewContext";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:660px)");

  return (
    <UserReviewContextProvider>
      <Container
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Menu />
        <Outlet />
      </Container>
    </UserReviewContextProvider>
  );
};

export default Dashboard;
