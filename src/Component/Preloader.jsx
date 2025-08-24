import React, { useState, useEffect } from "react";
import carImg from "../assets/newf1.png"; // racing car image

function Preloader({ onFinish }) {
  const text = "LET'S RACE";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [carPos, setCarPos] = useState(-300); // start off-screen
  const [exhaust, setExhaust] = useState([]);

  // Animate letters one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setFadeOut(true), 800);
        return prev;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Animate car movement + exhaust
  useEffect(() => {
    const speed = 15;
    const interval = setInterval(() => {
      setCarPos((prev) => {
        if (prev < window.innerWidth / 2 - 100) return prev + speed;
        return prev;
      });

      setExhaust((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: carPos + 50,
          top: window.innerHeight / 2 + 60 + Math.random() * 10,
          size: Math.random() * 8 + 5,
        },
      ]);
    }, 50);
    return () => clearInterval(interval);
  }, [carPos]);

  // Remove old exhaust particles
  useEffect(() => {
    const timer = setInterval(() => {
      setExhaust((prev) => prev.filter((p) => Date.now() - p.id < 1000));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Call onFinish after fadeOut
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 1s ease-in-out",
      }}
    >
      {/* Exhaust particles */}
      {exhaust.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(255, 165, 0, 0.7)",
            filter: "blur(3px)",
            transform: `translateY(-${(Date.now() - p.id) / 10}px)`,
          }}
        />
      ))}

      {/* Car */}
      <img
        src={carImg}
        alt="Racing Car"
        style={{
          position: "absolute",
          left: carPos,
          bottom: 100,
          width: 200,
          height: "auto",
        }}
      />

      {/* Text */}
      <h1
        style={{
          position: "absolute",
          top: "30%",
          fontSize: "64px",
          fontWeight: "900",
          fontFamily: "'Orbitron', sans-serif",
          color: "#ff6600",
          textShadow:
            "0 0 10px #ff6600, 0 0 20px #ff3300, 0 0 30px #ff0000",
          display: "flex",
        }}
      >
        {text.split("").map((char, idx) => (
          <span
            key={idx}
            style={{
              opacity: idx < currentIndex ? 1 : 0,
              transition: "opacity 0.3s, transform 0.3s",
              transform:
                idx < currentIndex ? "translateY(0px)" : "translateY(15px)",
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Preloader;
