import { Routes, Route } from "react-router-dom";

import Accommodations from "../pages/Accommodations";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/accommodations" element={<Accommodation />}>
        <Route path="/accommodations/:id" element={<Reservation />} />
      </Route> */}
      <Route path="/accommodations/:tag" element={<Accommodations />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
