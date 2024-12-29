"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { Moon } from "@phosphor-icons/react";
import { useAtom, useSetAtom } from "jotai";
import { theme as themeAtom } from "@/app/store/theme.store";

const Navbar = () => {
  const setTheme = useSetAtom(themeAtom);
  function handleToggleTheme() {
    setTheme((prev) => (prev === "mocha" ? "latte" : "mocha"));
  }
  return (
    <div className="h-20 py-4 w-full fixed flex items-center top-0 z-50">
      <LogoText></LogoText>
      <div className="ml-auto h-full mr-8 flex items-center gap-2">
        <div className="flex h-full max-w-[40vw] gap-4 mx-2">
          <NavbarLink>ABOUT</NavbarLink>
          <NavbarLink>SKILLS</NavbarLink>
          <NavbarLink>WORKS</NavbarLink>
        </div>
        <NavbarButton>LET'S TALK</NavbarButton>
        {/* <NavbarButton onClick={handleToggleTheme}>
          <Moon weight="fill"></Moon>
        </NavbarButton> */}
      </div>
    </div>
  );
};

const LogoText = () => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className="mx-8 leading-[2vw] overflow-hidden cursor-pointer select-none text-2xl tracking-tighter font-medium text-yellow flex items-center justify-center"
    >
      <motion.div variants={{
        hover: {
          scaleY: 0,
          y: "-80%",
        },
        rest: {
          scaleY: 1,
          y: "0%",
        },
      }}>RONISH</motion.div>
      <motion.div
        variants={{
          hover: {
            scaleY: 1,
            y: 0,
          },
          rest: {
            scaleY: 0,
            y: "100%",
          },
        }}
        className="absolute text-pink border-b-2 border-pink pointer-events-none"
      >
        RONISH
      </motion.div>
    </motion.div>
  );
};

const NavbarLink = ({ children }) => {
  return (
    <motion.a
      whileHover="hover"
      whileTap="click"
      initial="rest"
      variants={{
        hover: {
          fontWeight: 900,
        },
        
        
      }}
      className="text-text h-full active:bg-pink active:text-crust  select-none overflow-hidden hover:text-pink border border-transparent px-4 rounded-md hover:border-pink  cursor-pointer flex items-center"
    >
      {children}
    </motion.a>
  );
};

const buttonVariants = {
  rest: {},
  hovered: {},
};

const NavbarButton = ({ children, onClick }) => {
  const button = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function updateMouse(e) {
      setMouse({
        x:
          e.clientX -
          button.current.offsetLeft -
          button.current.offsetWidth / 2,
        y:
          e.clientY -
          button.current.offsetTop -
          button.current.offsetHeight / 2,
      });
      console.log(
        e.clientX - button.current.offsetLeft,
        e.clientY - button.current.offsetTop
      );
    }
    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);
  return (
    <motion.button
      onClick={onClick}
      ref={button}
      whileHover="hovered"
      initial="rest"
      className="rounded-md h-full hover:bg-pink  px-4 py-2 bg-yellow transition-colors text-crust relative border border-transparent flex items-center justify-center hover:border-pink overflow-hidden"
    >
      <motion.div
        variants={{
          rest: { y: 0 },
          hovered: { y: mouse.y / 5, x: mouse.x / 5 },
        }}
        transition={{ duration: 0.3, ease: "circOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          rest: { height: "0%", width: "50%" },
          hovered: { height: "100%", width: "100%" },
        }}
        animate={{
          // left: mouse.x,
          top: mouse.y / 4,
        }}
        transition={{ duration: 0.15, ease: "circOut" }}
        className="bg-crust font-medium size-full  absolute  rounded-md text-pink flex items-center justify-center overflow-hidden"
      >
        <motion.div
          animate={{ y: mouse.y / 5, x: mouse.x / 10 }}
          transition={{ duration: 0.15, ease: "circOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default Navbar;
