import React from 'react'

const HomeCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center  overflow-hidden w-[12rem] mx-3'>
        <div className='h-[12rem] p-3 '>
            <img className='object-cover object-top w-full h-full' src={product.image} alt="img"/>
            
        </div>
        
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>{product.name}</h3>
            <p className='mt-2 text-sm text-gray-500'>₹{product.Price}</p>

        </div>
    </div>
  )
}

export default HomeCard
