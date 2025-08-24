import React from "react";
import bg from "../assets/newf1.png";

function HeroBody() {
  return (
    <section className="w-full flex flex-col items-center text-center px-6 py-12 bg-black">
      {/* Paragraph */}
      <p
        className="text-gray-300 text-2xl sm:text-3xl md:text-4xl max-w-5xl mb-10"
        style={{
          fontFamily: "'didot'",
          fontWeight: 300,
          lineHeight: "1.7",
          letterSpacing: "0.02em",
        }}
      >
        Ferrari is not just about racing : it’s about redefining speed,
        precision, and passion. Every lap pushes the limits, every second
        writes history, and every victory fuels the legend of the Prancing Horse.
      </p>

      {/* Heading */}
      <h1
        className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold mb-12 tracking-wide"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
        }}
      >
        🐎 Ferrari F1  The Red Fury
      </h1>

      {/* Car Image */}
      <div className="w-full md:w-4/5 mx-auto">
        <img
          src={bg}
          className="w-full rounded-2xl shadow-2xl"
          alt="Ferrari F1 Car"
        />
      </div>
    </section>
  );
}

export default HeroBody;
