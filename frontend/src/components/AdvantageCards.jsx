import React from 'react';

import { useMediaQuery } from '@mui/material';

import { Slide, Fade } from 'react-awesome-reveal';

import Bestprice from '../assets/advantage-images/best-price.png';
import Chat from '../assets/advantage-images/chat.png';
import Insignia from '../assets/advantage-images/insignia.png';
import Support from '../assets/advantage-images/support.png';
import Student from '../assets/advantage-images/student.png';

const AdvantageCards = () => {
    const isSmallScreen = useMediaQuery('(max-width: 640px)');
    const isMediumScreen = useMediaQuery('(min-width: 641px) and (max-width: 1023px)');
    const isLargeScreen = useMediaQuery('(min-width: 1024px)');

    const advantages = [
        { id: 1, zeroTosm: 'left', md: 'right', lg: 'right', rotate: 'lg:rotate-[-20deg]', translateY: '', translateX: '', delay: 100, image: Bestprice, title: 'Best Prices', text: 'Guaranteed' },
        { id: 2, zeroTosm: 'right', md: 'left', lg: 'right', rotate: 'lg:rotate-[-20deg]', translateY: 'lg:-translate-y-14', translateX: 'lg:translate-x-0', delay: 300, image: Chat, title: 'Unbiased Advice', text: 'Keeping customers first' },
        { id: 3, zeroTosm: 'left', md: 'right', lg: 'right', rotate: 'lg:rotate-[-20deg]', translateY: '', translateX: '', delay: 500, image: Insignia, title: '100% Reliable', text: 'Regulated by IRDAI' },
        { id: 4, zeroTosm: 'right', md: 'left', lg: 'right', rotate: 'lg:rotate-[-20deg]', translateY: 'lg:-translate-y-14', translateX: 'lg:translate-x-0', delay: 700, image: Support, title: 'Claim Support', text: 'Made stress-free' },
        { id: 5, zeroTosm: 'left', md: 'right', lg: 'right', rotate: 'lg:rotate-[-20deg]', translateY: '', translateX: '', delay: 900, image: Student, title: 'Happy to help', text: 'Every day of the week' },
    ];

    return (
        <div className="max-w-7xl container my-10 mx-auto px-4">
            <div className='lg:grid lg:grid-cols-4 xl:grid-cols-5'>
                <div className='lg:col-span-2 lg:content-center lg:max-w-xl xl:max-w-2xl xl:col-span-3'>
                    <Fade triggerOnce>
                        <Slide triggerOnce direction="left" duration={2000}>
                            <div className="text-left lg:text-left min-[425px]:text-center mx-auto">
                                <h1 className="text-4xl lg:text-5xl font-semibold text-[#253858] py-5">RK Advantages</h1>
                                <p className="text-[#253858] font-medium text-lg">
                                When you choose insurance with us, you're not just securing financial protection. You’re also gaining clarity with easy-to-understand policies, hassle-free claims, instant quotes from leading insurers, and unwavering support when you need it the most.
                                </p>
                            </div>
                        </Slide>
                    </Fade>
                </div>
                <div className='lg:col-span-2 lg:max-w-s0xl:col-span-2 xl:max-w-md'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-3 my-10">
                        {advantages.map((advantage) => {
                            // Determine the animation direction based on screen size
                            let direction = 'left';
                            if (isSmallScreen) direction = advantage.zeroTosm;
                            else if (isMediumScreen) direction = advantage.md;
                            else if (isLargeScreen) direction = advantage.lg;

                            return (
                                <Fade triggerOnce>
                                    <Slide key={advantage.id} triggerOnce direction={direction} delay={advantage.delay}>
                                        {/* <div className="group grid grid-rows-2 bg-white border rounded-sm py-10 px-2 hover:scale-110 hover:shadow-2xl hover:border-white transition-all duration-75 ease-in-out">
                                    <div className="row-span-1 content-end mx-auto">
                                        <img
                                            src={advantage.image}
                                            alt={advantage.title}
                                            className="h-24 w-24"
                                        />
                                    </div>
                                    <div className="row-span-1 content-end mx-auto text-center">
                                        <h1 className="text-xl lg:text-lg xl:text-xl text-[#253858] font-semibold group-hover:font-bold mb-1 text-nowrap">
                                            {advantage.title}
                                        </h1>
                                        <p className="lg:text-sm font-medium text-gray-500 group-hover:font-semibold group-hover:text-sm text-nowrap">
                                            {advantage.text}
                                        </p>
                                    </div>
                                </div> */}

                                        <div className={`flex items-center ${advantage.translateX} border px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}>
                                            <div className='flex-shrink-0'>
                                                <img
                                                    src={advantage.image}
                                                    alt={advantage.title}
                                                    className='h-16 w-16'
                                                />
                                            </div>
                                            <div className='ml-4'>
                                                <h2 className='text-xl font-semibold text-[#253858]'>{advantage.title}</h2>
                                                <p className='text-gray-600'>{advantage.text}</p>
                                            </div>
                                        </div>
                                    </Slide>
                                </Fade>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantageCards;
