import React, { useState } from 'react'

function Navp() {
const [toggle,setToggle]=useState(true);

const openMenu=()=>{
  let menu=!toggle;
  setToggle(menu);
}

  return (
  <body className='text-white bg-[radial-gradient(circle_at_15%_85%,rgba(75,0,130,0.7)_0%,transparent_50%),radial-gradient(circle_at_85%_15%,rgba(139,37,99,0.8)_0%,transparent_50%),radial-gradient(circle_at_45%_60%,rgba(128,0,128,0.6)_0%,transparent_50%),radial-gradient(circle_at_70%_40%,rgba(34,139,34,0.4)_0%,transparent_50%),linear-gradient(135deg,#0a0a0a_0%,#2d1b3d_50%,#000000_100%)]'>
    

    <nav className='flex justify-between items-center w-[80%] mx-auto my-[2%] py-[10px] px-[10px] rounded-[20px] relative shadow-[0_0_10px_rgba(0,255,255,0.5)] bg-[radial-gradient(circle_at_15%_85%,rgba(75,0,130,0.7)_0%,transparent_50%),radial-gradient(circle_at_85%_15%,rgba(139,37,99,0.8)_0%,transparent_50%),radial-gradient(circle_at_45%_60%,rgba(128,0,128,0.6)_0%,transparent_50%),radial-gradient(circle_at_70%_40%,rgba(34,139,34,0.4)_0%,transparent_50%),linear-gradient(135deg,#0a0a0a_0%,#2d1b3d_50%,#000000_100%)]'>

    <section className="flex items-center space-x-3">
      <img className='w-[40px]' src="https://png.pngtree.com/png-vector/20211123/ourmid/pngtree-atomic-chemistry-icon-png-image_4039277.png" alt="icon"/>
      <h1 className='text-pink-500 font-bold text-xl lg:text-4xl'>NEURALGLASS</h1>
    </section>

    <section className='hidden  lg:flex space-x-6 font-semibold'>
      <a className='hover:text-pink-400 transition' href="#Neural">Neural</a>
      <a className='hover:text-pink-400 transition' href="#Matrix">Matrix</a>
      <a className='hover:text-pink-400 transition' href="#Evalution">Evalution</a>
      <a className='hover:text-pink-400 transition' href="#Connect">Connect</a>
      <a className='hover:text-pink-400 transition' href="#External">External</a>
    </section>
    

    <div className='block text-white lg:hidden text-2xl cursor-pointer' id="menu-icon">
      <a  id="menu-icon" className='text-4xl' href="#" onClick={openMenu}>&#8801;</a>
      {/* <i class="fa-solid fa-bars"></i> */}
    </div>

    

  </nav>

  {toggle===true?<section
      id="mobile-menu"
      className="flex-col absolute top-full right-0 w-full bg-pink-500 text-center py-5 rounded-b-2xl space-y-4 font-semibold lg:hidden"
    >
      <a href="#Neural" className="hover:text-pink-400 transition block">Neural</a>
      <a href="#Matrix" className="hover:text-pink-400 transition block">Matrix</a>
      <a href="#Evalution" className="hover:text-pink-400 transition block">Evalution</a>
      <a href="#Connect" className="hover:text-pink-400 transition block">Connect</a>
      <a href="#External" className="hover:text-pink-400 transition block">External</a>
    </section>:""}
  </body>
  )
}

export default Navp
