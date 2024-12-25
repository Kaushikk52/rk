// import React, { useState, useEffect } from 'react';
// import './ImageCarousel.css'

// import Img1 from '../assets/carousel-images/img-1.webp';
// import Img2 from '../assets/carousel-images/img-2.avif';
// import Img3 from '../assets/carousel-images/img-3.avif';

// const ImageCarousel = () => {
//   const images = [
//     { id: 1, image: Img1, alt: 'Image 1' },
//     { id: 2, image: Img2, alt: 'Image 2' },
//     { id: 3, image: Img3, alt: 'Image 3' },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const goToImage = (index) => {
//     setCurrentIndex(index);
//   };

//   return (

//     <div className=" relative lg:ml-auto lg:w-[540px]">
//       {/* Carousel Container */}
//       <div className="image-carousel">
//         <img src={images[currentIndex].image} alt={images[currentIndex].alt} className="carousel-image" />
//       </div>

//       {/* Custom Pagination - outside the carousel */}
//       <div className="swiper-pagination-container">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`custom-pagination-btn ${currentIndex === index ? 'active' : ''}`}
//             onClick={() => goToImage(index)}
//           >

//           </button>
//         ))}
//       </div>


//     </div>
//   );
// };

// export default ImageCarousel;

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination, Autoplay } from "swiper/modules"
import { FaCarAlt, FaCoins, FaHeart } from "react-icons/fa";


import "swiper/css"
import "swiper/css/pagination"


const ImageCarousel = () => { 
  const details = [
   {
               title: "Investment Plans",
               icon: <FaCoins className="h-6 w-6 text-white" />,
               heading: "Invest ₹10K and Get",
               subheading: "₹1 Crore return*",
               buttonText: "Invest now",
               bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-500",
               button: true,
               buttonPosition: 'left',
           },
           {
               title: "Health Insurance",
               icon: <FaHeart className="h-6 w-6 text-white" />,
               heading: "Book Free Health Insurance",
               subheading: "Consultation at home",
               buttonText: "Book home visit",
               bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
               button: true,
               buttonPosition: 'right',
           },
           {
               title: "Asset Management",
               icon: <FaCarAlt className="h-6 w-6 text-white" />,
               heading: "Add your car/bike to get",
               subheading: "exclusive offers, renewal updates & plans",
               buttonText: "Add vehicle",
               bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-500",
               button: true,
               buttonPosition: 'left',
           },
  ]
  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        modules={[Keyboard, Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
        }}
        speed={500}
        loop={true}
        className='container'
      >
        {details.map((detail, index) => (
                            <SwiperSlide key={index} className="pb-12">
                                <div className={`rounded-lg p-4 sm:p-6 h-[210px] sm:h-[230px] ${detail.bgColor} text-white shadow-lg`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-medium">{detail.title}</span>
                                        {detail.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-lg sm:text-xl font-bold">
                                            {detail.heading}
                                            <br />
                                            {detail.subheading}
                                        </h3>
        
                                        {detail.button &&
                                            <button
                                                className="absolute right-4 bottom-16 xl:right-8 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100 transition-colors"
                                            >
                                                {detail.buttonText}
                                            </button>
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
      </Swiper>
    </>
  )
}

 export default ImageCarousel;
