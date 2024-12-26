import React from 'react'

import "swiper/css"
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Pagination, Autoplay } from "swiper/modules"

import { Slide, Fade } from 'react-awesome-reveal'

import Img1 from '../assets/advantage-images/chat.png'
import Img2 from '../assets/advantage-images/best-price.png'
import Img3 from '../assets/advantage-images/insignia.png'
import Img4 from '../assets/advantage-images/phone-call.png'
import Img5 from '../assets/advantage-images/student.png'
import Img6 from '../assets/advantage-images/support.png'


const MiniSlider = () => {

    const information = [
        { id: 1, text: 'some text here some text here some tect herre', title: 'small information here', image: Img1, },
        { id: 2, text: 'some text here some text here some text here', image: Img2, },
        { id: 3, text: 'some text here', title: 'small information here', image: Img3, },
        { id: 4, text: 'some text here', title: 'small information here', image: Img4, },
        { id: 5, text: 'some text here', title: 'small information here', image: Img5, },
        { id: 6, text: 'some text here', title: 'small information here', image: Img6, },
    ]

    return (
        <>
            <div className="w-full bg-[#f2f7ff] pt-14 pb-10 my-10 ">
                <div className="md:max-w-7xl w-full container mx-auto px-4">
                    <Fade triggerOnce>
                        <Slide triggerOnce direction='up'>
                            <Swiper
                                slidesPerView={3}
                                slidesPerGroup={1}
                                grabCursor={true}
                                modules={[Keyboard, Pagination, Autoplay]}
                                keyboard={{ enabled: true }}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 3000,
                                    pauseOnMouseEnter: true,
                                    waitForTransition: true,
                                }}
                                speed={1000}
                                loop={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 1,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 1,
                                        spaceBetween: 20,
                                    },

                                }}
                            >
                                {information.map((info) => (
                                    <SwiperSlide key={info.id} className="pb-12 ">
                                        <div className='grid grid-cols-12 gap-1 md:gap-0 bg-white border-2 rounded-lg py-2 px-4'>
                                            <div className='col-span-9 content-center text-center'>
                                                {info.title &&
                                                    <h1 className='text-sm md:text-base font-semibold pb-1 text-[#253858]'>{info.title}</h1>
                                                }
                                                <p className='text-xs md:text-sm font-medium text-gray-800'>{info.text}</p>
                                            </div>
                                            <div className='col-span-3 content-center'>
                                                <img
                                                    src={info.image}
                                                    alt='image'
                                                    className='h-16 w-16 xl:h-20 xl:w-20'
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Slide>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default MiniSlider