import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/Hero";
import HeroBody from "./components/HeroBody";
import Drivers from "./components/Drivers";
import MainPhoto from "./components/MainPhoto";
import User from "./components/User";
import CarHover from "./components/CarHover";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./Component/Dashboard";
import Footer from "./components/Footer";
import OurPartners from "./components/OurPartners";
import Preloader from "./components/Preloader";

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
