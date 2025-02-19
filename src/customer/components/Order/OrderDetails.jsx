import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';


const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-52'>
      <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
     <AddressCard/>
      </div>

      <div className='mt-8'>
        <OrderTracker activeStep={3}/>
     
      </div>
      <div className='item'>
        {[1,1,1,1].map((item,index)=>
        <div  key={index} className='shadow-lg rounded-md p-3 border  mb-6 mt-6 flex justify-between flex-row '>
           
           <div className='flex items-center space-x-2'>
           <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://m.media-amazon.com/images/I/61XzslW2j3L._SX679_.jpg' alt=""/>
              <div className='space-y-2 ml-5'>
                <p className='font-semibold'>Ghar Soaps Face Hand Clean Towels </p>
                <p className='opacity-60 text-sm w-64'>India 1ST Disposable Face Towel |Gym & makeup remover | Towels for Facewash Sport Travel Ultra Soft </p>
                <p className=' text-sm'>459</p>
              </div>
           </div>
           <div className='mt-8 mr-4  flex flex-col lg:flex-row'>
            <div className='text-blue-600'>
               <StarBorderIcon/>
                <span >Rate & Review Product</span>
            </div>
           </div>
            </div>
            )}
      </div>
    </div>
  )
}

export default OrderDetails
