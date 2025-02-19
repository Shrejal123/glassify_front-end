import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mockData } from "../../../assets/Data";




const Homepage = () => {
  return (
    <div>
      <MainCarosel/>
    
      {/* <div className='space-y-10 py-20  flex justify-center px-5 lg:px-10'> */}
        <HomeSectionCarosel  data={mockData} sectionName={"Featured Products"}/>
        
       
        <p className='flex justify-center text-3xl font-bold text-gray-800 text-center mt-4'>
  Tissue Paper Products
</p>
<div className='px-4 sm:px-6 lg:px-8 w-full flex flex-wrap justify-center gap-4 h-auto  mt-12 mb-7'>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10">
    <img className="w-full max-w-[170px] sm:max-w-[180px] md:max-w-[200px] object-cover " 
      src="https://m.media-amazon.com/images/I/81zKnosrSQL._AC_UF480,480_SR480,480_.jpg" alt="Tissue 1" />
    <img className="w-full max-w-[170px] sm:max-w-[180px] md:max-w-[200px] object-cover " 
      src="https://m.media-amazon.com/images/I/81-FGXD5cBL._AC_UF480,480_SR480,480_.jpg" alt="Tissue 2" />
    <img className="w-full max-w-[170px] sm:max-w-[180px] md:max-w-[200px] object-cover" 
      src="https://m.media-amazon.com/images/I/71Gc2fBn-qL._AC_UF480,480_SR480,480_.jpg" alt="Tissue 3" />
    <img className="w-full max-w-[170px] sm:max-w-[180px] md:max-w-[200px] object-cover" 
      src="https://m.media-amazon.com/images/I/71I7h3G8zTL._AC_UF480,480_SR480,480_.jpg" alt="Tissue 4" />
    <img className="w-full max-w-[170px] sm:max-w-[180px] md:max-w-[200px] object-cover" 
      src="https://m.media-amazon.com/images/I/81A-tzE21qL._AC_UF480,480_SR480,480_.jpg" alt="Tissue 5" />
  </div>

</div>
{/* <div className="flex justify-center items-center">
  <div className="w-full max-w-5xl p-6 flex flex-col items-center text-center">
    <p className="text-3xl font-bold text-gray-800 py-4">About</p>
    <p className="text-lg text-gray-700">
      Welcome to <span className="font-bold">Glassify</span>, your one-stop-shop for all your disposable item needs!
      Whether you're planning a grand wedding, a birthday bash, or a festive celebration, we've got you covered.
      Browse our extensive collection of disposable items and experience the convenience of online shopping.
    </p>
  </div>
</div>
 */}

</div>
    // </div>
  )
}

export default Homepage
