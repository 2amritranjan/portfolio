import React from 'react'
import Landing_1 from './Landing_1'

const Landing_3 = () => {
  return (
    <>
      <div className='w-2/3 m-10'>
        <table className='w-full h-full border-0 text-white caramel-regular text-3xl border-collapse backdrop-blur-md'>
        <tr className='border-2 text-center uppercase shadow-2xl'>
          <th>Course/Degree</th>
          <th>Board/university</th>
          <th>Marks</th>
        </tr>
        <tr className='border-0 backdrop-blur-md shadow-2xl'>
          <td>Matriculation</td>
          <td>CBSE, New Delhi</td>
          <td>89.3%</td>
        </tr>
        <tr className='border-0 backdrop-blur-md shadow-2xl'>
          <td>Intermediate (PCM)</td>
          <td>BSEB, Patna</td>
          <td>62.8%</td>
        </tr>
        <tr className='border-0 backdrop-blur-md shadow-2xl'>
          <td>Graduation Physics (Hons.)</td>
          <td>Patliputra University, Patna</td>
          <td>62%</td>
        </tr>
        <tr className='border-0 backdrop-blur-md shadow-2xl'>
          <td>Bachelore Of Eductaion</td>
          <td>VeerKunwar Singh University, Ara</td>
          <td>79%</td>
        </tr>
      </table>
      </div>
    </>
  )
}

export default Landing_3