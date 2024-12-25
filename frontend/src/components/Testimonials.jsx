import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { PiQuotesFill } from "react-icons/pi";

import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {

    const testimonials = [
        { id: 1, name: 'Sonia Khanna', message: 'Got good deal without agent calling or speaking to anyone!!' },
        { id: 2, name: 'Ananth Narayan', message: 'Thank you for facilitating and following up on the policy. Its been a very pleasurable experience with you folks at RK Insurance.' },
        { id: 3, name: 'Prabhat Yadav', message: 'Thanking you very much for your support for getting our policy quickly, I would appreciate your work.' },
        { id: 4, name: 'Bhaaskar Lokhande', message: 'Thanks for correction done in time and really Appreciated....!!     GOOD TO HAVE POLICYBAZAAR..!! LIFE IS EASY WITH YOU..!!' },
        { id: 5, name: 'Urvashi Solanki', message: 'I did not even need help from an agent! This is very good!' },
        { id: 6, name: 'Rashmi Sirsath', message: `I would like to thank the website www.rkinsurance.com because of which i could get a good policy.` },
        { id: 7, name: 'Parag Lele', message: 'The services provided by Policybazaar are extremely helpful in making the right choice. Overall I had a good experience with RK Insurance.' },
        { id: 8, name: 'Shraddha Sharma', message: 'Very simple to use, friendly website' },
        { id: 9, name: 'Neha Jain', message: 'You are doing a great job. Proud to be a customer of RK Insurance.' },
    ]

    return (
        <>
            <div className='w-full bg-[#f2f7ff] py-8 my-16 px-4'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-[#253858]'>What Customers Says About Us</h1>
                </div>
                <div className='max-w-7xl container mx-auto my-10 px-4'>
                    <Swiper
                        className="h-[320px] md:h-[360px]"
                        modules={[Pagination, Autoplay]}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        grabCursor={true}
                        centeredSlides={false}
                        speed={700}
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
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: false,
                        }}
                        spaceBetween={30}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                    >

                        {testimonials.map((tes) => (
                            <SwiperSlide
                                key={tes.id}
                                className='h-full w-full pb-14 px-2 pt-2'
                            >
                                <div
                                    style={{

                                    }}
                                    className='group grid grid-rows-3 p-4 h-full w-full rounded-sm custom-box-shadow bg-white hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out'>
                                    <div className='row-span-1 content-center'>
                                        <h1 className='text-xl font-semibold text-center'>{tes.name}</h1>
                                        <PiQuotesFill className='h-6 w-6 mx-auto mt-2' />
                                    </div>
                                    <div className='row-span-2 content-start'>
                                        <p className='text-center text-[#253858] group-hover:text-white'>{tes.message}</p>
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

export default Testimonials