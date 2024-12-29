"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [runEcho, setRunEcho] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter") {
        setRunEcho(true);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-dvh pt-28 pb-4 px-4 flex gap-4">
      {/* <div className="h-full w-[0%] shrink-0 flex items-center justify-center flex-col group">
        
        <img src="/images/bongo.png" className="w-2/3 aspect-square group-hover:scale-125 transition-all duration-500" alt="" />

      </div> */}
      <div className="size-full  text-[1vw] rounded-lg bg-black/20 relative overflow-hidden border-2 border-pink/20 shadow-black hover:shadow-xl">
        <div className=" w-full h-[2.5vw] bg-mantle flex justify-end items-center gap-[1vw] px-[1vw]">
          <div className="absolute left-0 mx-[1vw] text-subtext0">kitty ~</div>
          <div className="size-[1vw] bg-yellow rounded-full"></div>
          <div className="size-[1vw] bg-mauve rounded-full"></div>
          <div className="size-[1vw] bg-red rounded-full"></div>
        </div>
        <div className="flex flex-col p-[0.5vw] font-mono text-[0.8vw] leading-[1vw]">
          <Line>fetch about</Line>
          <div className="h-fit flex mb-[0.5vw]">
            <div>
              <pre>{`                  
              =+++-:**+=+%@*=+                  
             *@@@@@@@@@@@@@@@@##*=.             
           :*@@@@@@@@@@@@@@@@@@@@@@-            
          %@@@@@@@@@@@@@@@@@@@@@@@@@.           
         *@@@@@@@@@@@@@@@@@@@@@@@@@@+           
       .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@.          
       :@@@@@@@@@@%**#@@@@@@@@@@@@@@@-          
        =@@@@%+-=:     :----++=#@@@@:           
        .*@@#..:......    -----=@@#.            
          #@ :-=*%@@%- .@@#%%%%@@%              
          #*  .=-+=-    +%:.=++:.#              
          --            .*-      *              
           .             .::    .#              
           ..        .  -*-:    +*              
                        .=*-   .@+.             
            :     . ... .=*%@+##@@@@%-          
       .-+#%@#   .-:::. ..-@=-@@@@@@@@#+=:.     
      *@@@@@@@#.      .:::=-:#@@@@@@@@@@@@@%*:. 
   :+%@@@@@@@@@@.           @@@@@@@@@@@@@@@@@@@%
:+%@@@@@@@@@@@@@+ .::..:::+@*-@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@+  :===#@@* *%%@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@%:   :-=* +=:@@@@@@@@@@@@@@@@@
`}</pre>
            </div>
            <div className="flex flex-col">
              <div className="border-b border-lavender text-lavender border-dashed w-fit">
                ronish@mainframe
              </div>
              <div className="mt-[1vw] flex flex-col">
                <Entry title="Name" value="Ronish Rohan"></Entry>
                <Entry title="Age" value="20"></Entry>
                <Entry title="Education" value="Pursuing B.Tech CSE"></Entry>
                <Entry title="Location" value="Bengaluru, IN"></Entry>
                <Entry title="Role" value="Frontend Developer"></Entry>
                <Entry
                  title="Skills"
                  value="Next JS, Tailwind CSS, React JS, Framer Motion, GSAP"
                ></Entry>
                <Entry title="Hobbies" value="Graphic Design, 3D Art"></Entry>
                <Entry title="Email" value="ronish.rohan@gmail.com"></Entry>
                <div className="w-full flex h-[3vw] mt-[1vw]">
                  <div className="w-full bg-red"></div>
                  <div className="w-full bg-yellow"></div>
                  <div className="w-full bg-pink"></div>
                  <div className="w-full bg-mauve"></div>
                  <div className="w-full bg-rosewater"></div>
                  <div className="w-full bg-flamingo"></div>
                  <div className="w-full bg-text"></div>
                  <div className="w-full bg-crust"></div>
                </div>
              </div>
            </div>
          </div>
          <Line>
            echo <span className="text-red">"thanks"</span>{" "}
            {!runEcho && (
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
                className="w-[0.1vw] top-0  absolute -right-[0.05vw] bg-text h-full "
              ></motion.div>
            )}
          </Line>
          {runEcho && (
            <>
              <div>thanks</div>
              <Line>
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                  }}
                  className="w-[0.1vw] top-0  absolute -right-[0.05vw] bg-text h-full "
                ></motion.div>
              </Line>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Entry = ({ title, value }) => {
  return (
    <div className="flex gap-[0.5vw]">
      <span className="text-red">{title}:</span>
      <span className="text-rosewater">{value}</span>
    </div>
  );
};

const Line = ({ children }) => {
  return (
    <div className="inline-flex">
      <span className="text-lavender">ronish</span>
      <span className="text-yellow ml-[1vw]">{`~/projects/ >`}</span>
      <div className="text-text ml-[0.6vw] inline relative">{children}</div>
    </div>
  );
};

export default About;
