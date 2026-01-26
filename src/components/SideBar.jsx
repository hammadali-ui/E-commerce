import React from 'react'
import { toast } from "sonner";
import { useNavigate,useLocation } from "react-router-dom";
import { Home, User,LogOut,X,Menu,Settings, ProjectorIcon, Users } from "lucide-react";

function SideBar({isOpen,setIsOpen}) {
    const navigate = useNavigate();
    const location = useLocation();
  return (
              <aside className={`bg-[#0B3F71] h-full p-5 shadow-lg transition-all duration-300 flex flex-col
                ${isOpen ? "w-72" : "w-20"}`}>
      
              <div className="flex justify-between items-center mb-10">
                {isOpen && (
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                )}
      
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-gray-300 px-2"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
      
              <nav className="space-y-4 mt-4">
      
                <button onClick={() => navigate("/dashboard")}
                  className={`w-full flex items-center gap-4 font-semibold text-lg  px-3 py-2 rounded-lg transition-colors ${
                    location.pathname ==="/dashboard" ? "bg-[#002B5B] text-white" : "text-blue-100 hover:bg-blue-400 hover:text-white"
                  } `}
                >
                  <Home size={22} />
                  {isOpen && <span>Home</span>}
                </button>
      
                <button onClick={() => navigate("/profile")}
                  className={`w-full flex items-center gap-4 text-lg font-semibold px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === "/profile" ? "bg-[#002B5B] text-white"  : "text-blue-100 hover:text-white hover:bg-blue-400"}`}>
                  <User size={22} />
                  {isOpen && <span>Profile</span>}
                </button>
                <button className='w-full flex items-center gap-4 text-lg font-semibold px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-400 rounded-lg transition-colors'>
                  <ProjectorIcon size={22} />{isOpen && <span>Project</span>}
                  </button>
                  <button className='w-full flex items-center gap-4 text-lg font-semibold px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-400 rounded-lg transition-colors'>
                    <Users size={22}/> {isOpen &&<span>Team</span>}
                  </button>
              </nav>
      
              <div className='mt-auto space-y-4'>

                <button
  onClick={() => {
    toast.success("You are logged out!");
    setTimeout(() => navigate("/login"), 1000); // redirect after toast
  }}
  className="flex items-center gap-4 text-blue-100 font-semibold text-lg hover:text-white px-3 py-2 rounded-lg hover:bg-blue-400 transition-colors w-full"
>
  <LogOut size={22} />
  {isOpen && <span>Logout</span>}
</button>
                <button onClick={() => console.log("Settings clicked")}
                  className="flex items-center gap-4 text-blue-100 font-semibold text-lg hover:text-white px-3 py-2 rounded-lg hover:bg-blue-400 transition-colors w-full">
                  <Settings size={22} />
                  {isOpen && <span>Settings</span>}
                </button>
              </div>
            </aside>
  )
}

export default SideBar


