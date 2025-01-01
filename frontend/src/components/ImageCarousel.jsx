import React from 'react'

import "swiper/css"
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination, Autoplay } from "swiper/modules"

import { Fade } from 'react-awesome-reveal'

import { FaCarAlt, FaCoins, FaHeart } from "react-icons/fa";




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
    },
    {
      title: "Health Insurance",
      icon: <FaHeart className="h-6 w-6 text-white" />,
      heading: "Book Free Health Insurance",
      subheading: "Consultation at home",
      buttonText: "Book home visit",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      button: true,
    },
    {
      title: "Asset Management",
      icon: <FaCarAlt className="h-6 w-6 text-white" />,
      heading: "Add your car/bike to get",
      subheading: "exclusive offers, renewal updates & plans",
      buttonText: "Add vehicle",
      bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-500",
      button: true,
    },
  ]
  return (
    <>
      <Fade triggerOnce>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={20}
          modules={[Keyboard, Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
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
      </Fade>
    </>
  )
}

export default ImageCarousel;
