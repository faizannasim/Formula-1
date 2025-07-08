import React from "react";
import bg from "../assets/newf1.png";

function HeroBody() {
  return (
    <div className="w-full h-full bg-black flex items-start">
      <div className="group">
        <h1
          className="text-[30px] group text-white leading-relaxed mt-[50px] px-4 ml-[30px] font-bold italic "
          style={{
            fontFamily: "Fantasy",
            letterSpacing: "0.06em",
            textShadow: "2px 2px 12px rgba(255, 0, 0, 0.3)",
          }}
        >
          I know what I have to do,
          <br />
          <span
            className="text-[40px] italic font-light text-gray-300 mask-radial-from-neutral-900 "
            style={{ fontFamily: "Fantasy" }}
          >
         No need to talk.
          </span>
          <span className="text-[40px] italic font-light text-red-400 ml-[920px] mask-radial-from-neutral-950">
            — Kimi Räikkönen.
          </span>
          <br />
        </h1>

        <div className="block h-[3px] w-0 bg-red-500 mt-3 transition-all duration-700 group-hover:w-[1650px] mx-auto " />
        <br />

        <p
          className="mt-16 text-white text-4xl md:text-5xl font-light italic px-6 md:px-20 leading-relaxed tracking-wide w-full "
          style={{
            fontFamily: "Fantasy",
            letterSpacing: "0.06em",
            textShadow: "2px 2px 12px rgba(255, 0, 0, 0.3)",
          }}
        >
          If I could throw my phone away, I would probably do it. It’s always
          on silent, and I don’t like when it rings or people are calling. I
          have no interest in telling everyone what I do every day or where I
          am and  Yes, yes, yes, yes, I'm doing all the time. You don't have to remind
            every 10 seconds.
          
        </p>
        <div className="relative w-full mt-32">
          <img src={bg} className="w-full object-cover" />

          <div className="absolute top-6 left-6  ">
            <p
              className="text-white text-lg md:text-xl italic. ml-[780px]"
              style={{ fontFamily: "Fantasy" }}
            >
              🕹️ System Online  
            </p>
            <br />
            <h1
              className="text-white text-3xl md:text-5xl font-semibold flex items-center gap-2 mt-2 ml-[450px]"
              style={{ fontFamily: "Fantasy" }}
            >
              🐎 Ferrari F1 - Unleashing the Red Fury 🔴🔥
            
            </h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default HeroBody;
