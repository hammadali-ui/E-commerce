import React from 'react'

function TopBar() {
  return (
    <div>
          <div className="w-full h-16 bg-[#002B5B] text-white flex items-center justify-center px-6 py-10 shadow-md">
      <div className="flex items-center gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDD9qmwVFNH7plyFb7rpL8j-9BVAA-O7Gnpg&s"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-2xl font-bold">My Dashboard</h1>
      </div>
    </div>
    </div>
  )
}

export default TopBar
