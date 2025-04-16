"use client"
import React, { useState } from 'react'
import { RiUser2Fill } from "react-icons/ri";
import { CiGlass } from "react-icons/ci";
import Link from 'next/link';

const Navbar2 = () => {
  const [search, setsearch] = useState("")
  return (
    <>
    <div className='p-2 flex justify-evenly items-center'>
        <div className='love-ya-like-a-sister-regular text-5xl'>BhaiEkChai</div>
        <div className='w-2/3 text-center'>
      <select className="w-auto h-10 border bg-amber-200 text-gray-600 hover:text-black rounded-l-lg">
        <option value="all">All</option>
        <option value="chai">Chai</option>
        <option value="coffee">Coffee</option>
        <option value="juice">Juice</option>
        <option value="water">Water</option>
        <option value="soda">Soda</option>
      </select>
          <input onChange={(e)=>setsearch(e.target.value)}
            value={search} 
            className='w-2/3 h-10 rounded-r-lg border p-1 bg-orange-300 hover:bg-orange-200' placeholder='Search Chai...'/>
        </div>
        <div className='flex mt-5 justify-end gap-1 text-2xl caramel-regular gap-10 text-bold'>
          <div><CiGlass /> Cart</div>
          <div><RiUser2Fill />Login</div></div>
        </div>
      <hr/>
    </>
  )
}

export default Navbar2