// Hero.jsx
import React, { useEffect, useRef } from "react";
import video from "../assets/video.mp4";
import newImg from "../assets/new.png";
import ferrariCursor from "../assets/ferrariCursor.png";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const modelBox = useRef();

  useEffect(() => {
    gsap.fromTo(
      modelBox.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.9, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ cursor: `url(${ferrariCursor}) 16 16, auto` }}
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={video}
        autoPlay
        muted
        loop
      />

      {/* Fade Overlay Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Social Icons */}
      <div className="absolute top-4 right-6 z-30 flex space-x-4 sm:space-x-6 text-white text-lg sm:text-2xl">
        <a href="https://github.com/faizannasim" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-red-600 hover:text-white transition" />
        </a>
        <a href="https://www.linkedin.com/in/faizan-nasim-2262a930a/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-red-600 hover:text-white transition" />
        </a>
        <a href="/login">
          <FontAwesomeIcon icon={faUserPlus} className="text-red-600 hover:text-white transition" />
        </a>
      </div>

      {/* Logo */}
      <div className="relative z-20 flex items-center px-4 py-6">
        <img src={newImg} alt="new" className="w-24 sm:w-32 h-auto" />
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 top-6 flex items-center justify-center z-10">
        
      </div>
    </div>
  );
}

export default Hero;
