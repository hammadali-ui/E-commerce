import React from "react";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";

const NoHesiCards2 = () => {
  const cards = [
    {
      id: 1,
      flag: "F",
      title: "HIGHFORCE",
      text: "Heavy traffic",
      numbers: "31/32",
      text1: "Shutoko Revival Project 0.9.2",
      image: c1,
    },
    {
      id: 2,
      flag: "F",
      title: "SRP",
      text: "Heavy traffic",
      numbers: "31/32",
      text1: "Shutoko Revival Project 0.9.2",
      image: c2,
    },
    {
      id: 3,
      flag: "F",
      title: "Fames enim condimentum",
      text: "Heavy traffic",
      numbers: "31/32",
      text1: "Shutoko Revival Project 0.9.2",
      image: c3,
    },
    {
      id: 4,
      flag: "F",
      title: "Quam mattis turpis",
      text: "Heavy traffic",
      numbers: "31/32",
      text1: "Shutoko Revival Project 0.9.2",
      image: c4,
    },
  ];

  return (
    <div className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-20 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <h1
          className="text-center md:text-left font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent
                     text-[clamp(2rem,4vw,3.75rem)] leading-[56px] max-w-[600px] ml-0 md:ml-9"
          style={{ fontFamily: "Inter" }}
        >
          Popular servers
        </h1>

        <button
          className="text-white w-[140px] sm:w-[151px] h-[48px] sm:h-[52px] rounded-[8px]
                     px-[24px] py-[12px] font-[700] text-sm sm:text-base leading-[20px]
                     hover:opacity-80 transition mr-9"
          style={{
            backgroundColor: "#0A0A0A",
            border: "2px solid rgba(255, 255, 255, 0.6)",
          }}
        >
          SHOW ALL
        </button>
      </div>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                   gap-8 justify-items-center"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-[12px] w-full max-w-[320px] h-[360px] flex flex-col justify-end relative 
                       overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="bg-black/70 p-4 sm:p-4 z-10">
              <p className="text-[13px] sm:text-[14px] opacity-90 mt-0 mb-4">{card.flag}</p>
              <h3 className="text-[28px] sm:text-[28px] font-[700] opacity-100 leading-[28px]">
                {card.title}
              </h3>
              <p className="text-[13px] sm:text-[17px] opacity-90 mb-10 font-[600] leading-[28px]">
                {card.text}
              </p>
              <p className="text-[17px] sm:text-[17px] opacity-90 font-[600] leading-[28px]">{card.numbers}</p>
              <p className="text-[16px] sm:text-[16px] opacity-80 font-[500] leading-[16px]">{card.text1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoHesiCards2;
