import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location= useLocation();
  const {order} = useSelector(store=>store);

  const searchParams =new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")

 useEffect(()=>{
  dispatch(getOrderById(orderId))
 },[orderId])


  return (
    <div>
        <div className='p-5 mb-8 shadow-lg rounded-s-md border'>
               <AddressCard address={order.order?.shippingAddress}/>
           <div>
           <div className='lg:grid grid-cols-3  relative mt-3'>
      <div className='col-span-2 space-y-3 mb-5'> 
      {order.order?.orderItems.map((item)=>(
        <CartItem item={item}/>
      ))}
    
     </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className='border'>
              <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
              <hr/>
              <div className='space-y-3 font-semibold mb-8 pl-3 pr-4'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Discount</span>
                  <span className='text-green-600'>₹{order.order?.discountedPrice
                  }</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Delivery Charge</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Total Amount</span>
                  <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button variant='contained'className='w-full mt-5' sx={{px:"2.5rem",py:"0.75rem",bgcolor:"#9155fd"}}>
                Checkout
              </Button>
            </div>
      </div>
      </div>
           </div>
        </div>
     
    </div>
  )
}

export default OrderSummary
