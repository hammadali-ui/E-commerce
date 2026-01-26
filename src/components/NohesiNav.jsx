
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
// <nav
//   className="w-full bg-[#00000036] text-white mt-5 
//              flex flex-col lg:flex-row justify-between items-center 
//              shadow-md border border-[#33333382] rounded-[16px] relative z-50 
//              transition-all duration-300 py-2 px-2"
// >
//   {/* --- Left Section (Logo + Links) --- */}
//   <div className="flex items-center justify-between w-full lg:w-auto gap-3 sm:gap-6 xl:gap-10">
//     {/* Logo */}
//     <div className="text-xl md:text-sm font-bold bg-[#33333382] px-[16px] md:px-[20px] rounded-4xl text-amber-50 h-[40px] flex items-center">
//       <span>NO</span>Hesi
//     </div>

//     {/* --- Desktop Menu --- */}
//     <ul
//       className="hidden lg:flex gap-6 xl:gap-10 text-[13px] xl:text-sm font-semibold mr-4"
//       style={{ fontWeight: 600 }}
//     >
//       {["Merch", "About Us", "News", "Contact"].map((item) => (
//         <li
//           key={item}
//           className="hover:text-[#6AFF67] cursor-pointer transition duration-200"
//         >
//           {item}
//         </li>
//       ))}
//     </ul>

//     {/* --- Mobile Menu Icon --- */}
//     <div
//       className="lg:hidden text-3xl cursor-pointer ml-auto select-none"
//       onClick={() => setIsMenuOpen(!isMenuOpen)}
//     >
//       {isMenuOpen ? "✕" : "☰"}
//     </div>
//   </div>

//   {/* --- Right Section (Desktop Only) --- */}
//   <div className="hidden lg:flex items-center gap-5 xl:gap-8 rounded-lg h-[40px] ">
//     <ul
//       className="flex gap-2 xl:gap-4 text-[12px] xl:text-sm font-semibold uppercase border-2 border-[#33333382] p-[2px] xl:py-5 rounded-4xl h-[32px] items-center"
//     >
//       {["Live", "Subscription", "Server", "Download"].map((item) => (
//         <li
//           key={item}
//           className="hover:text-[#6AFF67] cursor-pointer transition duration-200 px-[10px] xl:px-[12px] rounded-4xl"
//         >
//           {item}
//         </li>
//       ))}
//     </ul>

//     <button
//       className="text-white px-4 xl:px-5 font-semibold hover:opacity-80 transition duration-200 rounded-4xl w-[85px] xl:w-[93px] h-[34px] text-[13px] xl:text-[14px]"
//       style={{ backgroundColor: "#8800F0" }}
//     >
//       Log In
//     </button>
//   </div>

//   {/* --- Mobile Dropdown --- */}
//   {isMenuOpen && (
//     <div
//       className="lg:hidden w-full bg-[#0A0A0A] rounded-[12px] border border-[#222] mt-4 py-4 
//                  flex flex-col items-center gap-4 transition-all duration-300 ease-in-out"
//     >
//       <ul className=" flex flex-col items-center gap-4 text-sm font-semibold">
//         {["Merch", "About Us", "News", "Contact"].map((item) => (
//           <li
//             key={item}
//             className="hover:text-[#6AFF67] cursor-pointer transition duration-200"
//           >
//             {item}
//           </li>
//         ))}
//       </ul>

//       <ul
//         className="flex flex-wrap justify-center gap-3 mt-4 text-xs font-medium uppercase border border-[#FFFFFF08] p-[px] rounded-[8px]"
//         style={{ backgroundColor: "#090808" }}
//       >
//         {["Live", "Subscription", "Server", "Download"].map((item) => (
//           <li
//             key={item}
//             className="hover:text-[#6AFF67] cursor-pointer transition duration-200 border border-[#FFFFFF0D] bg-[#1A1A1A] py-[6px] px-[10px] rounded-[4px]"
//           >
//             {item}
//           </li>
//         ))}
//       </ul>

//       <button
//         className="mt-4 text-white px-5 py-2 rounded-[4px] font-semibold hover:opacity-80 transition duration-200"
//         style={{ backgroundColor: "#8800F0" }}
//       >
//         Log In
//       </button>
//     </div>
//   )}
// </nav>


//   );
// };

