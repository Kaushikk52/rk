import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaCarAlt, FaCoins, FaHeart } from "react-icons/fa";


// Import Swiper styles
import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper/modules"

const DynamicSlides = () => {
    const slides = [
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
            button: false,
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
        {
            title: "Asset Management",
            icon: <FaCarAlt className="h-6 w-6 text-white" />,
            heading: "Add your car/bike to get",
            subheading: "exclusive offers, renewal updates & plans",
            buttonText: "Add vehicle",
            bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-500",
            button: true,
        },
        {
            title: "Asset Management",
            icon: <FaCarAlt className="h-6 w-6 text-white" />,
            heading: "Add your car/bike to get",
            subheading: "exclusive offers, renewal updates & plans",
            buttonText: "Add vehicle",
            bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-500",
            button: false,
        },
    ]

    return (
        <div className="w-full bg-[#f2f7ff] pt-14 pb-10 my-10 ">
            <div className="md:max-w-7xl w-full container mx-auto px-4">
                <Swiper
                
                slidesPerView={3}
                slidesPerGroup={3}
                centeredSlides={false}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20,
                        autoplay:{
                            delay: 3000,
                        },
                        speed: 1000,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 30,
                    },
                }}
                scrollbar={false}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                className=""
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                }}
                speed={1000}
                loop={true}
                >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="pb-12">
                        <div className={`rounded-lg p-4 sm:p-6 h-[210px] sm:h-[230px] ${slide.bgColor} text-white shadow-lg`}>
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-medium">{slide.title}</span>
                                {slide.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg sm:text-xl font-bold">
                                    {slide.heading}
                                    <br />
                                    {slide.subheading}
                                </h3>

                                {slide.button &&
                                    <button
                                        className="absolute right-4 bottom-16 xl:right-8 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100 transition-colors"
                                    >
                                        {slide.buttonText}
                                    </button>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div >
    )
}

export default DynamicSlides

