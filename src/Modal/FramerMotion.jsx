import React from "react";
import { motion } from "motion/react";

function FramerMotion() {
  return (
    <div className="w-full">
      <motion.div
        className="h-[18vh] w-[9%] bg-red-700 mb-4 border rounded-full border-gray-700"

       
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat:3,
             ease:"anticipate"
        }}
        whileHover={{
            backgroundColor:"black"
        }}
        whileTap={{
            scale:6
        }}
        drag
      ></motion.div>
      <motion.div
        className="h-[18vh] w-[9%] bg-blue-900 rounded-full"
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat:3,
          ease:"anticipate"
        }}
      ></motion.div>
      <motion.h1 className="font-bold text-2xl"
      animate={{
          x: 1000,
          rotate: 360,
        
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat:3,
          ease:"anticipate"
        }}
        
      >
        hello my name is faizan wbu
        </motion.h1>
    </div>
  );
}

export default FramerMotion;
