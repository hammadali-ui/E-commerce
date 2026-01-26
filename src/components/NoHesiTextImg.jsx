import React from "react";
import text0 from "../images/text0.png"; 

const NoHesiTextImg = () => {
  return (
    <div
      className="flex justify-center items-center bg-black min-h-[80vh] sm:min-h-[90vh] md:min-h-screen px-4"
      style={{ marginTop: "-60px", marginBottom: "-60px" }}
    >
      <div
        className="flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat w-full max-w-[756px]"
        style={{
          backgroundImage: `url(${text0})`,
          aspectRatio: "756 / 550", // keeps correct proportions
        }}
      >
        <h1
          className="uppercase font-[1000] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[38px] sm:leading-[50px] md:leading-[60px] lg:leading-[64px] max-w-[90%] sm:max-w-[600px]
          bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent font-[Roboto Flex]"
        >
          We are the best in the world
        </h1>

        <p
          className="font-['Inter_Tight'] font-normal text-[14px] sm:text-[16px] md:text-[17px] leading-[22px] sm:leading-[24px] tracking-[0px] text-center text-white max-w-[90%] sm:max-w-[440px] md:max-w-[700px] mt-4 sm:mt-6"
        >
          Tortor enim lacus eget duis. Eget id habitant adipiscing cursus blandit enim ultrices et.
          Vel viverra sem amet sit a venenatis at. Nulla feugiat tellus facilisis ultricies commodo
          lectus morbi sit. Quam.
        </p>
      </div>
    </div>
  );
};

export default NoHesiTextImg;
