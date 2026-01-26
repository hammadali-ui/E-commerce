import React from 'react'

function Tailwindp1() {
  return (
    <body className='bg-slate-950'>
            {/* Navbar start */}
        <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center'>
            <div className='text-2xl text-indigo-700 font-bold'>PW Skills</div>
            <ul className=' hidden md:flex font-semibold'>
                <li  className='mx-[10px] cursor-pointer '>Home</li>
                <li className='mx-[10px] cursor-pointer '>About US</li>
                <li className='mx-[10px] cursor-pointer '>Contact US</li>
            </ul>
            <div className='hidden md:block bg-indigo-700 px-2 py-2 rounded font-bold cursor-pointer'>Login/signup</div>
            <div className='md:hidden'>
                <a className='text-4xl' href="#">&#8801;</a>
            </div>
        </nav>
        {/* Navbar End */}

        <div className='w-36 h-1 border-b-4 bg-yellow-500'></div>

    </body>
  )
}

export default Tailwindp1
