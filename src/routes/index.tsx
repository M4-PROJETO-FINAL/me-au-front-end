import { Routes, Route } from "react-router-dom";

import MyProfile from "../components/MyProfile";
import Accommodations from "../pages/Accommodations";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<MyProfile />} />
      </Route>
      <Route path="/accommodations/:tag" element={<Accommodations />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/accommodations/:id" element={<Reservation />} /> */}
    </Routes>
  );
};
