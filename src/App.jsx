











































import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';


import Hero from './Component/Hero';
import HeroBody from './Component/HeroBody';
import Drivers from './Component/Drivers';
import MainPhoto from './Component/MainPhoto';
import User from './Component/User';
import CarHover from './Component/CarHover';


import Login from './Component/Login';
import Register from './Component/Register';
import Dashboard from './Component/Dashboard';

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















