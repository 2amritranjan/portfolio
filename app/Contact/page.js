"use client"
import React from 'react'
import Navbar from '../component/Navbar'
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react"
import Landing_1 from '../component/Landing_1';

const page = () => {
  return (
    <>
    <div className='h-screen w-full bg-green-950 flex flex-col overflow-hidden'>
    <div className='h-20 w-full p-5 flex justify-end'>
          <Navbar/>
        </div>
        <div className='flex'>
            <Landing_1/>
          <div className='w-2/3 h-screen flex justify-evenly items-center flex-wrap'>
          <motion.a initial={{y:1000}} animate={{y:0}} transition={{delay:1, duration:3}} href='https://www.instagram.com/2amritranjan' target='_blank'><IoLogoInstagram size={100} className='hover:text-amber-100 hover:scale-110 text-white'/></motion.a>
          <motion.a initial={{x:-1000}} animate={{x:0}} transition={{delay:1, duration:3}} href='https://www.github.com/2amritranjan' target='_blank'><IoLogoGithub size={100} className='hover:text-amber-200 hover:scale-110 text-white'/></motion.a>
          <motion.a initial={{y:1000}} animate={{y:0}} transition={{delay:1, duration:3}} href="https://wa.me/918340397905" target="_blank"><IoLogoWhatsapp size={100} className='hover:text-amber-200 hover:scale-110 text-white'/></motion.a>
          <motion.a initial={{x:-1500}} animate={{x:0}} transition={{delay:1, duration:3}} href='mailto:2amritranjan@gmail.com'><SiGmail size={100} className='hover:text-amber-200 hover:scale-110 text-white'/></motion.a>
        </div>
        </div>
    </div>
    </>
  )
}

export default page