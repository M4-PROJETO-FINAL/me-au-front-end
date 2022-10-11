import { Routes, Route } from "react-router-dom";

import Accommodation from "../pages/Accommodations";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accommodations" element={<Accommodation />} />
      <Route path="/accommodations/:id" element={<Reservation />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
