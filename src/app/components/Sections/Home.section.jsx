"use client";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-dvh overflow-hidden w-full p-4 px-8 py-[56px] relative flex">
      
      <div className="z-20 pointer-events-none">
        <div className="absolute z-0 size-full top-0 left-0 mix-blend-multiply">
          {/* <img src="/yes.jpg" alt="" className='size-full absolute top-0 left-0 object-cover opacity-100' /> */}
        </div>
        <motion.div
          whileHover="hover"
          initial="rest"
          animate="to"
          className="absolute text-text   z-10 bottom-0 left-0 mx-8 my-4 flex flex-col text-[10vw]  leading-[10vw] tracking-tighter"
        >
          <SlideLoop>THIS IS RONISH</SlideLoop>
          <SlideLoop>I MAKE WEBSITES</SlideLoop>
        </motion.div>
      </div>
    </div>
  );
};

const SlideLoop = ({ children }) => {
  return (
    <motion.div className="inline-flex overflow-hidden relative">
      {children
        .toString()
        .split("")
        .map((char, index) => (
          <motion.div className="inline relative" key={index + "about-me"}>
            <motion.div
              variants={{
                to: {
                  translateY: "0",
                  scaleY: 1,
                  transition: {
                    delay: index * 0.011,
                    stiffness: 500,
                    damping: 50,
                    type: "spring",
                  },
                },
                rest: {
                  scaleY: 0,
                  translateY: "100%",
                  transition: {
                    delay: 0,
                  },
                },
              }}
              className=""
            >
              {char == " " ? "\u00A0" : char}
            </motion.div>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default Home;
