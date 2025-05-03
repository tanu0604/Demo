import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Top from "./components/navigation/Top";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/navigation/Home";
import Services from "./components/services/Services";
import Terms from "./components/terms&Conditions/Terms";
import Pricing from "./components/pricing/Pricing.jsx";
import Booking from "./components/booking/Booking.jsx"
import Footer from "./components/footer/Footer.jsx"
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initializes AOS
  }, []);

  return (
    <>
      <Top />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Terms />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
