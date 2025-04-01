import React from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'

const page = () => {
  return (
    <>
    <div className='h-screen w-full bg-green-950 flex flex-col'>
    <div className='h-20 w-full p-5 flex justify-end'>
          <Navbar/>
        </div>
       <div className='w-full h-screen flex justify-around flex-wrap'>
        <Card image="amrit.png" text="Amrit"/>
        <Card image="chai.png" text="Chai"/>
        <Card image="amrit.png" text="Amrit"/>
        <Card image="chai.png" text="Chai"/>
        <Card image="amrit.png" text="Amrit"/>
        <Card image="chai.png" text="Chai"/>
        
        
       </div>
    </div>
    </>
  )
}

export default page