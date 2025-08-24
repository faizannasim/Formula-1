import React, { useRef } from "react";
import video from "../assets/drover.mp4";
import video1 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

import poster4 from "../assets/LH 44.jpeg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/_ (3).jpeg";

function Drivers() {
  const refs = [useRef(), useRef(), useRef()];

  const videos = [
    { src: video, poster: poster4, title: "Lewis Hamilton" },
    { src: video1, poster: poster2, title: "Max Verstappen" },
    { src: video3, poster: poster3, title: "Charles Leclerc" },
  ];

  const playVideo = (ref) => ref.current.play();
  const pauseVideo = (ref) => {
    ref.current.pause();
    ref.current.currentTime = 0;
    ref.current.load();
  };

  return (
    <div className="w-full bg-black flex flex-col items-center py-10">
      {/* Heading Section */}
      <h1
        className="font-extrabold text-red-600 text-3xl md:text-4xl text-center tracking-wider"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        🚦 Welcome to the Grid 🌐
      </h1>
      <h2
        className="font-bold text-white text-4xl md:text-5xl text-center mt-3 tracking-wider"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        🚀💥 F1 Built to Break Boundaries 🏁⚙️
      </h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 mt-10 w-full max-w-7xl">
        {videos.map((vid, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-lg"
          >
            <video
              ref={refs[i]}
              src={vid.src}
              muted
              loop
              poster={vid.poster}
              className="w-full h-[500px] sm:h-[550px] md:h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
              onMouseEnter={() => playVideo(refs[i])}
              onMouseLeave={() => pauseVideo(refs[i])}
            />
            {/* Overlay Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p
                className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {vid.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drivers;
