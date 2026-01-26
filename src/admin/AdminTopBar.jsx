
import React from "react";

export default function TopBar({ isOpen, setIsOpen }) {
  return (
    <div className="w-full h-16 bg-[#002B5B] text-white shadow-md">
      <div className="relative h-full px-4 md:px-6">

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDD9qmwVFNH7plyFb7rpL8j-9BVAA-O7Gnpg&s"
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
              Admin Panel
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}





