// import React from "react";
// import Slider from "react-slick";
// import HomeCard from "../HomeCard/HomeCard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HomeSectionCarosel = ({ data, sectionName }) => {
//   const NextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "block",
//           background: "black",
//           color: "white",
//           borderRadius: "50%",
//           zIndex: 2,
//         }}
//         onClick={onClick}
//       />
//     );
//   };

//   const PrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "block",
//           background: "black",
//           color: "white",
//           borderRadius: "50%",
//           zIndex: 2,
//         }}
//         onClick={onClick}
//       />
      
//     );
//   };
  
  
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 720,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     nextArrow: <NextArrow />, // Custom Next Arrow
//     prevArrow: <PrevArrow />, // Custom Previous Arrow
//   };

//   return (
//     <div className="px-4 lg:px-8">
//       <h2 className="text-3xl font-bold text-gray-800 text-center py-5">{sectionName}</h2>
//       {/* <div className="relative p-5"> */}
//         <Slider {...settings}>
//           {data.slice(0, 13).map((item, index) => (
//             <HomeCard key={index} product={item} />
//           ))}
//         </Slider>
//       {/* </div> */}
//     </div>
//   );
// };

// export default HomeSectionCarosel;

import React from "react";
import Slider from "react-slick";
import HomeCard from "../HomeCard/HomeCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const NextArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} !right-5`} 
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "white",
        borderRadius: "50%",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );

  const PrevArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} !left-5`} 
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "white",
        borderRadius: "50%",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small tablets & large phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center py-5">
          {sectionName}
        </h2>
        <Slider {...settings}>
          {data.slice(0, 13).map((item, index) => (
            <HomeCard key={index} product={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
