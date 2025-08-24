import React, { useState } from "react";
import newImg from "../assets/sk.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function AddModal({ onSubmit, onClose }) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [theme, setTheme] = useState("light");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = { name, username, email, address: { city } };
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      onSubmit(data);
      toast.success("New driver joined the grid!");
    } catch (err) {
      toast.error("Something wrong");
      console.log(err);
    }
  };

  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <div>
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
        {/* Left side image (hidden on small screens) */}
        <div
          className="hidden md:flex md:h-[70vh] md:w-1/3 bg-white/10 backdrop-blur-md rounded-l-2xl"
          style={{
            backgroundImage: `url(${newImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Right side form */}
        <div className="relative bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl md:rounded-l-none md:h-[70vh] md:w-2/3 w-full max-w-md p-6 md:p-8 overflow-auto">
          <h1
            className={`text-center font-bold text-xl mb-6 ${textColor}`}
            style={{ fontFamily: "fantasy" }}
          >
            Add Modal
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                className={`block font-bold mb-1 ${textColor}`}
                style={{ fontFamily: "fantasy" }}
              >
                Name
              </label>
              <div className="relative">
                <span
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="w-full bg-white/90 placeholder-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black pl-10 pr-4 py-2 shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label
                className={`block font-bold mb-1 ${textColor}`}
                style={{ fontFamily: "fantasy" }}
              >
                UserName
              </label>
              <div className="relative">
                <span
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter username"
                  className="w-full bg-white/90 placeholder-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black pl-10 pr-4 py-2 shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                className={`block font-bold mb-1 ${textColor}`}
                style={{ fontFamily: "fantasy" }}
              >
                Email
              </label>
              <div className="relative">
                <span
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full bg-white/90 placeholder-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black pl-10 pr-4 py-2 shadow-sm"
                  required
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label
                className={`block font-bold mb-1 ${textColor}`}
                style={{ fontFamily: "fantasy" }}
              >
                City
              </label>
              <div className="relative">
                <span
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City"
                  className="w-full bg-white/90 placeholder-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black pl-10 pr-4 py-2 shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow transition duration-200 font-fantasy"
              >
                Add
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-md shadow transition duration-200 font-fantasy"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
