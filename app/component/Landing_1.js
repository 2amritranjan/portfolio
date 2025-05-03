"use client"
import React from 'react'
import { motion } from "framer-motion"

const Landing_1 = () => {
  return (
    <>
    <div className='w-1/3 h-auto m-2 flex flex-col gap-10 justify-center items-center overflow-hidden'>

<motion.div initial={{x:-500}} animate={{x:0}} transition={{delay:1, duration:3}} className='rounded-full border border-black h-52 w-52 bg-amber-200 flex justify-center items-center overflow-hidden'>
  <div className='rounded-full border border-black h-48 w-48 bg-green-950 overflow-hidden'>
    <motion.img initial={{y:-300}} animate={{y:0}} transition={{delay:2, duration:3}} src='amrit.png' alt='image' className='h-full w-full object-cover' />
  </div>
</motion.div>

<div className='text-9xl text-white font-bold text-center caramel-regular'>
  <motion.div initial={{x:1000}} animate={{x:0}} transition={{delay:1, duration:3}}>Amrit Ranjan</motion.div>
</div>
</div>
    </>
  )
}

export default Landing_1