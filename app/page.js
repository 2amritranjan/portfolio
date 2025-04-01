import React from 'react';
import Navbar from './component/Navbar';
import Landing_1 from './component/Landing_1';
import Landing_2 from './component/Landing_2';



const page = () => {
  return (
    <>
      <div className='h-screen w-full bg-green-950 flex flex-col'>
        <div className='h-20 w-full p-5 flex justify-end'>
          <Navbar />
        </div>

        <div className='w-full h-screen flex'>
          <Landing_1/>
          <Landing_2/>

        </div>
      </div>
    </>
  );
}

export default page;
