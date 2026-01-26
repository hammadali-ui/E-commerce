import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-blue-100">
     
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1">
        <TopBar />

        <div className="p-6 flex-1 overflow-y-auto">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;
