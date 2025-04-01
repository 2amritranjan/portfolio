import React from 'react'
import Navbar from '../component/Navbar'

const page = () => {
  return (
    <>
    <div className='h-screen w-full bg-orange-300 flex flex-col bg-[url("/sunflower.webp")] bg-contain'>
        <div className='h-20 w-full p-5 flex justify-end gap-10'>
          <Navbar color='black'/><h1 className='caramel-regular text-black font-mono text-2xl hover:text-amber-200'>CHAI_MANIYA</h1>
        </div>

        <div className='flex'>
        <div className='w-1/3 h-auto m-2 mt-48'>
          
            <img src='chai.png' alt='image here' className='h-72 w-72'></img>
            <h1 className='text-9xl text-black caramel-regular ml-10'>Chai!!!</h1>
          
        </div>
        <div className='w-2/3 h-auto m-2'>
        
        <div className='flex flex-col p-20'>
                <h1 className='font-light text-7xl text-center'>GetMeA</h1>
                <h2 className='font-semibold text-center caramel-regular text-9xl'>TapriKiChai</h2>

                <button 
                className='h-15 w-52 text-2xl font-light text-black bg-white rounded mt-44 ml-80 hover:bg-orange-300 hover:border-white hover:border-2'>Explore Chai</button>
            </div>

        </div>
            
    </div>

        
    </div>
    </>
  )
}

export default page