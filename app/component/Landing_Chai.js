import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";;

const Landing_Chai = () => {
  return (
    <>
    <div className='h-2/3 w-2/3 border-1 border-black rounded-xl relative'>
    <div className='h-20 w-20 -top-2 -left-2 absolute'><img src='tick.webp' alt='tick'></img></div>
    <div className='flex'>
        <img src='chai2.png' alt='image' className='m-5'></img>
        <p className='text-center mt-32 mr-5 font-semibold text-xl'>
        A hot beverage made by boiling tea leaves with milk, sugar, and spices like ginger or cardamom, enjoyed daily across countless homes and streets. Chai is not just a drink — it's a feeling of comfort, warmth, and togetherness. Whether it’s a rainy evening or a busy morning, one cup of chai can refresh your mind and soothe your mood.</p>
        </div>
        <div className='w-3/4 text-right'><button className='bg-green-400 text-2xl font-light h-10 w-44 caramel-regular rounded-md hover:bg-green-500'>CHAI@20</button></div>
    <div className='flex text-3xl h-7 m-5 text-yellow-300'><FaStar /><FaStar/><FaStar/><FaStar/><FaStarHalf />
    <div className='w-full flex justify-end'><img src='veg.png' alt='veg' className='h-5 w-5'></img></div>
    </div>
    
    </div>
    </>
  )
}

export default Landing_Chai