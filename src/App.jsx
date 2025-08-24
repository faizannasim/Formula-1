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

import DashBoard from "./Component/Dashboard";
import Footer from "./Component/Footer";
import OurPartners from "./Component/OurPartners";


function App() {
  

  
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
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
