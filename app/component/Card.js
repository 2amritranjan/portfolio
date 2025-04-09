import React from 'react';

const Card = ({ image, text }) => {
  return (
    <>
    <div>
    <div className='w-50 h-50 rounded border-2 border-black ml-5 flex flex-col items-center justify-center overflow-hidden'>
      <img src={image} alt="card-img" className="object-cover rounded" />
    </div>
    <p className="m-5 text-green-950 font-semibold bg-white rounded w-50 h-10 text-4xl text-center caramel-regular hover:text-black hover:bg-amber-200">{text}</p>
    </div>
    </>
  );
};

export default Card;
