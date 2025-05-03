import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Top from "./components/navigation/Top";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/navigation/Home";

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
      </Routes>
    </>
  );
}

export default App;
