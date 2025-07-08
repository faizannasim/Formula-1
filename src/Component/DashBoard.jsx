import React, { useState,useEffect } from "react";
import newImg from "../assets/hh.jpg";
import { Link } from "react-router-dom";

import {
  FaTachometerAlt,
  FaChartLine,
  FaUser,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaFlagCheckered,
  FaDotCircle,
  FaCircle,
  FaGasPump,
  FaCogs,
  FaBolt,
  FaRocket,
  FaTools,
  FaStopwatch,
  FaTrophy,
  FaSun,
} from "react-icons/fa";

function DashBoard() {
  const [selectedSection, setSelectedSection] = useState("DashBoard");
  const [email, setEmail] = useState("");



 useEffect(()=>{
    const storedEmail =  localStorage.getItem("Email")
    setEmail(storedEmail)

  },[])
  const isOwner = email === "faizannasim59@gmail.com";

  const Navitems = [
    {
      title: "Current Lap",
      value: "Lap 36 / 58",
      icon: <FaFlagCheckered size={28} />,
    },
    {
      title: "Driver Speed",
      value: "322 km/h",
      icon: <FaTachometerAlt size={28} />,
    },
    { title: "Engine Temp", value: "102°C", icon: <FaDotCircle size={28} /> },
    {
      title: "Tyre Compound",
      value: "Soft (15 Laps)",
      icon: <FaCircle size={28} />,
    },
    { title: "Fuel Remaining", value: "12.3 L", icon: <FaGasPump size={28} /> },
    { title: "Gear", value: "6th", icon: <FaCogs size={28} /> },
    { title: "ERS Mode", value: "Overtake", icon: <FaBolt size={28} /> },
    { title: "DRS", value: "Available", icon: <FaRocket size={28} /> },
    { title: "Pit Stops", value: "1", icon: <FaTools size={28} /> },
    { title: "Lap Time", value: "1:32.478", icon: <FaStopwatch size={28} /> },
    { title: "Position", value: "P3", icon: <FaTrophy size={28} /> },
    { title: "Weather", value: "Clear, 28°C", icon: <FaSun size={28} /> },
  ];

  return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(${newImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <aside
        className="min-h-screen w-[280px] flex flex-col p-6 text-red-700 backdrop-blur-md shadow-lg"
        style={{ fontFamily: "obitron" }}
      >
        <h1 className="mb-4 tracking-wide text-2xl  py-2 rounded-lg shadow-lg w-fit">
          <span className="flex items-center justify-center"> 🏎️</span>  Dashboard
        </h1>

        <nav
          className="flex flex-col gap-6 text-[30px]"
          style={{ fontFamily: "obitron" }}
        >
          <button
            onClick={() => setSelectedSection("dashboard")}
            className={`flex items-center gap-3 px-2 py-2  text-red-600  rounded-md transition-all ${
              selectedSection === "dashboard"
                ? "bg-red-600 text-white shadow-md"
                : "text-red-700 hover:bg-red-100"
            }`}
          >
            <FaTachometerAlt size={22} /> Dashboard
          </button>
          <button
            onClick={() => setSelectedSection("Profile")}
            className={`flex items-center gap-3 px-2 py-2  text-red-600  rounded-md transition-all  ${
              selectedSection === "Profile"
                ? "bg-red-600 text-white shaodw-md"
                : "text-red-700 hover:bg-red-100"
            }`}
          >
            <FaChartLine size={22} /> Profile
          </button>
          <button
            onClick={() => setSelectedSection("Drivers")}
            className={`flex items-center gap-3 px-2 py-2  text-red-600  rounded-md transition-all ${
              selectedSection === "Drivers"
                ? "bg-red-600 text-white shadow-md"
                : "text-red-700 hover:bg-red-100"
            }`}
          >
            <FaUser size={22} /> Drivers
          </button>
          <button
            onClick={() => setSelectedSection("Teams")}
            className={`flex items-center gap-3 px-2 py-2 text-red-600 rounded-md transition-all ${
              selectedSection === "Teams"
                ? "bg-red-600 text-white shadow-md"
                : "text-red-700 hover:bg-red-100"
            }`}
          >
            <FaUsers size={22} /> Teams
          </button>
          <button
            onClick={() => setSelectedSection("Analytics")}
            className={`flex items-center gap-3 px-2 py-2  text-red-600  rounded-md transition-all ${
              selectedSection === "Analytics"
                ? "bg-red-600 text-white shadow-md"
                : "text-red-700 hover:bg-red-100"
            }`}
          >
            <FaCog size={22} /> Analytics
          </button>
        </nav>
        <div
          className="mt-auto pt-10  text-[30px]"
          style={{ fontFamily: "obitron" }}
        >
          <button
            className="flex items-center gap-3 cursor-pointer px-4 py-2 text-red-700 hover:bg-red-100 rounded-md transition-all text-xl"
            onClick={() => localStorage.clear()}
          >
            <FaSignOutAlt size={22} /> Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-10 overflow-hidden">
        <header className="flex justify-between items-center mt-8 mb-10 text-red-600 ">
          <h1
            className="font-bold tracking-tight drop-shadow-lg"
            style={{ fontFamily: "obitron" }}
          >
            Welcome, {email || "User"}!
          </h1>
          <button className="relative  text-white p-3 rounded-full shadow-lg bg-red-700  transition-transform hover:scale-110">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 rounded-full w-4 flex items-center justify-center text-sm  font-bold animate-pulse  bg-red-600 h-4"></span>
          </button>
        </header>
        {selectedSection === "dashboard" && (
          <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white" style={{fontFamily:"obitron "}}>
              {Navitems.map(({ title, value, icon }, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 shadow-xl  bg-white/10  backdrop-blur-md  transform hover:scale-105 transition-transform cursor-pointer text-white"
                >
                  <div className="flex items-center justify-center mb-4">
                    <span className="font-bold text-lg">{title}</span>
                    {icon}
                  </div>
                  
                </div>
              ))}
            </section>
            <section className="rounded-xl justify-between items-center shadow-2xl h-96 text-2xl font-semibold select-none">
              ⚙️DashBoard Overview
            </section>
          </>
        )}
        {selectedSection === "Profile" && (
          <>
            <section className="items-center text-center text-2xl   font-bold rounded-2xl" style={{fontFamily:"obitron "}}>
              {isOwner ? (
                <div className=" relative p-6 rounded-xl bg-white/10  h-66 text-white">
                <h2 className="text-2xl font-bold border-b border-red-700 mb-4">👤 Driver Profile</h2>
                <div className=" p-6 rounded-xl  text-white ">
                <p className="absolute left-7  ">
                  <span className="font-semibold text-red-300">Name:</span> Faizan
                 </p>
                 <p className="absolute left-7  top-52">
                <span className="font-semibold text-red-300">Email:</span> {email}
                 </p>
                 <p className="absolute left-7  top-40">
                <span className="font-semibold text-red-300">Role:</span> Driver
                 </p>
                </div>
  

                 

               
              </div>

              ) : (
                <p className="text-pink-300">
                  Welcome to the Grid! Get ready to feel the adrenaline 🏎️🔥
                </p>
              )}
            </section>
          </>
        )}
        {selectedSection === "Drivers" && (
          <>
            <section className=" grid grid-cols-5items-center text-center text-2xl font-bold rounded-2xl" style={{fontFamily:"obitron "}}>
              {isOwner ? (
                <div className="p-6 rounded-xl bg-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hover:scale-105 transition-transform cursor-pointer text-white">
                  <p>Name : Faizan Nasim</p>
                  <p>Email: {email}</p>
                  <p>Role: Driver</p>
                  <p>Team: Red Bull Racing</p>
                  <p>Car Number: 1</p>
                  <p>Speed: 322 km/h</p>
                  <p>Lap: 36 / 58</p>
                  <p>Tyre: Soft Compound</p>
                  <p>Engine Temp: 102°C</p>
                  <p>ERS Mode: Overtake</p>
                  <p>DRS: Available</p>
                  <p>Position: P3</p>
                  <p>Pit Stops: 1</p>
                  <p>Fuel Remaining: 12.3 L</p>
                  <p>Weather: Clear, 28°C</p>
                </div>
              ) : (
                <p className="text-pink-300">
                  Welcome to the Grid! Get ready to feel the adrenaline 🏎️🔥
                </p>
              )}
            </section>
          </>
        )}
        {selectedSection === "Teams" && (
          <>
           <section className="items-center text-center text-2xl font-bold rounded-2xl" style={{fontFamily:"obitron "}}>
              {isOwner ? (
                <div  className="rounded-xl p-6 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white/10  backdrop-blur-md  transform hover:scale-105 transition-transform cursor-pointer text-white">
                  <p>Team: Red Bull Racing</p>
                  <p>Garage Status: Ready</p>
                  <p>Constructor Points: 445</p>
                  <p>Team Principal: Christian Horner</p>
                  <p>Drivers: Max Verstappen, Sergio Pérez</p>
                  <p>Base: Milton Keynes, UK</p>
                </div>
              ) : (
                <p className="text-pink-300">
                  Welcome to the Grid! Get ready to feel the adrenaline 🏎️🔥
                </p>
              )}
            </section>
          </>
        )}
        {selectedSection === "Analytics" && (
          <>
            <section className="items-center text-center text-2xl font-bold rounded-2xl" style={{fontFamily:"obitron "}}>
              {isOwner ? (
                <div className="rounded-xl p-6 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white/10 backdrop-blur-md transform hover:scale-105 transition-transform cursor-pointer text-white">
                  <p>Top Speed Recorded: 322 km/h</p>
                  <p>Average Pit Stop Time: 2.3s</p>
                  <p>Fastest Lap This Race: 1:32.478</p>
                  <p>Tyre Strategy: Soft → Medium</p>
                  <p>ERS Usage: 87%</p>
                  <p>Fuel Remaining: 12.3 L</p>
                </div>
              ) : (
                <p className="text-pink-300">
                  Welcome to the Grid! Get ready to feel the adrenaline 🏎️🔥
                </p>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default DashBoard;
