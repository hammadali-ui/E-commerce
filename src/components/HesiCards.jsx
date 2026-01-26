import React from "react";

const HesiCards = () => {
  const cardData = [
    {
      id: 1,
      icon: "H",
      title: "Volutpat scelerisque cursus",
      description:
        "Malesuada sagittis risus ut ut. Lacus non nullam eleifend bibendum ultrices in. Sapien duis pulvinar lectus a ultrices elementum odio scelerisque malesuada.",
      color: "#6AFF67",
    },
    {
      id: 2,
      icon: "H",
      title: "Ac in interdum arcu",
      description:
        "Massa sapien aenean in rhoncus. Accumsan integer justo id pulvinar sed. Pellentesque pellentesque faucibus lorem eu. A tellus blandit lorem convallis. Maecenas est adipiscing in.",
      color: "#FDA451",
    },
    {
      id: 3,
      icon: "H",
      title: "Nec porta diam sit enim. Tincidunt",
      description:
        "Auctor diam nullam augue nisi. Habitasse viverra facilisi leo mauris nunc. Quis turpis nunc vel augue elementum. Iaculis enim eleifend rhoncus consequat in diam dui et eu. Tincidunt ac id ut.",
      color: "#7E9AFF",
    },
  ];

  return (
    <div className="bg-black text-white py-14 w-full">
      {/* --- Header Section --- */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 px-0">
        {/* Left Side: Heading */}
        <h1
          className="uppercase font-bold 
                     text-[clamp(2rem,4vw,3.75rem)] leading-[56px] 
                     bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent
                     w-full lg:pl-[36px] ml-2 "
          style={{ fontFamily: "Roboto Flex" }}
        >
          No Hesi is more than community.
        </h1>

        {/* Right Side: Button */}
        <div className="flex lg:justify-end justify-center w-full lg:pr-[36px] ">
          <button
            className="text-white w-[180px] sm:w-[200px] h-[48px] sm:h-[52px] 
                       rounded-[8px] px-[24px] py-[14px] font-[700]
                       hover:opacity-80 transition text-sm sm:text-base mr-13 leading-[20px] italic"
            style={{
              backgroundColor: "#0A0A0A",
              border: "2px solid rgba(255, 255, 255, 0.6)",

            }}
          >
            READ ABOUT US
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-hidden px-4 sm:px-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 justify-items-center px-0 ">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="rounded-[10px] p-6 sm:p-8 w-full max-w-[420px] min-h-[380px]
                       transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg "
            style={{
              border: "1px solid #FFFFFF1A",
              boxShadow: `0 0 10px 1px ${card.color}33`,
              backgroundColor: "rgba(10,10,10,0.3)",
            }}
          >
            
            <div
              className="w-[64px] h-[64px] rounded-[16px] flex items-center justify-center mb-5"
              style={{ backgroundColor: `${card.color}33` }}
            >
              <h1
                style={{
                  color: card.color,
                  fontSize: "32px",
                  fontFamily: "Roboto Flex",
                  fontWeight: 900,
                  margin: 0,
                }}
              >
                {card.icon}
              </h1>
            </div>

            
            <h3
              className="uppercase leading-[40px] font-[1000] mb-6"
              style={{
                fontFamily: "Roboto Flex",
                fontSize: "clamp(24px, 3vw, 36px)",
                color: card.color,
              }}
            >
              {card.title}
            </h3>

            
            <p
              className="text-[#FFFFFFE5] leading-[20px] tracking-[0%]"
              style={{
                fontFamily: "Inter Tight",
                fontWeight: 400,
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HesiCards;
