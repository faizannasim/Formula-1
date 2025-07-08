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
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden "
      style={{
        cursor: `url(${ferrariCursor}) 16 16, auto`,
        
      }}
      
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={video}
        autoPlay
        muted
        loop
      />

      
      <div className="absolute top-4 right-6 z-30 flex space-x-6 text-white text-3xl">
        <a
          href="https://github.com/faizannasim"
          target="_blank"
          className="hover:text-white transition"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-[20px]  text-red-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/faizan-nasim-2262a930a/"
          target="_blank"
          className="hover:text-white transition rounded-full"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-[20px]  text-red-600" />
        </a>
        <a
          href="/login"
          
          className="hover:text-white transition rounded-full"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faUserPlus} className="text-[20px] text-red-600" />
        </a>
      </div>

     
      <div className="relative z-20 flex items-center px-4 py-6">
        <img src={newImg} alt="new" className="w-32 h-10" />
      </div>

      
      <div className="absolute top-0 w-full h-full flex items-center justify-center z-10">
        <h1
          ref={modelBox}
          className="text-[150px] mt-[700px] font-black drop-shadow-lg text-white mask-radial-from-neutral-800"
          style={{
            fontFamily: "Raleway",
            letterSpacing: "0.06em",
            textShadow: "2px 2px 12px rgba(255, 0, 0, 0.3)",
          }}
        >
          F O R M U L A 1 ®
        </h1>
      </div>
    </div>
  );
}

export default Hero;
