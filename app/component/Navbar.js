import Link from 'next/link'
import React from 'react'


const Navbar = ({ color = "white" }) => {
  return (
    <>
      <ul className={`h-16 w-full text-2xl caramel-regular text-${color} font-mono flex gap-10 justify-end`}>
        <li className='hover:text-amber-200'><Link href="/">HOME</Link></li>
        <li className='hover:text-amber-200'><Link href="/Project">PROJECT</Link></li>
        <li className='hover:text-amber-200'><Link href="/Contact">CONTACTS</Link></li>
      </ul>
    </>
  );
};


export default Navbar