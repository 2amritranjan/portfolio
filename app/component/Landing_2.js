import Link from 'next/link';
import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Landing_2 = () => {
  return (
    <>
    <div className='w-2/3 h-auto m-2'>
              
              <div className='text-9xl text-white font-serif font-semibold m-2'>
                MY PORTFOLIO
              </div>
    
              <div className='text-xl text-white font-serif font-semibold m-10'>
              A web developer who turns caffeine into code and bugs into features. Fluent in JavaScript, React, and lots of ctrl + z. I break things just to fix them better. Love clean UI, smart UX, and dark mode. Let’s build something cool (or at least look busy)!
              </div>
              <div className='w-full flex justify-end p-10'>
                <Link href="/GetMeChai"><button className='w-44 h-12 bg-white text-green-950 text-xl font-extralight hover:bg-amber-200'>Explore</button></Link>
              </div>
              <div className='w-full h-auto text-white flex justify-evenly'>
              <a href='https://www.instagram.com/2amritranjan' target='_blank'><IoLogoInstagram size={40} className='hover:text-amber-200'/></a>
              <a href='https://www.github.com/2amritranjan' target='_blank'><IoLogoGithub size={40} className='hover:text-amber-200'/></a>
              <a href="https://wa.me/918340397905" target="_blank"><IoLogoWhatsapp size={40} className='hover:text-amber-200'/></a>
              <a href='mailto:2amritranjan@gmail.com'><SiGmail size={40} className='hover:text-amber-200'/></a>
              </div>
              </div>
    </>
  )
}

export default Landing_2