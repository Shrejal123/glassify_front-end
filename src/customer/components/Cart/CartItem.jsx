import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton } from '@mui/material';
import { getCart, removeCartItem, updateCartItem } from '../../../State/Cart/Action';
import { useDispatch } from 'react-redux';
// getCar

const CartItem = ({item}) => {
  const dispatch=useDispatch();

  
    if (!item || !item.product) {
      return null;
    }
  const handleUpdateCartItem=(num)=>{
    const data = {data:{quantity:item.quantity+num},cartItemId:item?._id}
    dispatch(updateCartItem(data))
  }
  // const handleUpdateCartItem = (num) => {
  //   const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id };
  //   dispatch(updateCartItem(data)).then(() => {
  //     dispatch(getCart()); // Fetch latest cart after update
  //   });
  // };
  
  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item?._id));
  }

  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-top' src={item.product.imageUrl} alt='image'/>
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'> {item.product.title} </p>
                <p className='opacity-70'>Size: {item.size}</p>
                <p className='opacity-70 mt-2'>Seller: {item.product.brand}</p>   
                <div className="flex space-x-3 items-center text-lg lg:text-xl text-gray-900 mt-6">
                {/* <p className="font-semibold">₹{item.price}</p> */}
                <p className="font-semibold">₹{item.discountedPrice}</p>
                <p className="opacity-50 line-through">{item.price}</p>
                <p className="text-green-600 font-semibold">{item.discountPercent}% Off</p>
              </div>
              </div>
            </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2 pt-4'>
                <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
               <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{color:"purple"}}>
                    <AddCircleIcon/>
                </IconButton>
           
            </div>
          <div>
            <Button onClick={handleRemoveCartItem} sx={{color:"purple"}} >remove</Button>
          </div>
       
        </div>
      
    </div>
  )
}

export default CartItem
