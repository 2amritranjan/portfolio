import React from 'react'
import Navbar from '../component/Navbar'

const page = () => {
  return (
    <>
    <div className='h-screen w-full bg-green-950 flex flex-col'>
    <div className='h-20 w-full p-5 flex justify-end'>
          <Navbar/>
        </div>
        This is project page
    </div>
    </>
  )
}

export default page