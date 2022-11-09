import { Navigate, Outlet } from "react-router-dom";

import { Container, useMediaQuery } from "@mui/material";

import Menu from "../../components/Menu";
import { UserReviewContextProvider } from "../../contexts/UserReviewContext";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:660px)");
  const token = localStorage.getItem("@me-au:token");

  return token ? (
    <UserReviewContextProvider>
      <Container
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Menu />
        <Outlet />
      </Container>
    </UserReviewContextProvider>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Dashboard;
