import React, { useEffect, useState } from 'react';
import { Zoom, Slide, Fade } from 'react-awesome-reveal';

const WhyUs = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileView(true)
      } else {
        setMobileView(false)
      }
    }

    // Set initial value
    handleResize()

    // Add resize event listener
    window.addEventListener("resize", handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const hexToRgb = (hex) => {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };


  const information = [
    { id: 1, delay: 100, title: 'Over 9 million', text: 'customers trust us & have bought their insurance on Policybazaar', emoji: '🎉', color: '#2d3cd9' },
    { id: 2, delay: 300, title: '50 insurers', text: 'partnered with us so that you can compare easily & transparently', emoji: '🔍', color: '#0bbdf2', transform: '25%' },
    { id: 3, delay: 500, title: 'Great Price', text: 'for all kinds of insurance plans available online', emoji: '🤩', color: '#47d990' },
    { id: 4, delay: 700, title: 'Claims', text: 'support built in with every policy for help, when you need it the most', emoji: '👩🏻‍🦰', color: '#ffc400', transform: '25%' },
  ];

  return (
    <div className='max-w-7xl container mx-auto px-4 lg:px-6 xl:px-4'>
      <div className='flex flex-col justify-center lg:flex-row lg:justify-between items-center'>
        <div className='text-4xl lg:text-3xl xl:text-4xl lg:w-11/12 xl:w-5/6 text-left lg:text-left md:text-center'>

          <Fade triggerOnce>
            <Slide triggerOnce direction='left' duration={1500}>

              <div className='hidden lg:flex lg:flex-col lg:space-y-2.5 text-[#253858] font-light'>
                <p>What makes</p>
                <p><strong style={{ fontSize: 42, }} className='font-bold'>RK Insurance</strong> one of</p>
                <p><strong style={{ fontSize: 42, }} className='font-bold'>India's favourite places</strong></p>
                <p>to <strong style={{ fontSize: 42, }} className='font-bold'>buy insurance ?</strong></p>
              </div>
            </Slide>
          </Fade>

          <div className='lg:hidden text-center text-[#253858] font-light'>
            <Fade triggerOnce>
              <Slide triggerOnce direction='up' duration={1200}>
                <p>
                  What makes
                  <strong style={{ fontSize: 42, }} className='font-bold'> RK Insurance </strong>
                  one of
                  <strong style={{ fontSize: 42, }} className='font-bold'> India's favourite places </strong>
                  to
                  <strong style={{ fontSize: 42, }} className='font-bold'> buy insurance ?</strong>
                </p>
              </Slide>
            </Fade>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 my-10'>
          {information.map((info) => (
            <Zoom
              key={info.id}
              triggerOnce
              delay={info.delay}
              duration={1000}
              style={{
                transform: info.transform && mobileView ? 'none' : `translateY(${info.transform})`,
                borderColor: info.color,
                color: info.color,
                boxShadow: `0px 6px 10px rgba(${hexToRgb(info.color)}, 0.3)`,

              }}
              className={`flex flex-col space-y-2 bg-white border-l-2 py-4 px-6 rounded-e-2xl shadow-md md:shadow-lg `}
            >
              <div>
                <div>
                  {/* Add the class rotate-item to the emoji */}
                  <p className='text-3xl content-end mb-1'>
                    {info.emoji}
                  </p>
                </div>
                <div className='content-start'>
                  <p className='text-3xl font-semibold drop-shadow-sm'>{info.title}</p>
                </div>
                <div className='content-start'>
                  <p className='text-gray-600 py-2'>{info.text}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
