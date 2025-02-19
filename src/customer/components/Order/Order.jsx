import React, { useState } from 'react';
import OrderCard from './OrderCard';

const orderStatus = [
  { label: 'On the way', value: 'on-the-way' },
  { label: 'Delivered', value: 'delivered' },
  { label: 'Cancelled', value: 'cancelled' },
  { label: 'Returned', value: 'returned' },
];

const Order = () => {
//   const [selectedStatuses, setSelectedStatuses] = useState([]);

//   const handleStatusChange = (event) => {
//     const { value, checked } = event.target;
//     setSelectedStatuses((prev) =>
//       checked ? [...prev, value] : prev.filter((status) => status !== value)
//     );
//   };

  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filter Section */}
        <div className="bg-white p-5 shadow-lg rounded-md sticky top-5 h-max">
          <h1 className="font-bold text-lg">Filter</h1>
          <div className="space-y-4 mt-6">
            <h2 className="font-semibold">Order Status</h2>
            {orderStatus.map((option) => (
              <div className="flex items-center" key={option.value}>
                <input
                  id={option.value}
                  value={option.value}
                  type="checkbox"
                //   checked={selectedStatuses.includes(option.value)}
                //   onChange={handleStatusChange}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  className="ml-3 text-sm text-gray-600"
                  htmlFor={option.value}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Orders Section */}
        <div className="md:col-span-3 space-y-4">
            {[1,1,1,1,1].map((item)=> <OrderCard />)}
         
        </div>
      </div>
    </div>
  );
};

export default Order;
