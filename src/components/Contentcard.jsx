import React from 'react'

function Contentcard() {
  return (
    
    <body className='text-white bg-[radial-gradient(circle_at_15%_85%,rgba(75,0,130,0.7)_0%,transparent_50%),radial-gradient(circle_at_85%_15%,rgba(139,37,99,0.8)_0%,transparent_50%),radial-gradient(circle_at_45%_60%,rgba(128,0,128,0.6)_0%,transparent_50%),radial-gradient(circle_at_70%_40%,rgba(34,139,34,0.4)_0%,transparent_50%),linear-gradient(135deg,#0a0a0a_0%,#2d1b3d_50%,#000000_100%)]'>
        <div class="text-center max-w-3xl mx-auto mt-16 px-4">
            <p class="text-purple-300 tracking-[0.4em] uppercase text-sm">Welcome to the Future</p>
            <h2 class="text-pink-400 font-extrabold leading-tight text-[clamp(2.2rem,6vw,4rem)] mt-4">Neural Interface</h2>
            <p class="text-grey-300 text-lg leading-relaxed mt-4">
            Experience the convergence of consciousness and technology through
            quantum-enhanced glassmorphism interfaces. Step into a reality where
            digital dreams become tangible experiences, transcending the boundaries
            between mind and machine.</p>
        </div>

         <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 mb-24 lg:mb-6 md:mb-6 px-4 h-30">

            <div class="bg-[linear-gradient(135deg,rgba(0,255,255,0.12),rgba(255,0,128,0.12))]  rounded-xl py-10 px-6 text-center">
            <h4 class="text-2xl font-bold">99.9%</h4>
            <p class="text-sm text-gray-300">NEURAL SYNC RATE</p>
            </div>
            <div className='bg-[linear-gradient(135deg,rgba(0,255,255,0.12),rgba(255,0,128,0.12))] rounded-xl py-10 px-4 text-center'>
            <h4 className='text-2xl font-bold'>INFINITY</h4>
            <p className='text-sm text-gray-300'>PROCESSING POWER</p>
            </div>
            <div className='bg-[linear-gradient(135deg,rgba(0,255,255,0.12),rgba(255,0,128,0.12))] rounded-xl py-10 px-6 text-center'>
            <h4 className='text-2xl font-bold'>0.001</h4>
            <p className='text-sm text-gray-300'>LATENCY</p>
            </div>
            <div className='bg-[linear-gradient(135deg,rgba(0,255,255,0.12),rgba(255,0,128,0.12))] rounded-xl py-10 px-6 text-center'>
            <h4 className='text-2xl font-bold'>24/7</h4>
            <p className='text-sm text-gray-300'>NEURAL ACCESS</p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
       

        <div class=" flex flex-wrap justify-center gap-6 mt-12 md:mt-4  lg:mt-4">
            <button className="bg-[linear-gradient(135deg,#e0a3ff,#ff69b4)] text-black font-semibold py-3 px-8 rounded-full hover:opacity-90 transition">INITIALIZE NEURAL LINK</button>
            <button className="border-2 border-purple-300 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-400 transition">EXPLORE MATRIX</button>
        </div>

    </body>
  )
}

export default Contentcard
