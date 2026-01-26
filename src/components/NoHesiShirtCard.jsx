import React from "react";
import shirt1 from "../images/shirt1.png";
import shirt2 from "../images/shirt2.png";
import shirt3 from "../images/shirt3.png";
import text2 from "../images/text2.png";

const NoHesiShirtCard = () => {
  const shirts = [
    {
      id: 1,
      name: "Maecenas faucibus viverra",
      text: "Nec leo consequat tincidunt nulla scelerisque egestas aliquam malesuada. Pellentesque neque cursus convallis lectus.",
      price: "$25",
      image: shirt1,
    },
    {
      id: 2,
      name: "Maecenas faucibus viverra",
      text: "Nec leo consequat tincidunt nulla scelerisque egestas aliquam malesuada. Pellentesque neque cursus convallis lectus.",
      price: "$45",
      image: shirt2,
    },
    {
      id: 3,
      name: "Maecenas faucibus viverra",
      text: "Nec leo consequat tincidunt nulla scelerisque egestas aliquam malesuada. Pellentesque neque cursus convallis lectus.",
      price: "$35",
      image: shirt3,
    },
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex flex-col justify-center items-center text-center overflow-hidden bg-transparent">
        {/* Blurred background image */}
        <img
          src={text2}
          alt="Header background"
          className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105"
        />

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-4">
          <h1
            className="uppercase text-[#6AFF67] text-center"
            style={{
              fontFamily: "Roboto Flex",
              fontWeight: "1000",
              fontSize: "clamp(28px, 6vw, 48px)",
              lineHeight: "48px",
            }}
          >
            Merch out now
          </h1>

          <button
            className="text-white px-6 sm:px-8 py-3 rounded-[8px] font-[700] hover:opacity-80 transition text-sm sm:text-base leading-[20px] italic"
            style={{ backgroundColor: "#8800F0" }}
          >
            EXPLORE
          </button>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="min-h-screen bg-black flex items-center justify-center py-10 px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1300px]">
          {shirts.map((shirt) => (
            <div
              key={shirt.id}
              className="flex flex-col bg-[#111] rounded-[16px] border border-[#333] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-[260px] sm:h-[300px] object-cover rounded-t-[12px]"
              />

              <div className="flex flex-col flex-grow justify-between p-5 text-left">
                <div>
                  <h2 className="text-white text-[28px] sm:text-[28px] font-[700] mb-2 leading-[28px]">
                    {shirt.name}
                  </h2>
                  <p className="font-['Inter_Tight'] font-normal text-[15px] sm:text-[17px] leading-[24px] text-[#FFFFFFCC] mb-4">
                    {shirt.text}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 mt-3">
                  <p className="font-['Roboto_Flex'] font-[700] text-[28px] sm:text-[32px] leading-[28px] tracking-[-0.02em] uppercase text-white">
                    {shirt.price}
                  </p>

                  <button
                    className="w-full h-[48px] sm:h-[52px] rounded-[8px] border-[2px] border-white text-white font-['Roboto_Flex'] font-[700] leading-[20px] italic text-[14px] sm:text-[16px] px-6 py-2 hover:bg-[#8800F0] hover:border-[#8800F0] transition"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoHesiShirtCard;
