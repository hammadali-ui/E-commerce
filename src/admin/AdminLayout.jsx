

import React, { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./AdminTopBar";
import SideBar from "./AdminSidebar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setIsOpen(false); 
    } else {
      setIsMobile(false);
      setIsOpen(true); 
    }
  };

  handleResize(); // run on mount
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="flex h-screen bg-blue-100">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1">
        <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="p-6 flex-1 overflow-auto">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;


