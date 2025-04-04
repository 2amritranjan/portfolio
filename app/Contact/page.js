import React from 'react'
import Navbar from '../component/Navbar'
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const page = () => {
  return (
    <>
    <div className='h-screen w-full bg-green-950 flex flex-col'>
    <div className='h-20 w-full p-5 flex justify-end'>
          <Navbar/>
        </div>
        <div className='w-full h-screen flex justify-evenly items-center flex-wrap'>
          <a href='https://www.instagram.com/2amritranjan' target='_blank'><IoLogoInstagram size={100} className='hover:text-amber-100 text-white'/></a>
          <a href='https://www.github.com/2amritranjan' target='_blank'><IoLogoGithub size={100} className='hover:text-amber-200 text-white'/></a>
          <a href="https://wa.me/918340397905" target="_blank"><IoLogoWhatsapp size={100} className='hover:text-amber-200 text-white'/></a>
                        <a href='mailto:2amritranjan@gmail.com'><SiGmail size={100} className='hover:text-amber-200 text-white'/></a>
        </div>
    </div>
    </>
  )
}

export default page