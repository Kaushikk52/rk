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

import "swiper/css"
import "swiper/css/pagination"


const ImageCarousel = () => { 
  const details = [
    {id: 1, bgColor: '', buttonText: 'View plans', }
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
        speed={3000}
        loop={true}
      >
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
    </>
  )
}