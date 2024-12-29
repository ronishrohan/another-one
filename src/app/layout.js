"use client"
import React from "react";
import "./globals.css";
import "@fontsource-variable/dm-sans";
import Navbar from "./components/Navbar/Navbar";
import { useAtomValue } from "jotai";
import { theme as themeAtom } from "./store/theme.store";

const layout = ({ children }) => {
  const theme = useAtomValue(themeAtom);
  return (
    <html>
      <body className={`h-dvh ${theme} w-full bg-crust text-text overflow-x-hidden`}>
        
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
};

export default layout;
