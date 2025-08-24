import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./Component/Hero";
import HeroBody from "./Component/HeroBody";
import Drivers from "./Component/Drivers";
import MainPhoto from "./Component/MainPhoto";
import User from "./Component/User";
import CarHover from "./Component/CarHover";
import Login from "./Component/Login";      // ✅ Corrected
import Register from "./Component/Register";
import Dashboard from "./Component/Dashboard"; // ✅ fixed casing
import Footer from "./Component/Footer";
import OurPartners from "./Component/OurPartners";
import Preloader from "./Component/Preloader";

function App() {
  const [loading, setLoading] = useState(
    !sessionStorage.getItem("animationPlayed") // sirf first load pe dikhana
  );

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("animationPlayed", "true"); // mark as played
      }, 3000); // loader time 3s
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return <Preloader />; // jab tak loader chal raha hai
  }

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <HeroBody />
              <Drivers />
              <MainPhoto />
              <User />
              <CarHover />
              <OurPartners />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
