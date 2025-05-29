
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