// export default Navbar;


import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="w-full bg-[#00000036] text-white mt-5
                 flex items-center justify-between 
                 shadow-md border border-[#33333382] rounded-[16px] relative z-50
                 transition-all duration-300 
                 py-2 px-3 sm:py-3 sm:px-5"
    >

    {/* --- Left Section (Logo + Navigation Links) --- */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Logo */}
  <div className="text-[13px] sm:text-[16px] font-bold bg-[#33333382] px-[10px] sm:px-[16px] rounded-4xl text-amber-50 h-[32px] sm:h-[40px] flex items-center justify-center lg:py-5" > <span className="">NO</span>HESI </div>


        {/* Left Navigation (Desktop only) */}
        <ul
          className="hidden xl:flex gap-6 xl:gap-10 text-[13px] xl:text-sm font-semibold mr-6 lg:mr-2"
          style={{ fontWeight: 600 }}
        >
          {["Merch", "About Us", "News", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-[#6AFF67] cursor-pointer transition duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* --- Right Section (Server + Subscription + Login + Menu + Right-side Links) --- */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Server + Subscription (visible on tablet and desktop only) */}
        <ul className="hidden lg:flex gap-2 text-[13px] lg:text-sm font-semibold items-center">
          {["Server", "Subscription"].map((item) => (
            <li
              key={item}
              className="hover:text-[#6AFF67] cursor-pointer transition duration-200 px-[8px] py-[4px] rounded-2xl"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Right-side Links (Live + Download) */}
       <ul className="hidden xl:flex gap-3 text-[13px] xl:text-sm font-semibold p-[3px] rounded-4xl h-[32px] items-center">
  {/* --- Live with Red Dot --- */}
  <li className="hover:text-[#6AFF67] cursor-pointer transition duration-200 px-[10px] xl:px-[12px] rounded-4xl flex items-center gap-1">
    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
    Live
  </li>

  {/* --- Download --- */}
  <li className="hover:text-[#6AFF67] cursor-pointer transition duration-200 px-[10px] xl:px-[12px] rounded-4xl">
    Download
  </li>
</ul>


        {/* Log In button (visible on all screens) */}
        <button
          className="text-white px-3 sm:px-5 font-bold hover:opacity-80 transition duration-200 
                     rounded-3xl w-[70px] sm:w-[85px] h-[30px] sm:h-[34px] text-[13px] sm:text-[13px] ml-1"
          style={{ backgroundColor: "#8800F0" }}
        >
          Login
        </button>

        {/* Hamburger Menu Icon (mobile only) */}
        <div
          className="xl:hidden text-[10px] sm:text-sm cursor-pointer select-none rounded-full border border-[#33333382] py-2 px-3 sm:py-2 sm:px-3 bg-[#222] flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isMenuOpen && (
        <div
  className="absolute top-[100%] left-0 w-full rounded-xl border-t border-[#222] mt-1 py-2 px-2
             flex flex-col items-center gap-2 transition-all duration-300 ease-in-out
             backdrop-blur-sm bg-[#0a0a0abb]"  
>
  {/* Left nav items in mobile dropdown */}
  <ul
    className="flex flex-col gap-4 p-2.5 text-sm font-semibold"
    style={{ alignSelf: "flex-start" }}
  >
    {["Merch", "About Us", "News", "Contact"].map((item) => (
      <li
        key={item}
        className="hover:text-[#6AFF67] cursor-pointer transition duration-200"
      >
        {item}
      </li>
    ))}
  </ul>

  {/* Right nav items in mobile dropdown (Live + Download only) */}
  <ul
    className="flex flex-col gap-3 mt-0 text-xs font-medium  border border-[#FFFFFF08] 
               rounded-[8px] px-3 py-2 backdrop-blur-xl bg-[#0a0a0abb] w-full" 
    style={{ alignSelf: "flex-start", }}
  >
    {["Server", "Subscription", "Live", "Download"].map((item) => (
      <li
        key={item}
        className="hover:text-[#6AFF67] cursor-pointer transition duration-200 
                   border border-[#FFFFFF0D] bg-[#1a1a1ab0] py-[6px] px-[10px] rounded-[4px] bg-transparent"
      >
        {item}
      </li>
    ))}
  </ul>
</div>

      )}
    </nav>
  );
};

export default Navbar;




