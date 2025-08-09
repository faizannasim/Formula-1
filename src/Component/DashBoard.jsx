import React, { useState, useEffect } from "react";
import API from "../Modal/API";
import newImg from "../assets/hh.jpg";
import "../index.css";

import { useNavigate } from "react-router-dom";

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
import BlankInput from "../Modal/BlankInput";
import AddModal from "../Modal/AddModal";
import UpdateModal from "../Modal/UpdateModal";
import { toast } from "react-toastify";
import SupportForm from "./SupportForm";

function DashBoard() {
  const navigate = useNavigate();

  const [selectedSection, setSelectedSection] = useState("DashBoard");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [latestUser, setLatestUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [theme, setTheme] = useState("light");
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  const handledAddUser = (newUser) => {
    newUser.id = user.length + 1;
    setUser([...user, newUser]);
    setLatestUser(newUser);
  };

  const handledUpdateUser = (updatedUser) => {
    const updatedUsers = user.map((u) =>
      u.id === updatedUser.id ? updatedUser : u,
    );
    setUser(updatedUsers);
    setLatestUser(updatedUser);
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("Email");
    setEmail(storedEmail);
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  useEffect(() => {
    const IsLogin = localStorage.getItem("isLoggedIn");
    if (!IsLogin) {
      navigate("/login");
    }
  }, []);

  const logins = JSON.parse(localStorage.getItem("loginHistory")) || [];
  logins.map((entry, i) => (
    <div key={i} className="border p-2 my-2">
      <p>
        📍 {entry.city}, {entry.country}
      </p>
      <p>
        🖥️ {entry.device} | {entry.browser} | {entry.os}
      </p>
      <p>🕒 {entry.time}</p>
      <hr />
    </div>
  ));

  useEffect(() => {
    const StoredTheme = localStorage.getItem("theme") || "dark";
    setTheme(StoredTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const textColor = theme === "light" ? "text-black" : "text-white";
  return (
    <div className="bg-transparent flex min-h-screen">
      <aside
        className={`min-h-screen w-[280px] flex flex-col p-6 ${textColor} backdrop-blur-md shadow-lg`}
        style={{ fontFamily: "obitron" }}
      >
        <h1
          className="text-4xl font-extrabold px-6 py-4 rounded-xl "
          style={{
            backgroundImage: `url(${newImg})`,
            backgroundSize: "contain",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OBIUX
        </h1>

        <nav
          className="flex flex-col gap-6 text-[20px]"
          style={{ fontFamily: "obitron" }}
        >
          <button
            onClick={() => setSelectedSection("dashboard")}
            className={`flex items-center gap-3 px-2 py-2  ${textColor}  transition-all  rounded ${
              selectedSection === "dashboard"
                ? "bg-slate-300 text-black shadow-md"
                : "${textColor} hover:bg-slate-700"
            }`}
          >
            <FaTachometerAlt size={22} /> Dashboard
          </button>
          <button
            onClick={() => setSelectedSection("Profile")}
            className={`flex items-center gap-3 px-2 py-2  text-red-600  ${textColor} rounded transition-all  ${
              selectedSection === "Profile"
                ? "bg-slate-300 text-black shadow-md"
                : "${textColor} hover:bg-slate-700"
            }`}
          >
            <FaChartLine size={22} /> Profile
          </button>
          <button
            onClick={() => setSelectedSection("Drivers")}
            className={`flex items-center gap-3 px-2 py-2  ${textColor}  rounded transition-all 
              ${
                selectedSection === "Drivers"
                  ? "bg-slate-300 text-black shadow-md"
                  : "${textColor} hover:bg-slate-700"
              }`}
          >
            <FaUser size={22} /> Drivers
          </button>
          <button
            onClick={() => setSelectedSection("Teams")}
            className={`flex items-center gap-3 px-2 py-2 ${textColor}rounded transition-all ${
              selectedSection === "Teams"
                ? "bg-slate-300 text-black shadow-md"
                : "${textColor} hover:bg-slate-700"
            }`}
          >
            <FaUsers size={22} /> Teams
          </button>
          <button
            onClick={() => setSelectedSection("Analytics")}
            className={`flex items-center gap-3 px-2 py-2  ${textColor} rounded transition-all ${
              selectedSection === "Analytics"
                ? "bg-slate-300 text-black shadow-md"
                : "${textColor} hover:bg-slate-700"
            }`}
          >
            <FaCog size={22} /> Analytics
          </button>

          <button
            onClick={() => setSelectedSection("users")}
            className={`flex items-center gap-3 py-2 px-2  ${textColor} rounded transition-all ${
              selectedSection === "users"
                ? "bg-slate-300 text-black shadow-md"
                : "${textColor} hover:bg-slate-700"
            }`}
          >
            <FaUser size={22} /> Users
          </button>
          <button
            onClick={() => setSelectedSection("Login History")}
            className={`flex items-center gap-3 py-2  ${textColor} rounded transition-all ${
              selectedSection === "Login History"
                ? "bg-slate-300 text-black shadow-md"
                : "${textColor} hover:bg-slate-700"
            }`}
          >
            <FaUser size={22} /> Login History
          </button>
           <button
            onClick={() => setSelectedSection("Contact Support")}
            className={`flex items-center gap-3 py-2  ${textColor} rounded transition-all ${
              selectedSection === "Contact Support"
                ? "bg-slate-300 text-black shadow-md"
                : "${textColor} hover:bg-slate-700"
            }`}
          >
            <FaUser size={22} /> Contact Support
          </button>
        </nav>

        <div
          className="mt-auto pt-10  text-2xl"
          style={{ fontFamily: "obitron" }}
        >
          <button
            className={`flex items-center gap-3 cursor-pointer px-4 py-2 ${textColor} hover:bg-slate-700 rounded transition-all text-sm`}
            onClick={handleLogout}
          >
            <FaSignOutAlt size={22} /> Logout
          </button>
        </div>
      </aside>

      
      <main className="flex-1 p-10 overflow-hidden">
        <header
          className={`flex justify-between items-center mt-8 mb-10 ${textColor}`}
        >
          <h1
            className={`text-3xl font-bold ${theme === "light" ? "text-black" : "text-white"}`}
          >
            Welcome, {email}
          </h1>

          <p className="text-gray-400 text-base flex items-center gap-2 mr-[400px] mt-11">
            <span>Ready to dominate the track?</span>
            <span className="text-2xl">🏎️</span>
          </p>

          <button
            className={`relative  ${textColor} p-3  h-12 rounded-b-xl hover:bg-slate-700 shadow-lg transition-transform hover:scale-110`}
          >
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 rounded  w-4 flex items-center justify-center text-sm  font-bold animate-pulse  bg-white h-4"></span>
          </button>
         <div>
  <button
    onClick={toggleTheme}
    className={`w-12 h-6 flex items-center p-1 rounded duration-300 ease-in-out
      ${theme === "dark" ? "bg-gray-800" : "bg-blue-700"}`}
  >
    <div
      className={`w-4 h-4 bg-white rounded shadow-md transform duration-300 ease-in-out
        ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
        
    ></div>
  </button>
</div>

        </header>


        {selectedSection === "dashboard" && (
          <>
            <section
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white"
              style={{ fontFamily: "obitron " }}
            >
              {Navitems.map(({ title, value, icon }, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 shadow-xl  bg-white/10  backdrop-blur-md  transform hover:scale-105 transition-transform cursor-pointer ${textColor}`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <span className="font-bold text-lg">{title}</span>
                    {icon}
                  </div>
                </div>
              ))}
            </section>
          </>
        )}

        {selectedSection === "Profile" && (
          <>
            <section
              className="items-center text-center text-2xl   font-bold rounded-2xl"
              style={{ fontFamily: "obitron " }}
            >
              {isOwner ? (
                <div className=" relative p-6 rounded-xl bg-white/10  h-66 text-white">
                  <h2 className="text-2xl font-bold border-b border-red-700 mb-4">
                    👤 Driver Profile
                  </h2>
                  <div className={` p-6 rounded-xl  ${textColor} `}>
                    <p className="absolute left-7  ">
                      <span className="font-semibold text-red-300">Name:</span>{" "}
                      Faizan
                    </p>
                    <p className="absolute left-7  top-52">
                      <span className="font-semibold text-red-300">Email:</span>{" "}
                      {email}
                    </p>
                    <p className="absolute left-7  top-40">
                      <span className="font-semibold text-red-300">Role:</span>{" "}
                      Driver
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
            <section
              className="items-center text-center text-2xl font-bold rounded-2xl"
              style={{ fontFamily: "obitron " }}
            >
              {isOwner ? (
                <div
                  className={`p-6 rounded-xl bg-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hover:scale-105 transition-transform cursor-pointer ${textColor}`}
                >
                  <p>Name : Faizan Nasim</p>
                  <p>Email: {email}</p>
                  <p>Role: Driver</p>
                  <p>Team: Red Bull Racing</p>
                  <p>Car Number: 1</p>
                  <p>Speed: 322 km/h</p>
                  <p>Lap: 36 / 58</p>
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
            <section
              className="items-center text-center text-2xl font-bold rounded-2xl"
              style={{ fontFamily: "obitron " }}
            >
              {isOwner ? (
                <div
                  className={`rounded-xl p-6 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white/10  backdrop-blur-md  transform hover:scale-105 transition-transform cursor-pointer ${textColor}`}
                >
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
            <section
              className="items-center text-center text-2xl font-bold rounded-2xl"
              style={{ fontFamily: "obitron " }}
            >
              {isOwner ? (
                <div
                  className={`rounded-xl p-6 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white/10  backdrop-blur-md  transform hover:scale-105 transition-transform cursor-pointer ${textColor}`}
                >
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
        {selectedSection === "Login History" && (
          <>
            <section>
              <h2 className={`text-2xl ${textColor} font-bold mb-4 pb-2`}>
                Login History
              </h2>
              <div className="space-y-4">
                {(JSON.parse(localStorage.getItem("LoginHistory")) || []).map(
                  (entry, index) => {
                    return (
                      <div
                        key={index}
                        className="border border-white/20 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <p className={`${textColor}`}>
                          📍 <strong>IP:</strong> {entry.ip}
                        </p>
                        <p className={`${textColor}`}>
                          📍 <strong>City:</strong> {entry.city},{" "}
                          {entry.country}
                        </p>
                        <p className={`${textColor}`}>
                          🖥️ <strong>Device:</strong> {entry.device}
                        </p>
                        <p className={`${textColor}`}>
                          🌐 <strong>Browser:</strong> {entry.browser}
                        </p>
                        <p className={`${textColor}`}>
                          💻 <strong>OS:</strong> {entry.os}
                        </p>
                        <p className={`${textColor}`}>
                          🕒 <strong>Time:</strong> {entry.time}
                        </p>
                      </div>
                    );
                  },
                )}
              </div>
            </section>
          </>

        )}
     {
      selectedSection === "Contact Support" && <SupportForm /> 
      
     }

        {selectedSection === "users" && (
          <div>
            <div className="flex justify-between mb-4">
              <button
                className="btn btn-danger"
                onClick={() => setShowModal(true)}
              >
                Add User
              </button>
            </div>

            <API
              users={user}
              onUpdate={(user) => {
                setSelectedUser(user);
                setShowUpdateModal(true);
              }}
            />
            <div className="mt-8">
              <BlankInput user={latestUser} />
            </div>

            {showModal && (
              <AddModal
                onClose={() => setShowModal(false)}
                onSubmit={(newUser) => {
                  handledAddUser(newUser);
                  setShowModal(false);
                }}
              />
            )}

            {showUpdateModal && selectedUser && (
              <UpdateModal
                user={selectedUser}
                onclose={() => setShowUpdateModal(false)}
                onSubmit={(updatedUser) => {
                  handledUpdateUser(updatedUser);
                  setShowUpdateModal(false);
                }}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default DashBoard;
