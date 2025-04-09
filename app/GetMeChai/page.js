import React from 'react'
import Landing_Chai from '../component/Landing_Chai';
import Navbar2 from '../component/Navbar2';
import Landing_Chai2 from '../component/Landing_Chai2';

const page = () => {
  return (
    <>
    <div className='bg-orange-300 w-full h-screen'>
      <Navbar2/>
      <div className='h-auto w-auto m-5 flex'>
        <Landing_Chai/>
        <Landing_Chai2/>
      </div>
    </div>
    </>
  )
}

export default page