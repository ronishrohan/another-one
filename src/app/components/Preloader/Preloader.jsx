"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const blurs = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => {
      return Math.random() * 10 + 5;
    });
  });
  return (
    <>
      <motion.div
        initial={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 100% 0, 0 100%)",
        }}
        animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 0, 0 0)"
        }}
        className="fixed h-dvh w-full z-[100] flex bg-crust brightness-90 "
      ></motion.div>
    </>
  );
};

export default Preloader;
