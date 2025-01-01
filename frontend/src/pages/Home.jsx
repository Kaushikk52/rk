import React from 'react'

import { Slide, Fade } from 'react-awesome-reveal'

import { MdChecklistRtl } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";

import ImageCarousel from '../components/ImageCarousel'
import Insurances from '../components/Insurances';
import AdvantageCards from '../components/AdvantageCards';
import WhyUs from '../components/WhyUs';
import AlsoBuy from '../components/AlsoBuy';
import DynamicSlides from '../components/DynamicSlides';
import Testimonials from '../components/Testimonials';
import MiniSlider from '../components/MiniSlider';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* <div className='flex items-center justify-between max-w-7xl container mx-auto px-4'>
        <div className='md:flex flex-col pl-4 lg:w-6/12 xl:w-5/12 hidden justify-start'>
          <div className='text-4xl font-light text-[#253858] grid grid-rows-2 my-6'>

            <Fade triggerOnce>
              <Slide triggerOnce direction='down'>
                <div className='mb-2'>
                  <h1>Lets Find You</h1>
                </div>
              </Slide>
            </Fade>

            <Fade triggerOnce>
              <Slide triggerOnce direction='down'>
                <div>
                  <h1>the <strong style={{ fontSize: 40, }} className='font-bold'>Best Insurance</strong></h1>
                </div>
              </Slide>
            </Fade>
          </div>

          <div className='grid grid-cols-2 gap-4 my-4'>
            <Fade triggerOnce>
              <Slide triggerOnce direction='left'>
                <div style={{ fontSize: '16px' }} className='flex font-medium text-nowrap items-start gap-3 text-[#776bfd]'>
                  <div>
                    <MdChecklistRtl className='h-8 w-8' />
                  </div>
                  <div>

                    <p>50 insurers offering</p>
                    <p>lowest prices</p>
                  </div>
                </div>
              </Slide>
            </Fade>

            <Fade triggerOnce>
              <Slide triggerOnce direction='right'>
                <div style={{ fontSize: '16px' }} className='flex font-medium text-nowrap items-start gap-3 text-[#ff9b2c]'>
                  <div>
                    <BsLightningCharge className='h-8 w-8' />
                  </div>
                  <div>
                    <p>Quick, easy &</p>
                    <p>hassle free</p>
                  </div>
                </div>
              </Slide>
            </Fade>
          </div>

        </div>
        <div className='mt-10 justify-end lg:w-5/12 min-[320px]:w-full md:w-5/12'>
          <ImageCarousel />
        </div>
      </div> */}


      <Hero />
      <Insurances />
      <MiniSlider />
      {/* <AlsoBuy /> */}
      <WhyUs />
      <DynamicSlides />
      <AdvantageCards />
      <Testimonials />
      <section className="py-20 bg-[#f2f7ff] text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who trust RK Insurance for their insurance needs.</p>
          <Link
           to='#'
            className="py-3 px-8 rounded-full font-semibold bg-yellow-300 transition duration-300 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

    </>
  )
}

export default Home