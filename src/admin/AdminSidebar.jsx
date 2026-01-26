import React from 'react';
import { toast } from "sonner";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Box, ShoppingCart, LogOut, X, Menu, Settings, Users, ProjectorIcon } from "lucide-react";

function SideBar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    // { name: "Dashboard", path: "/admin", icon: <Home size={22} /> },
    { name: "Products", path: "/admin/products", icon: <Box size={22} /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingCart size={22} /> },
    // { name: "Detail", path: "/detail/:id", icon: <Users size={22} /> },
  ];

  return (
    <aside
      className={`bg-[#0B3F71] h-full p-5 shadow-lg transition-all duration-300 flex flex-col ${
        isOpen ? "w-45 md:w-72" : "w-20"
      }`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        {isOpen && <h2 className="text-2xl font-bold text-white">MyShop</h2>}

        <button
          onClick={() => {
            if (window.innerWidth >= 768) setIsOpen(!isOpen);
          }}
          className={`text-white px-2 cursor-pointer ${
            window.innerWidth < 768 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-300"
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className='hidden md:flex' />}
        </button>

      </div>


      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-4 font-semibold text-lg px-3 py-2 rounded-lg transition-colors w-full cursor-pointer ${
              location.pathname === item.path
                ? "bg-[#002B5B] text-white"
                : "text-blue-100 hover:bg-blue-400 hover:text-white"
            }`}
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </button>
        ))}
      </nav>

      
      
      <div className="mt-auto space-y-4">
        <button
          onClick={() => {
            toast.success("You are logged out!");
            setTimeout(() => navigate("/admin/login"), 1000);
          }}
          className="flex items-center gap-4 text-blue-100 font-semibold text-lg hover:text-white px-3 py-2 rounded-lg hover:bg-red-400 transition-colors w-full cursor-pointer"
        >
          <LogOut size={22} />
          {isOpen && <span>Logout</span>}
        </button>

      </div>
    </aside>
  );
}

export default SideBar;





