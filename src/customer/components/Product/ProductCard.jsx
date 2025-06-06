import React from 'react'
import './ProductCard.css'
import { useLocation, useNavigate } from 'react-router-dom'


const ProductCard = ({product}) => {
    const{title, brand, imageUrl, price, discountedPrice, color, discountPercent}= product;
    const navigate = useNavigate();

    const handleNavigate=()=>{
        navigate(`/product/${product?._id}`)
    }

  return (
    <>
    <div onClick={handleNavigate} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[18rem]'>
            <img className='h-full w-full object-cover object-left-top p-3' 
            src={product.imageUrl} alt=''/>
        </div>
    {/* </div> */}
    <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>{product.brand}</p>
            <p>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>₹{product.discountedPrice}</p>
            <p className='line-through opacity-50'>{product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
        </div>
    </div>
    </div>
    </> 
  )
}

export default ProductCard
