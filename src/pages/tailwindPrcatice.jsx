import React from 'react'

const Prcatice = () => {
  return (


    <>
    <body className='bg-slate-800 grid place-content-center h-screen'>
       <h1 className='text-white text-4xl m-4'>Hammad</h1>  
    <div className='p-6 max-w-sm mx-auto bg-amber-50 rounded-2xl shadow-lg flex items-center space-x-4'>
        <div>
        <div className=''>
            <div>
                <img className='h-12 w-12' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAjVBMVEX+/v4AAAD///8REiQAAA2IiInn5+e3t7cEBATU1NTMzMz6+vrw8PDk5OTHx8cgICBiYmJ2dnY3NzfAwMCVlZUbGxupqalQUFA9PT1qampWVlYrKyucnJxbW1twcHDe3t5JSUkSEhKAgIAAABsAABZJSVMiIzAYGSc+Pkk3Nzxyc3hQUFhaW2B5eoJoaHCfRv10AAAH60lEQVR4nO2aa3eiSBCGoWYAkZtcxYAImMxmM8n8/5+3VX2BBo1OTlqTPYf3w4xRpB+769q0YSxatGjRokWLFi1atGjRokX/UwHTV1MMEjge6pugEYO9durMapomtrLaWdtfy0WDh9a2zE1Febm11sZXcQH4YazARFE3/hWH/hdgAXh1Kwh2deq6B5TrhvVOvNnW3p2x0JBqNnTZOz7M5Ds9x63te2IBFCWNug0DSTL5FG3/gSEXd6MCcGkmotiWQDIYqFx+X9EiuvfBwmla4XCNy8JBWmd9HMd9nxWur4IBHHq8bHWXyQJvQzOwxrlI+1yNBqs8sVxfxXK3+PbGuzkVBDSQ5UHIludEZeYO04UempHlBTemgoCCUWikbXcOiQWsrWtICoA1LnV3WypwI1w6O3x4j0gErsOwiBDgtZF7QyoI0IbKwLqMRJ5pjVQerndu34wKbDSjXRhdZSLbWo9UjWlWt6IC44GyR36diPTgjVQYafdkZ3rBeGjEWJDsruPgvDSFpyYeb48p2phH/s8RHWImZFolf4GU905gB6rsEH1wx27SaLJ5MJq/WzGpbvX+Z9pCKfgfg7qkg74FxCDQ2xflOyuz8MVrFjO6jmNYvj2+HeuzdbDRfwK4KAzdjnhZMJxGhrNU1lmdWemM7VCgoV50HQ7FXqWcxQ1yCcWvwNq51hkUAMabX4XiOSgH6NmLB8G0xvnztULZ5hgOT1ZuBrVhLDXw5J3zGMArnou/68NQzD4KfnvsD6Y6B0U5GKiOz8QvcejdWGPFB/7WxLRXsdlH+4omYosyh9rjtLJc6YmJYkV9qTEFQoi/GO3XYlDeZhZ7zkEVgt8RE5VROpCX6IFCk029B7NjoY8Qr0KxCQK/4aYNNnliG6EL64PCG/qACWzLbAJ2V6EaMUGiMODf2GATpM2oyPcwStGdmfvAIb8GJd1MMLnsuj3mUG01KHkRDggBhgVu6/UVqO0kIEkrTIrBGTVAxWLgTMRk8KrLUNZkaB4OKMhfywsfYKIaje4FdiIt2LkMNakFADpx4SERU60BKijNPR8PWXqG5zVVIhWdQCXTicok/SE2K021C/VV/RACO5c7u1K2sI9UqEL6Hvv3MKy1W4uva4Bam8MwGEFbPvSF3JcHYl7VXMigHG3pj0hkYKbmITx3WwVqv+N25yW0VCIccKjxTp+GcuStwKOw0J6zVbV0caQBUgdDvehgU2utUDxoGpZP4aEYNjAUuePyiRxskReqflrZbjd8WRuUXyYuhQUxVWk4al0PUOI/H+uCLXhKZ9P6t4DCUj13C5P7IkBrTiVXhkMxW1qrsb8x1trqhMGmmHN3TmXmbKMA3Pw8FP8W285O1I2HjOoLXVDyVmwjCPOf2BkQ9eh5KFbVz5SOLvN5KJyRTIEyV3I5vQtQ6xOm3KamaK0JClPWjkMNsXmojN+FOt3EagHf1LV/Bv4Dz2ZEJ8WrBX/7DtTsE/Ex7M1WU5UO0PDigHm50IqlkukiqVDuCRNOLujc4Mh4xQieEgRitfM8hcpOoCygCrbXVuS5spHZK4OIyrg7D3XClGN0LzS2ozTtfHtQtV6+EOpbIxQcTqBiXuTr2+nHGarY+k2aK97a+dE5qFPfs4ESQqmxxXI4wnT3LPdmYWGAIn+dCb1V3kUXVFCZLWviJo7OI+oIMEJh4p1qS08kd2akbyPPYC0yW79JtIxmDfMIVc+Y6Mvke43Oh0cUj3YwJhqhDa8WNidQ5YyJrX2vLfGNw1BpQEugilcLdjeFOtm4rXHtqMSo9D77ozo9JqtKJ6PtJ2FhgJqt3gZEJ6vRzNk43o51DADTp3wiLCQqFHhk+uNmes9S1MHU1oiOVGjOrQez3tg0DSUsSCgqJqrBJ1lvQ7lYs0WxoWIWA9iUKeKVMQ8VEooQexk+a757hCu6187E9gpXZOvTDMLrI0hXAxQYlCEDzh45nOmQU/LTDsVsnLYNZimEWzFVNxKKfK+2me1tbNEvVtqtXEBRoEF3m9dvIQ8LI1TBmin8u3VES0+PIZvbHAUAf8939Nj++KCWh4VMdhfUEqdIVhbiOAD7NaVuzxuo6BENOji3oEG8MpYdMrnnA5ZOhQFy/wF5de0AnaMiI6fCaJICO3V/CrzEXNFZkvFwAtngTR+3Uwja+TOqWIWypvua4OPa5Zr6qveoaK5Ke0pFG2ECCoJIfSwkvOKW88SGsWkUNJhQyTfkk/x5nxFPClBw0Cfa29nTMBD5oBnbcFAiQyqhXJmkGRIt3Wz7+lZURk0hIfOhHoqryBNQCYv6AomekK7q2x8K4sOFNEll4QVDHqw5lCP6QdoILeiiNrzfWTOjIIuq+sDdcNOKAopT2EF37GSX52dUzVS15kMbl6nAzlhY3zg1PxUYo1uGrI4Dzy3YDHbZXQ8Kcix+6qUqt1uaLTQwtLUkLHYtM7X8vmcXBywjjZUdD/XcRhI79z7lqWDZoXVy/KWyUtv4IiSORX7mFtaGLWXeWIXraT398xkyj227br4FzyC+/XmP2P0RUWdgfTMm2uTUeehAk8C5SWewaNGiRYsWLVq0aNGiRYsWLVq0aNH9ZX1DGT+/oYwf31DnoB6PR/Hq+ON45vObi6COT7/+ef55PJpPx8fH489/315+P5nm46P5/Gq+Pn0BFof6/evt7en15e3P69vTn9pqX5w/zutr+mJlz893g3ocRvoP08B3Dj7PocsAAAAASUVORK5CYII=" alt="" srcset="" />
            </div>
        </div>
    </div>
    <div>
        <div className='text-2xl font-medium'>
            tailwind css 
            <p className='text-slate-500 text-base'>by hammad </p>
        </div>
    </div>
    </div>
    --------------------

    <button className='bg-sky-500 text-white mt-2 text-base p-2 rounded-lg hover:bg-white hover:text-black '>Buy Now</button >   
    <div className="text-center my-4">
        <p className='text-white md:text-green-600 sm:text-red-500'>Lorem, ipsum dolor.</p>
    </div>

    --------------------

<div className="mt-6">
    <div className='max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-xl'>
        <div className='md:flex'>
            <div><img className='h-48 w-full object-cover md:h-full md:w-48'  src="https://images.pexels.com/photos/10630987/pexels-photo-10630987.jpeg" /></div>
            <div className='p-8'>
                <div className='uppercase text-sm text-indigo-500 tracking-tight'>An Awesome Card</div>
                <a className='block mt-2 mb-1 text-lg font-medium text-black hover:text-pink-300' href="#">tailwind css is an <span className='bg-amber-400 p-[3px]'>amazing</span> framework of css</a>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>hash</p>
            </div>
        </div>
    </div>
</div >
    </body>
    
    </>
  )
}

export default Prcatice