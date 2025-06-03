import React from 'react'
import { motion } from "motion/react"

const Landing_4 = () => {
  return (
    <>
    <div className='w-1/3 m-10 flex justify-center items-center'>
    <motion.table initial={{y:1000}} animate={{y:0}} transition={{delay:1, duration:3}}
    className='caramel-regular uppercase w-full h-2/3 border-collapse backdrop-blur-md'>
        <tr className='backdrop-blur-md shadow-2xl'>
            <th>NAME:</th>
            <td>Amrit Ranjan</td>
        </tr>
        <tr className='backdrop-blur-md shadow-2xl'>
            <th>Mobile:</th>
            <td>+91 8340397905</td>
        </tr>
        <tr className='backdrop-blur-md shadow-2xl'>
            <th>Email:</th>
            <td>2amritranjan@gmail.com</td>
        </tr>
        <tr className='backdrop-blur-md shadow-2xl'>
            <th>Address:</th>
            <td>Bagar, Bhojpur, Bihar</td>
        </tr>
        <tr className='backdrop-blur-md shadow-2xl'>
            <th>Pin:</th>
            <td>802222</td>
        </tr>
        <tr className='backdrop-blur-md shadow-2xl'>
            <th>Email</th>
            <td>2amritranjan@gmail.com</td>
        </tr>
        
    </motion.table>
    </div>
    </>
  )
}

export default Landing_4