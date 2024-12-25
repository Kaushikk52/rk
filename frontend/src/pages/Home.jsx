import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import { MdChecklistRtl } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import Insurances from '../components/Insurances';
import AdvantageCards from '../components/AdvantageCards';
import WhyUs from '../components/WhyUs';
import AlsoBuy from '../components/AlsoBuy';
import DynamicSlides from '../components/DynamicSlides';
import Testimonials from '../components/Testimonials';
import MiniSlider from '../components/MiniSlider';

const Home = () => {
  return (
    <>
      <div className='flex items-center justify-between max-w-7xl container mx-auto px-4'>
        <div className='md:flex flex-col pl-4 lg:w-6/12 hidden justify-start'>
          <div className='text-4xl font-light text-[#253858] grid grid-rows-2 my-6'>
            <div className='mb-2'>
              <h1>Lets Find You</h1>
            </div>
            <div>
              <h1>the <strong style={{ fontSize: 40,}} className='font-bold'>Best Insurance</strong></h1>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 my-4'>
            <div style={{ fontSize: '16px' }} className='flex font-medium text-nowrap items-start gap-3 text-[#776bfd]'>
              <div>
                <MdChecklistRtl className='h-8 w-8' />
              </div>
              <div>

                <p>50 insurers offering</p>
                <p>lowest prices</p>
              </div>
            </div>
            <div style={{ fontSize: '16px' }} className='flex font-medium text-nowrap items-start gap-3 text-[#ff9b2c]'>
              <div>
                <BsLightningCharge className='h-8 w-8' />
              </div>
              <div>
                <p>Quick, easy &</p>
                <p>hassle free</p>
              </div>
            </div>
          </div>

        </div>
        <div className='mt-10 justify-end lg:w-5/12 min-[320px]:w-full md:w-5/12'>
          <ImageCarousel />
        </div>
      </div>
      <Insurances />
      <MiniSlider />
      <AlsoBuy />
      <DynamicSlides />
        <WhyUs />
        <Testimonials />
      <AdvantageCards />
    </>
  )
}

export default Home