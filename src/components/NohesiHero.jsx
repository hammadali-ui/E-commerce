import React from "react";
import heroImage from "../images/hero.png";
import Navbar from "./NohesiNav";

const NohesiHero = () => {
  return (
    <body className="bg-black">
      {/* Hero container */}
      <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden flex flex-col justify-start -mt-6">
        
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-md scale-105"
          style={{
            backgroundImage: `url(${heroImage})`,
            zIndex: 0,
          }}
        ></div>

        {/* --- Optional dark overlay for better text contrast --- */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* --- Foreground content (stays sharp) --- */}
        <div className="relative z-10 flex flex-col px-6 sm:px-10 md:px-16 lg:px-24">
          <Navbar />

         
          <h1
            className="mt-10 mb-6 text-[clamp(2rem,5vw,4rem)] leading-[40px] md:leading-[64px] font-[1000] uppercase 
                       text-transparent bg-clip-text max-w-[90%] sm:max-w-[600px] md:max-w-[700px]"
            style={{
              backgroundImage:
              "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF80 50%)",
              fontFamily: "Roboto Flex",
            }}
          >
            Your path to incredible gaming
          </h1>

          
          <h1
            className="uppercase font-[1000] text-[clamp(32px,5vw,48px)] leading-[40px] md:leading-[48px] text-[#6AFF67]
                       max-w-[90%] sm:max-w-[600px] md:max-w-[700px]"
            style={{ fontFamily: "Roboto Flex" }}
          >
            Embark on gaming today!
          </h1>

          
          <div
            className="flex flex-wrap gap-4 items-center mt-10"
            style={{ background: "transparent" }}
          >
            <button
              className="text-white text-[20px] leading-[24px] italic px-6 sm:px-8 py-2 sm:py-3 rounded-[8px] font-[700] text-sm sm:text-base hover:opacity-80 transition"
              style={{ backgroundColor: "#8800F0" }}
            >
              LOG IN
            </button>

            <button
              className="text-white px-6 text-[20px] leading-[24px] italic sm:px-8 py-2 sm:py-3 rounded-[8px] font-[700] text-sm sm:text-base hover:opacity-80 transition border border-white/60 bg-[#0A0A0A]"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default NohesiHero;
