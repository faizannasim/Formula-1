import React from "react";

function UI() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        {" "}
        Pricing Plan{" "}
      </h1>

      <div className=" flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="bg-white shadow-md rounded w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Free Plans</h2>
          <p className="mb-4 text-gray-600">Basic features for getting started.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Submit</button>
        </div>
        <div className="bg-white shadow-md rounded w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Free Plans</h2>
          <p className="mb-4 text-gray-600">Advanced features for growth.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Submit</button>
        </div>
        <div className="bg-white shadow-md rounded w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Free Plans</h2>
          <p className="mb-4 text-gray-600">Advanced features for growth.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Submit</button>
        </div>
      </div>
      <div>
        <h2>gfgfgc</h2>
        <button onClick="document.body.style.background=black">Button</button>
      </div>
    </div>

  );
}

export default UI;

// On small screens: text-sm

// On medium (≥768px): text-xl

// On large (≥1024px): text-2xl
// sm:flex-row: jab screen ≥ 640px ho jaati hai, tab horizontal (side by side)



import React from "react";

function App() {
  const changeBackground = () => {
    document.body.style.background = "black";
  };

  return (
    <div>
      <h2>gfgfgc</h2>
      <button onClick={changeBackground}>Button</button>
    </div>
  );
}

export default App;











import React from "react";
import newImg from "../assets/hh.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function BlankInput({ user }) {
  return (
    <div className="bg-white/10 backdrop-blur-md mt-2 p-4 rounded-md max-w-[900px]  mx-auto text-white border border-gray-300 shadow-sm">
  
      <div
        className="w-[30%] h-[45vh] flex flex-col justify-center items-center bg-white/10 backdrop-blur-md rounded-l-2xl p-6"
        
      >
        <h1
          className="text-white font-extrabold text-4xl drop-shadow-md mb-2"
          style={{ fontFamily: "fantasy" }}
        >
          kay
        </h1>
        <p className="text-white font-semibold text-2xl">okay</p>
      </div>

  
      <div className="w-[30%] h-[45vh] bg-white/10 backdrop-blur-md rounded-r-2xl shadow-2xl p-6">
        <h1 className="text-white text-xl font-bold text-center mb-4">
          User Info
        </h1>

        <form className="space-y-3">
          
          <div>
            <label className="block text-white mb-1 font-medium">Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                name="name"
                value={user?.name || ""}
                disabled
                className="w-full bg-white/80 text-black placeholder:text-gray-600 rounded-md pl-10 pr-4 py-2 focus:outline-none shadow-sm"
              />
            </div>
          </div>

         
          <div>
            <label className="block text-white mb-1 font-medium">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                name="username"
                value={user?.username || ""}
                disabled
                className="w-full bg-white/80 text-black placeholder:text-gray-600 rounded-md pl-10 pr-4 py-2 focus:outline-none shadow-sm"
              />
            </div>
          </div>

         
          <div>
            <label className="block text-white mb-1 font-medium">Email</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                name="email"
                value={user?.email || ""}
                disabled
                className="w-full bg-white/80 text-black placeholder:text-gray-600 rounded-md pl-10 pr-4 py-2 focus:outline-none shadow-sm"
              />
            </div>
          </div>

         
          
        </form>
      </div>
    </div>
  );
}

export default BlankInput;
