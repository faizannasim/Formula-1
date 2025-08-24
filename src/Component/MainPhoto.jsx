import React from 'react';
import Body from '../assets/abc.avif';

function MainPhoto() {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-black">
      {/* Main Image */}
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={Body}
          alt="F1 Main"
          className="w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] object-cover rounded-2xl"
        />

        {/* Text Overlay at Bottom */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 text-center w-full max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-500 mb-2"
            style={{ fontFamily: 'fantasy', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}
          >
            F1® UNLOCKED
          </h1>
          <p
            className="text-black text-base sm:text-lg md:text-xl mb-4"
            style={{ fontFamily: 'fantasy', lineHeight: '1.6' }}
          >
            Get closer to the ultimate F1 experience. Enjoy insider content,
            unforgettable VIP experiences, exclusive member benefits, and rewards.
          </p>
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 font-bold text-base sm:text-lg md:text-xl"
            style={{ fontFamily: 'fantasy' }}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPhoto;
