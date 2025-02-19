import React from "react"; 
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCaroselData } from "./MainCaroselData";

const MainCarosel = () => {
  const items = MainCaroselData.map((item) => (
    <img
      key={item.image} // Unique key for each item
      className="cursor-pointer w-full max-w-[6830px] h-auto mx-auto" 
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <div className="flex justify-center w-full"> 
      <div className="w-full max-w-7xl">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          infinite
        />
      </div>
    </div>
  );
};

export default MainCarosel;
