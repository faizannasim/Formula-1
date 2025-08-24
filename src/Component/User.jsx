// User.jsx
import React from "react";
import one from "../assets/1.avif";
import two from "../assets/3.avif";
import three from "../assets/5.avif";
import four from "../assets/4.avif";
import fifth from "../assets/7.avif";

function User() {
  const drivers = [
    { img: one, name: "Charles Leclerc", gradient: "from-[#ff9a9e] to-[#fad0c4]" },
    { img: two, name: "Lando Norris", gradient: "from-[#1e1e5a] to-[#d30000]" },
    { img: three, name: "George Russell", gradient: "from-[#00352f] to-[#00ff9f]" },
    { img: four, name: "Oscar Piastri", gradient: "from-[#1b1464] to-[#f7df1e]" },
    { img: fifth, name: "Esteban Ocon", gradient: "from-[#434343] to-[#000000]" },
  ];

  return (
    <div className="w-full bg-black flex flex-col items-center px-6 md:px-40 pt-12">
      {/* Modern Heading */}
      <div className="text-center max-w-4xl">
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide"
          style={{ fontFamily: "'Orbitron', sans-serif", lineHeight: "1.2" }}
        >
          🏎️🔥 The Best Behind the Wheel 🔥🏁
        </h1>
        <div className="w-24 h-1 mx-auto bg-red-600 rounded-full mb-8 transition-all duration-500 hover:w-36" />
        <p
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
          style={{ fontFamily: "'Roboto', sans-serif", lineHeight: "1.6", fontWeight: 500 }}
        >
          Meet the elite drivers who push the limits every race, delivering speed, precision, and passion on the track.
        </p>
      </div>

      {/* Driver Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 w-full max-w-7xl">
        {drivers.map((driver, i) => (
          <div
            key={i}
            className={`relative h-[400px] w-full rounded-xl shadow-lg bg-gradient-to-br ${driver.gradient} overflow-hidden transition-transform duration-300 hover:scale-105`}
          >
            <img
              src={driver.img}
              alt={driver.name}
              className="w-full h-full object-cover object-top opacity-95"
            />
            <div className="absolute bottom-3 left-0 right-0 flex justify-center p-2">
              <p
                className="text-white text-base sm:text-sm md:text-base lg:text-lg font-bold bg-black/50 px-3 py-1 rounded tracking-wide hover:underline transition-all"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {driver.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
