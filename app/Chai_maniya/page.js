import React from 'react'
import Card from '../component/Card'
import Navbar from '../component/Navbar'

const page = () => {
  return (
    <>
    <div className='h-screen w-full bg-orange-300 flex flex-col bg-[url("/sunflower.webp")] bg-contain backdrop-blur-2xl'>
    <Navbar/>
    <div className='w-full h-screen flex items-center justify-evenly'>
        <Card text="Kulhad Rs:-20" image="kulhad.webp"/>
        <Card text="Tapri Rs:-10" image="tapri.jpg"/>
    </div>
    </div>
    </>
  )
}

export default page