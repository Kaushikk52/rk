import React from 'react'
import Img1 from '../assets/advantage-images/chat.png'
import Img2 from '../assets/advantage-images/best-price.png'
import Img3 from '../assets/advantage-images/insignia.png'
import Img4 from '../assets/advantage-images/phone-call.png'
import Img5 from '../assets/advantage-images/student.png'
import Img6 from '../assets/advantage-images/support.png'

import { Swiper, SwiperSlide } from "swiper/react"

import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/navigation"
import "swiper/css/pagination"

const MiniSlider = () => {

    const information = [
        { id: 1, text: 'small information here smalll informasdsd ssssssssss', image: Img1, },
        { id: 2, text: 'small information here', image: Img2, },
        { id: 3, text: 'small information here', image: Img3, },
        { id: 4, text: 'small information here', image: Img4, },
        { id: 5, text: 'small information here', image: Img5, },
        { id: 6, text: 'small information here', image: Img6, },
    ]

    return (
        <>
            <div className="w-full bg-[#f2f7ff] pt-14 pb-10 my-10 ">
                <div className="md:max-w-7xl w-full container mx-auto px-4">
                    <Swiper
                        slidesPerView={3}
                        slidesPerGroup={3}
                        grabCursor={true}
                        keyboard={{ enabled: true }}
                        scrollbar={false}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                        // autoplay={{
                        //     delay: 3000,
                        //     pauseOnMouseEnter: true,
                        // }}
                        speed={1000}
                        loop={true}
                        spaceBetween={20}
                    >
                        {information.map((info) => (
                            <SwiperSlide key={info.id} className="pb-12 ">
                                <div className='flex justify-between items-center bg-gray-100 py-2 px-5'>
                                    <div className='border'>
                                        <h1 className='text-xl font-medium'>{info.text}</h1>
                                    </div>
                                    <div className='w-1/3'>
                                    <img
                                    src={info.image}
                                    alt='image'
                                    className='h-16 w-16'
                                    />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default MiniSlider