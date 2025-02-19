// import { Grid2 } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';


const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div>
      {/* Main container with spacing between items */}
      <div onClick={()=>navigate(`/account/order/${5}`)} className=" flex flex-wrap justify-between gap-4 shadow-lg p-5 hover:shadow-2xl border rounded-md">
        <div className="w-full sm:w-1/2 flex cursor-pointer relative ">
          <img
            className="w-20 h-20 object-cover object-top"
            src="https://m.media-amazon.com/images/I/41zcS4G4hAL._AC_UF480,480_SR480,480_.jpg"
            alt="Sugarcane Paper Plates"
          />
          <div className="ml-5 space-y-2">
     <p>Sugarcane Paper Plates</p>
<p className="text-xs font-semibold text-gray-500">
              ECO SOUL 11 inch, 50 Pack
            </p>
          </div>
        </div>
   <div>
      <p>₹209</p>
   </div>
   <div>
     <p>
        <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2'/>
        <span>
            Delivered on Jan 2025
        </span>
     </p>
   </div>

      </div>
    </div>
  );
};

export default OrderCard;
