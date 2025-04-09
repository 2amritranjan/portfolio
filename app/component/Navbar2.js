"use client"
import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { RiUser2Fill } from "react-icons/ri";
import Link from 'next/link';

const Navbar2 = () => {
  const [search, setsearch] = useState("")
  return (
    <>
    <div className='p-2 flex justify-evenly items-center'>
        <div className='love-ya-like-a-sister-regular text-5xl'>BhaiEkChai</div>
        <div>
          <input onChange={(e)=>setsearch(e.target.value)}
            value={search} 
            className='w-80 h-10 rounded-xl border-2 bg-orange-300 hover:bg-orange-200' placeholder='Search Chai...'/>
        </div>
        <div className='flex mt-5 justify-end'>
          <Navbar color='black'/><div className='text-4xl caramel-regular ml-10 hover:text-amber-200'>
            <Link href="/Chai_maniya">PRODUCTS</Link></div>
          <div className='text-4xl caramel-regular ml-10 hover:text-amber-200'><RiUser2Fill /></div>
        </div>
      </div><hr/>
    </>
  )
}

export default Navbar2