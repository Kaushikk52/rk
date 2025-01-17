import { Fade} from 'react-awesome-reveal'

import Sell from '../assets/courses-images/sell.png'
import Explain from '../assets/courses-images/explain.png'

const Courses = () => {
    return (
        <>
            <div className='max-w-7xl container mx-auto px-4'>
                {/* Hero Section  */}
                <Fade triggerOnce>
                    <div className="py-16 text-center">
                        <h1 className="text-4xl text-[#253858] font-bold">Master Insurance Education</h1>
                        <p className="mt-4 text-lg text-[#253858]">
                            Learn everything about selling insurance and effectively pitching to customers.
                        </p>
                        {/* <button className="mt-6 px-6 py-3 text-black font-bold rounded bg-[#ffd700]">
                        Get Started
                    </button> */}
                    </div>
                </Fade>

                <Fade triggerOnce>
                    <div className="py-10 md:py-14 px-6 bg-gray-100">
                        <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
                            {/* Section 1 */}
                            <div className='flex flex-col-reverse gap-y-10 lg:gap-y-0 lg:flex-row lg:justify-between lg:space-x-10 lg:items-center'>
                                <div className='lg:w-7/12'>
                                    <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-center sm:text-left font-bold text-[#253858]">How to Sell Insurance</h2>
                                    <p className="mt-4 text-gray-700 leading-relaxed">
                                        Selling insurance is more than just presenting a product; it's about understanding
                                        customer needs and building trust. Learn step-by-step strategies to:
                                    </p>
                                    <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
                                        <li>Identify the right audience for specific insurance products.</li>
                                        <li>Communicate the value of insurance effectively.</li>
                                        <li>Build long-term relationships with customers.</li>
                                        <li>Overcome common objections during the sales process.</li>
                                    </ul>
                                </div>
                                <div className='flex items-center justify-center lg:w-5/12'>
                                    <img src={Sell} alt="sell image" className='h-64 min-[425px]:h-72 sm:h-80 md:h-[500px] lg:h-80 xl:h-96 w-full object-contain' />
                                </div>
                            </div>


                            {/* Section 2 */}
                            <div className='flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row lg:justify-between lg:space-x-10 lg:items-center'>
                                <div className='lg:w-5/12 flex items-center justify-center'>
                                    <img src={Explain} alt="explain image" className="h-64 min-[425px]:h-72 sm:h-80 md:h-[500px] lg:h-80 xl:h-96 w-full object-contain" />
                                </div>
                                <div className='lg:w-7/12'>
                                    <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-center sm:text-left font-bold text-[#253858]">How to Explain or Pitch to Customers</h2>
                                    <p className="mt-4 text-gray-700 leading-relaxed">
                                        A good pitch can make or break a sale. Learn how to deliver compelling presentations
                                        that resonate with potential customers. This section covers:
                                    </p>
                                    <ol className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
                                        <li>
                                            Preparing a clear and concise explanation of insurance policies.
                                        </li>
                                        <li>
                                            Understanding customer concerns and tailoring your pitch to their needs.
                                        </li>
                                        <li>
                                            Using storytelling techniques to make insurance concepts relatable.
                                        </li>
                                        <li>
                                            Closing the deal with confidence and professionalism.
                                        </li>
                                    </ol>
                                </div>
                            </div>



                        </div>
                    </div>
                </Fade>

                {/* <div className='pt-10'>
                    <Conditions />
                </div> */}

                {/* <Fade triggerOnce>
                <Slide triggerOnce direction='up' className='px-4'>
                    <div className=' flex justify-center min-[425px]:justify-end mb-10 '>
                        <button className="uppercase flex justify-center items-center gap-x-4 text-base mt-6 px-6 py-3 text-[#253858] font-bold rounded bg-[#ffd700]">
                            Pay Now <FaArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                </Slide>
                </Fade> */}

            </div>
        </>
    )
}

export default Courses