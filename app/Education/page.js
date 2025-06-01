"use client"
import React from 'react'
import Navbar from '../component/Navbar'
import Landing_3 from '../component/Landing_3'
import Landing_1 from '../component/Landing_1'

const page = () => {
  return (
    <>
    <div className='h-screen w-full bg-green-950 flex flex-col'>
        <div className='h-20 w-full p-5 flex justify-end'>
            <Navbar/>
        </div>
        <div className='flex h-full'>
          <Landing_1/>
          <Landing_3/>
        </div>

    </div>
    
    </>
  )
}

export default page