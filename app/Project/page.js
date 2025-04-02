import React from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='h-screen w-full bg-green-950 flex flex-col'>
    <div className='h-20 w-full p-5 flex justify-end'>
          <Navbar/>
        </div>
       <div className='w-full h-screen flex justify-evenly items-center flex-wrap'>
        <Link href="https://2amritranjan.github.io/Aarambh-With-Amrit-/"><Card image="p1.jpg" text="Aarambh"/></Link>
        <Link href="https://2amritranjan.github.io/BookingAt0/"><Card image="p2.webp" text="Booking@0km"/></Link>
        <Link href="https://2amritranjan.github.io/bg-changer/"><Card image="p3.GIF" text="BgChanger"/></Link>
        <Link href="https://2amritranjan.github.io/Calculator-Project-2-/"><Card image="p4.webp" text="Calculator"/></Link>
        <Link href="https://password-generator-psi-dun-29.vercel.app/"><Card image="p5.PNG" text="Pass_Generator"/></Link>
        
        
       </div>
    </div>
    </>
  )
}

export default page