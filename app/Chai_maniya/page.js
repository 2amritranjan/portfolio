import React from 'react'
import Card from '../component/Card'
import Navbar2 from '../component/Navbar2'

const page = () => {
  return (
    <>
    <div className='bg-orange-300 w-full h-screen flex flex-col'>
    <Navbar2/>
    <div className='w-full h-screen flex items-center justify-evenly'>
        <Card text="Kulhad Rs:-20" image="kulhad.webp"/>
        <Card text="Tapri Rs:-10" image="tapri.jpg"/>
    </div>
    </div>
    </>
  )
}

export default page