import React from 'react'
import ImageCarousel from './ImageCarousel'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <>
            <div className='w-full bg-[#f2f7ff]'>
                <div className="max-w-7xl container mx-auto px-4 py-20">
                    <div className="flex flex-col lg:flex-row lg:space-x-10 items-center">
                        <div className="text-left min-[425px]:text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
                            <h1 className="text-5xl lg:text-4xl xl:text-5xl text-[#253858] font-bold mb-4">Protect Your Future with Confidence</h1>
                            <p className="text-xl mb-8 text-[#253858]">Comprehensive insurance solutions tailored to your unique needs.</p>
                            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                                <a
                                    href="#"
                                    className="bg-yellow-300 text-black py-3 px-8 rounded-full font-semibold  transition duration-300 text-center"
                                >
                                    Get a Quote
                                </a>
                                <a
                                    href="#"
                                    className="group flex gap-2 border-2 border-indigo-600 py-3 px-8 rounded-full font-semibold text-indigo-600 hover:bg-indigo-500 hover:text-white hover:border-transparent transition duration-300 ease-in-out text-center"
                                >
                                    Learn More <ArrowRight className='group-hover:-rotate-45 group-hover:text-white text-indigo-600 transition-all duration-200 ease-in-out' />
                                </a>
                            </div>
                        </div>
                        <div className='lg:w-1/2 min-[320px]:w-full md:w-full'>

                            <ImageCarousel />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero