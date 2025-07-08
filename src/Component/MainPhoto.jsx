import React from 'react';
import Body from '../assets/abc.avif';

function MainPhoto() {
  return (
    <>
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <img src={Body} className=" w-full h-full  rounded-all object-cover px-[160px] "  />

      <div className="absolute top-[70%] left-0 w-full flex justify-center items-center">
        <div className="text-center px-4 max-w-3xl text-black">
          <h1
            className="font-extrabold text-[40px] mb-4"
            style={{ fontFamily: 'fantasy' }}
          >
            F1® UNLOCKED
          </h1>
          <p className="text-base sm:text-lg font-light" style={{ fontFamily: 'fantasy' }}>
            Get closer to the ultimate F1 experience. Enjoy insider content,
            unforgettable VIP experiences, exclusive member benefits and
            rewards.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300" style={{ fontFamily: 'fantasy' }}>
            Join Now
          </button>
        </div>
      </div>
    </div>

    </>
  );
}

export default MainPhoto;
