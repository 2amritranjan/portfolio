"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'


const Navbar = ({ color = "white" }) => {
  return (
    <>
      <motion.ul initial={{x:-1000}} animate={{x:0}} transition={{delay:1, duration:3}} className={`h-16 w-full text-2xl caramel-regular text-${color} font-mono flex gap-10 justify-end`}>
        <li className='hover:text-amber-200 hover:scale-110'><Link href="/">HOME</Link></li>
        <li className='hover:text-amber-200 hover:scale-110'><Link href="/Project">PROJECT</Link></li>
        <li className='hover:text-amber-200 hover:scale-110'><Link href="/Contact">CONTACTS</Link></li>
      </motion.ul>
    </>
  );
};


export default Navbar