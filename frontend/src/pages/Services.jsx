import React from 'react'

import { Slide, Fade } from 'react-awesome-reveal'

import { BsFillLightningChargeFill } from "react-icons/bs";

const Services = () => {

  const services = [
    { id: 1, delay: 0, title: 'Title Here', description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur veniam dignissimos blanditiis. Expedita, unde nostrum. Veritatis est ex veniam.`, colspan: "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6", rowspan: "row-span-1" },
    { id: 2, delay: 150, title: 'Title Here', description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur veniam dignissimos blanditiis. Expedita, unde nostrum. Veritatis est ex veniam.`, colspan: "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6", rowspan: "row-span-1" },
    { id: 3, delay: 300, title: 'Title Here', description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur veniam dignissimos blanditiis. Expedita, unde nostrum. Veritatis est ex veniam.`, colspan: "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4", rowspan: "row-span-1" },
    { id: 4, delay: 450, title: 'Title Here', description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur veniam dignissimos blanditiis. Expedita, unde nostrum. Veritatis est ex veniam.`, colspan: "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4", rowspan: "row-span-1" },
    { id: 5, delay: 600, title: 'Title Here', description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur veniam dignissimos blanditiis. Expedita, unde nostrum. Veritatis est ex veniam.`, colspan: "col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4", rowspan: "row-span-1" },
  ]

  return (
    <>
      <div className='max-w-7xl container mx-auto px-4 my-10'>
        <div className='flex flex-col space-y-8 xs:text-center lg:text-left lg:flex-row lg:space-y-0 lg:justify-between lg:space-x-10 my-10'>

          <Fade triggerOnce className='lg:w-1/2'>
            <Slide triggerOnce direction='left'>
              <div>
                <h1 className='text-3xl lg:text-4xl font-semibold'>The Services that we've prepared for you</h1>
              </div>
            </Slide>
          </Fade>

          <Fade triggerOnce className='lg:w-1/2'>
            <Slide triggerOnce direction='right'>
              <div>
                <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, ea accusantium quam ipsa dolor, fugiat in rem soluta, iure quod obcaecati velit minima est consequatur sapiente suscipit fuga explicabo provident.</p>
              </div>
            </Slide>
          </Fade>

        </div>


        <div className="flex h-full w-full items-center justify-center">
          <div className="grid h-full w-full gap-6 grid-cols-12 grid-rows-2 ">
            {services.map((service) => (

              <Slide
                key={service.id}
                className={`${service.colspan} ${service.rowspan} bg-white border rounded-3xl px-8 py-2 flex flex-col items-start justify-center`}
                triggerOnce
                direction='up'
                delay={service.delay}
                >
                <Fade triggerOnce>
                  <div className='p-3 rounded-full my-4 bg-yellow-100 bg-opacity-85'>
                    <BsFillLightningChargeFill className='h-4 w-4 text-yellow-400 ' />
                  </div>
                  <div className='flex flex-col space-y-2 mb-4'>
                    <h1 className='text-xl font-semibold'>{service.title}</h1>
                    <p className='font-medium max-w-96 text-[15px]'>{service.description}</p>
                  </div>
                </Fade>
              </Slide>
            )
            )}

            {/* <div 
        className="col-span-5 row-span-1 bg-gray-200  flex items-center justify-center"
      >
        1
      </div> */}


          </div>
        </div>

      </div>
    </>
  )
}

export default Services