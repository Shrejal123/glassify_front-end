
// import React from 'react'

// export const About = () => {
//   return (
//     <div className="flex justify-center items-center">
//     <div className="w-full max-w-5xl p-6 flex flex-col items-center text-center">
//       <p className="text-3xl font-bold text-gray-800 py-4">About</p>
//       <p className="text-lg text-gray-700">
//         Welcome to <span className="font-bold">Glassify</span>, your one-stop-shop for all your disposable item needs!
//         Whether you're planning a grand wedding, a birthday bash, or a festive celebration, we've got you covered.
//         Browse our extensive collection of disposable items and experience the convenience of online shopping.
//       </p>
//     </div>
//     </div>
//   )
// }
// import React from "react";

// export const About = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
//       <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-2xl text-center transform transition duration-300 hover:scale-105">
//         <h2 className="text-4xl font-extrabold text-purple-700 mb-4">
//           About <span className="text-black">Glassify</span>
//         </h2>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Welcome to <span className="font-semibold text-purple-600">Glassify</span>, your one-stop-shop for all your 
//           **disposable item needs**! Whether you're planning a **wedding, birthday bash,** or a **festive celebration**, 
//           we’ve got you covered.  
//         </p>
//         <p className="text-lg text-gray-700 mt-4">
//           Explore our extensive collection of high-quality disposable items and experience the **convenience of online shopping** with fast delivery and top-notch service.
//         </p>
//         <div className="mt-6">
//           <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-10 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 relative inline-block">
          About <span className="text-purple-600">Glassify</span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 rounded-full"></div>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold text-purple-600">Glassify</span>, your ultimate destination for premium-quality disposable items.  
          Whether you're planning a wedding, birthday party, or corporate event, we've got everything you need to make your celebration effortless & stylish.
          Whether you're a home user, event planner, or business owner, Glassify ensures you get the best disposable solutions at the best prices.
          Explore our wide range of eco-friendly and affordable disposables, carefully designed to match your elegance & convenience. 
          Enjoy seamless shopping with **fast delivery** and exceptional quality!
        </p>
        <div className="flex justify-center items-center my-6">
          <img
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b23a132b-7382-4467-b43b-ef4eb8c1aad8._CR0,0,1200,628_SX810_QL70_.jpg"
            alt="Celebration"
            className="rounded-lg shadow-md"
          />
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
        <b>🛍️ What We Offer </b> 
<p className="font-semibold">Explore our diverse collection of disposable essentials, including:</p>

🍽️ Disposable Plates & Bowls – Elegant designs, sturdy material, and eco-friendly choices.
🥤 Cups & Glasses – From stylish party cups to premium disposable glasses.
🍴 Cutlery & Straws – Biodegradable and high-quality options for every occasion.
🎊 Party Supplies – Napkins, table covers, and decorative essentials.
📦 Bulk Orders & Customization – Perfect for weddings, events, and businesses.


        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300">
          Explore Our Collection
        </button>
      </div>
    </div>
  );
};







