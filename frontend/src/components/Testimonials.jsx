import React, { useState } from 'react'

import "swiper/css"
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, EffectCoverflow } from 'swiper/modules';

import { Slide, Fade } from "react-awesome-reveal"

import { PiQuotesFill } from "react-icons/pi";


const Testimonials = () => {
    const [centerIndex, setCenterIndex] = useState(0)
    const testimonials = [
        { id: 1, name: 'Sonia Khanna', message: 'Got good deal without agent calling or speaking to anyone!!' },
        { id: 2, name: 'Ananth Narayan', message: 'Thank you for facilitating and following up on the policy. Its been a very pleasurable experience with you folks at RK Insurance.' },
        { id: 3, name: 'Prabhat Yadav', message: 'Thanking you very much for your support for getting our policy quickly, I would appreciate your work.' },
        { id: 4, name: 'Bhaaskar Lokhande', message: 'Thanks for correction done in time and really Appreciated....!!     GOOD TO HAVE RK INSURANCE..!! LIFE IS EASY WITH YOU..!!' },
        { id: 5, name: 'Urvashi Solanki', message: 'I did not even need help from an agent! This is very good!' },
        { id: 6, name: 'Rashmi Sirsath', message: `I would like to thank the website www.rkinsurance.com because of which i could get a good policy.` },
        { id: 7, name: 'Parag Lele', message: 'The services provided by RK Insurance are extremely helpful in making the right choice. Overall I had a good experience with RK Insurance.' },
        { id: 8, name: 'Shraddha Sharma', message: 'Very simple to use, friendly website' },
        { id: 9, name: 'Neha Jain', message: 'You are doing a great job. Proud to be a customer of RK Insurance.' },
    ]

    return (
        <>
            <div className='w-full bg-[#f2f7ff] py-8 my-16 px-4'>
                <Fade triggerOnce>
                    <Slide triggerOnce direction='up'>
                        <div className='text-left min-[375px]:text-center'>
                            <h1 className='text-4xl font-semibold text-[#253858]'>What Customers Says About Us</h1>
                        </div>
                    </Slide>
                </Fade>
                <div className='max-w-7xl container mx-auto my-10 px-4'>
                    <Fade triggerOnce>
                        <Slide triggerOnce direction='up'>
                            <Swiper
                                slidesPerView={'auto'}
                                slidesPerGroup={1}
                                grabCursor={true}
                                effect={'coverflow'}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,
                                  }}
                                centeredSlides={true}
                                modules={[Pagination, Keyboard, Autoplay, EffectCoverflow]}
                                keyboard={{ enabled: true, }}
                                pagination={{ clickable: true, }}
                                autoplay={{ delay: 3000, waitForTransition: true, pauseOnMouseEnter: false }}
                                speed={500}
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
                                        spaceBetween: 10,
                                    },
                                    1440: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 1,
                                        spaceBetween: 30,
                                    },

                                }}
                                onSlideChange={(swiper) => setCenterIndex((swiper.realIndex ) % testimonials.length)}
                                className="h-[320px] md:h-[360px] lg:h-[320px] xl:h-[360px]"
                            >

                                {testimonials.map((tes, index) => (
                                    <SwiperSlide
                                        key={tes.id}
                                        className='h-full w-full pb-14 px-2 pt-2'
                                    >

                                        <div
                                            className={`group grid grid-rows-3 p-4 h-full w-full rounded-sm custom-box-shadow bg-white text-[#253858] transition-all duration-300 ease-in-out
                                        ${index === centerIndex
                                                    ? 'md:bg-yellow-300 md:text-black'
                                                    : 'bg-white text-[#253858]'
                                                }`}>
                                            <div className='row-span-1 content-center'>
                                                <h1 className='text-xl lg:text-lg xl:text-2xl font-semibold text-center'>{tes.name}</h1>
                                                {/* <PiQuotesFill className='h-6 w-6 mx-auto mt-2' /> */}
                                            </div>
                                            <div className='row-span-2 content-start'>
                                                <p className='text-sm sm:text-base lg:text-sm xl:text-base text-center'>{tes.message}</p>
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

export default Testimonials