import React from "react";
import one from "../assets/1.avif";
import two from "../assets/3.avif";
import three from "../assets/5.avif";
import four from "../assets/4.avif";
import fifth from "../assets/7.avif";
import six from "../assets/car bg.avif";
import seven from "../assets/seven.jpg";
import eight from "../assets/face.avif";
import nine from "../assets/newws.jpg";

function User() {
  return (
    <div className="w-full h-full bg-black flex flex-col  justify-start px-[160px] pt-10 relative overflow-hidden">
      <div className="w-full ">
        <div className="h-[15px] w-full bg-red-800   " />

        <div className="h-[15px] w-full bg-red-800 mt-2.5 " />
      </div>
      <div className="mt-10  ">
        <h1
          className="text-white text-[40px]  font-bold"
          style={{ fontFamily: "fantasy" }}
        >
          🏎️🔥 The Best Behind the Wheel 🔥🏁
        </h1>
      </div>
      <div className="    grid grid-cols-2 md:grid-cols-5 gap-9 mt-10 px-4 md:px-0">
        <div className=" relative h-[400px]  w-[260px]  overflow-hidden shadow-lg rounded-lg backdrop-opacity-25 bg-gradient-to-br from-[#ff9a9e]] to-[#fad0c4]">
          <img
            src={one}
            alt="Driver "
            className="w-full h-full object-cover object-top opacity-90 "
          />
          <div className="absolute inset-0 flex   items-end justify-end p-4   ">
            <p
              className="text-white text-[20px] font-extrabold  px-4 rounded  tracking-wide transition-all hover:underline  "
              style={{
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Charles Leclerc
            </p>
          </div>
        </div>

        <div className=" relative h-[400px] w-[260px] overflow-hidden shadow-lg rounded-lg bg-gradient-to-br from-[#1e1e5a] to [#d30000]">
          <img
            src={two}
            alt="Driver 2"
            className="w-full h-full object-cover object-top "
          />

          <div className="absolute inset-0 flex  items-end justify-end p-4">
            <p
              className=" text-white text-[20px]  font-extrabold px-4 rounded hover:underline tracking-wide transition-all "
              style={{
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Lando Norris
            </p>
          </div>
        </div>

        <div className=" relative h-[400px] w-[260px] overflow-hidden shadow-lg rounded-lg bg-gradient-to-br from-[#00352f] to-[#00ff9f]">
          <img
            src={three}
            alt="Driver 3"
            className="w-full h-full object-cover object-top "
          />
          <div className="absolute inset-0 flex  items-end justify-end p-4">
            <p
              className=" text-white text-[20px]  font-extrabold px-4 rounded hover:underline tracking-wide transition-all antialiased"
              style={{
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              George Russell
            </p>
          </div>
        </div>

        <div
          className=" relative h-[400px] w-[260px] overflow-hidden shadow-lg rounded-lg bg-gradient-to-br from-[#1b1464] to-[#f7df1e]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          <img
            src={four}
            alt="Driver 4"
            className="w-full h-full object-cover object-top  "
          />
          <div className="absolute inset-0 flex items-end justify-end p-4">
            <p
              className="text-white text-[20px]  font-extrabold px-4  rounded hover:underline tracking-wide transition-all antialiased"
              style={{
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Oscar Piastri
            </p>
          </div>
        </div>

        <div className=" relative h-[400px] w-[260px] overflow-hidden shadow-lg rounded-lg bg-gradient-to-br from-[#434343] to-[#000000]">
          <img
            src={fifth}
            alt="Driver 1"
            className="w-full h-full object-cover object-top  "
          />
          <div className="absolute inset-0 flex justify-end items-end p-4">
            <p
              className="text-white text-[20px]  font-extrabold px-4 rounded hover:underline tracking-wide transition-all antialiased"
              style={{
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Esteban Ocon
            </p>
          </div>
        </div>
      </div>
      <div className="mt-11 ml-2">
        <p
          className="text-white text-[40px] font-extrabold tracking-wide"
          style={{ fontFamily: "fantasy" }}
        >
          🧬 ENGINEERED TO DOMINATE   🏎️🔥 

        </p>
      </div>

      <div className="  mb-20 mt-10 relative overflow-hidden    ">
        <img
          src={six}
          className=" w-3xl transition-transform ease-in-out duration-300 group-hover:scale-105 rounded ml-4 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full flex  ">
          <a href=""
            className="font-bold text-white text-[25px]   transition-all duration-300 group-hover:underline ml-20 mb-5"
            style={{ fontFamily: "'fantasy" }}
          >
            LIVE COVERAGE: Second practice for the British GP
          </a>
        </div>
        <div>
          <div className="absolute top-0 right-4 flex items-center space-x-2   ">
            <a href="" className="flex items-center space-x-4 text-white  w-[640px] font-bold bg-gray-900 p-2 gap-2 rounded group hover:underline" style={{fontFamily:"fantasy"}}>
              <img src={seven} className="h-20 w-20 rounded   transition-all duration-300 group-hover:scale-110 " />
             🧱 LEGO trophies awarded to top 3 at Silverstone podium.
            </a >
          </div>
          <div className="absolute top-28 right-4 flex items-center space-x-2 ">
            <a href="" className="flex items-center space-x-4 text-white  w-[640px] font-bold bg-gray-900 p-2 gap-2 rounded group hover:underline" style={{fontFamily:"fantasy"}}>
              <img src={eight} className="h-20 w-20 rounded transition-all duration-300 group-hover:scale-110 " />
              🏁 Verstappen takes pole at Silverstone for the British GP.
            </a>
          </div>
          <div className="absolute top-56 right-4 flex items-center space-x-2 ">
            <a href="" className="flex items-center space-x-4 text-white w-[640px] font-bold bg-gray-900 p-2 gap-2 rounded group hover:underline" style={{fontFamily:"fantasy"}}>
              <img src={nine} className="h-20 w-20 rounded transition-all duration-300 group-hover:scale-110 " /> 
                🏆 Hülkenberg gets first-ever podium after 239 races!

            </a>
          </div>
          <div className="absolute top-86 right-4 flex items-center space-x-2 ">
            <a href="" className="flex items-center space-x-4 text-white  w-[640px] font-bold bg-gray-900 p-2 gap-2 rounded group hover:underline" style={{fontFamily:"fantasy"}}>
              <img src={seven} className="h-20 w-20 rounded transition-all duration-300 group-hover:scale-110 " />
             🌧️ Rain shakes up strategy mid-race at Silverstone.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;





