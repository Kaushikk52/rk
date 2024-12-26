import React from 'react'

import TeamBG1 from '../assets/about-us-images/team-1.jpg'
import Team2 from '../assets/about-us-images/team-2.png'
import House from '../assets/about-us-images/home-insurance.png'

const About = () => {
  return (
    <>
      <div className='w-full'>
        <div style={{ backgroundImage: `url(${TeamBG1})` }} className='relative w-full h-[450px] bg-cover bg-center'>
          <div className='absolute h-full w-full bg-zinc-900 bg-opacity-60 text-white  top-0 left-0'>
            <div className='absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <h1 className='text-4xl font-black mb-4'>Your Trusted Partner in Insurance Protection</h1>
              {/* <p className='text-xl font-bold'>Empowering you with tailored insurance solutions that safeguard your future, today.</p> */}
              <div className='flex justify-center items-center space-x-6 my-8'>
                <button className='border-2 border-transparent bg-[#ffd700] text-black px-8 py-3.5 text-xl font-semibold rounded'>Explore Plans</button>
                <button className='border-2 border-[#ffd700] text-[#ffd700] px-8 py-3.5 text-xl font-semibold rounded'>Contact us</button>
              </div>
              <p className='text-xl font-semibold'>Because your peace of mind is our priority.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl container mx-auto px-4 w-full">
  {/* Section 1 */}
  <div className="flex flex-col md:flex-row justify-between items-center my-10">
    <div className="md:w-1/2 mb-6 md:mb-0">
      <img src={Team2} alt="team image" className="w-full rounded-md" />
    </div>
    <div className="md:w-1/2 text-[#253858] md:pl-8">
      <h1 className="text-4xl md:text-6xl font-black">Why We Exist</h1>
      <p className="text-lg md:text-xl my-6 font-semibold">
        Our mission is to provide individuals, families, and businesses with insurance products that deliver security and peace of mind. At RK Insurance, we envision a world where everyone can live confidently, knowing they are well-protected.
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="flex flex-col md:flex-row-reverse justify-between items-center mb-10">
    <div className="md:w-1/2 mb-6 md:mb-0">
      <img src={House} alt="team image" className="w-full rounded-md" />
    </div>
    <div className="md:w-1/2 text-[#253858] md:pr-8">
      <h1 className="text-4xl md:text-6xl font-black">Our Vision</h1>
      <p className="text-lg md:text-xl my-6 font-semibold">
        We strive to create a future where insurance is accessible, simple, and impactful. Our commitment is to empower our clients with the confidence to face life’s uncertainties.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default About