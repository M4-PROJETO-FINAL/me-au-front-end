import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu";
import { ContainerDashboard } from "./styles";

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <Menu />
      <Outlet />
    </ContainerDashboard>
  );
};

export default Dashboard;
