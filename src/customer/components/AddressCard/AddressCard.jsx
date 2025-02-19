// import React from 'react'

// const AddressCard = ({address}) => {
//   return (
//     <div className='space-y-3'>
//        <p className='font-semibold'>{address?.firstName+" "+address?.lastName}</p>
//        <p>{address?.state},{address?.streetAddress},{address?.ZipCode}</p>
//        <div className='space-y-1'>
//         <p className='font-semibold'>Phone Number</p>
//         <p>{address?.mobile}</p>
//        </div>
//     </div>
//   )
// }

// export default AddressCard
import React from 'react';

const AddressCard = ({ address }) => {
  if (!address) {
    return <p>No address provided</p>; // Optional: handle case when address is missing
  }

  const { firstName, lastName, state, streetAddress, ZipCode, mobile } = address;

  return (
    <div className='space-y-3'>
      <p className='font-semibold'>{`${firstName} ${lastName}`}</p>
      <p>{`${streetAddress}, ${state}, ${ZipCode}`}</p>
      <div className='space-y-1'>
        <p className='font-semibold'>Phone Number</p>
        <p>{mobile}</p>
      </div>
    </div>
  );
};

export default AddressCard;
