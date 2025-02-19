import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'
import { store } from '../../../State/store'

const Cart = () => {
  const navigate=useNavigate();
  const {cart} = useSelector((store)=>store);
  
  const dispatch= useDispatch();
  const handleCheckout=()=>{
      navigate("/checkout?step=2")
  }

useEffect(()=>{
  dispatch(getCart())
},[cart.updateCartItem,cart.deleteCartItem])
// useEffect(() => {
//   console.log("Fetching cart...");
//   dispatch(getCart());
// }, [cart.cartItems?.length, cart.cart?.totalPrice, dispatch]); 

// console.log("Cart Redux State:", cart);
// console.log("Total Price:", cart.cart?.totalPrice);
// console.log("Cart Items:", cart.cart?.cartItems);

  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative mt-3'>
     <div className='col-span-2 space-y-3 mb-5'>
      {cart.cart?.cartItems.map((item)=> <CartItem key={item._id} item={item}/>)}
    
     </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className='border'>
              <p className='uppercase font-bold opacity-60 p-5'>Price details</p>
              <hr/>
              <div className='space-y-3 font-semibold mb-8 pl-3 pr-4'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span>₹{cart.cart?.totalPrice}</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Discount</span>
                  <span className='text-green-600'>-₹{cart.cart?.discount}</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Delivery Charge</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Total Amount</span>
                  <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>
                </div>
              
              </div>
              <Button onClick={handleCheckout} variant='contained'className='w-full mt-5' sx={{px:"2.5rem",py:"0.75rem",bgcolor:"#9155fd"}}>
                Checkout
              </Button>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Cart
