import React, { useRef } from 'react';
import video from "../assets/drover.mp4";
import video1 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

import poster4 from '../assets/LH 44.jpeg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/_ (3).jpeg';

function Drivers() {
   const video1Ref = useRef()
   const video2Ref = useRef()
   const video3Ref = useRef()

  const playVideo = (ref) => {
    ref.current.play();
  };

  const pauseVideo = (ref) => {
    ref.current.pause();
    ref.current.currentTime = 0;
    ref.current.load();
  };

  

  return (
    <div className='relative w-full min-h-screen overflow-auto bg-black'>
      <div className='w-full h-full'>
        <h1 className='font-bold text-red-600 text-[30px] text-center' style={{ fontFamily: "fantasy" }}>
          🚦 Welcome to the Grid 🌐
        </h1>
        <h1 className='font-bold text-white text-[50px] text-center' style={{ fontFamily: "fantasy" }}>
           🚀💥 F1  Built to Break Boundaries 🏁⚙️
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-36 mt-10'>
          <video
            ref={video1Ref}
            src={video}
            muted
            loop
            poster={poster4}
            controls={false}
            onMouseEnter={()=>playVideo(video1Ref)}
            onMouseLeave={() => pauseVideo(video1Ref)}
            className='w-[440px] h-[700px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105 shadow-md'
          />

          <video
            ref={video2Ref}
            src={video1}
            muted
            loop
            poster={poster2}
            controls={false}
            onMouseEnter={() => playVideo(video2Ref)}
            onMouseLeave={() => pauseVideo(video2Ref)}
            className='w-[440px] h-[700px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105 shadow-md'
          />

          <video
            ref={video3Ref}
            src={video3}
            muted
            loop
            poster={poster3}
            controls={false}
            onMouseEnter={() => playVideo(video3Ref)}
            onMouseLeave={() => pauseVideo(video3Ref)}
            className='w-[440px] h-[700px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105 shadow-md'
          />
        </div>
      </div>
    </div>
  );
}

export default Drivers;
