// import React from 'react'
// import Umbrella from '../assets/insurance-images/umbrella.png'
// import Heart from '../assets/insurance-images/heart.png'
// import Profit from '../assets/insurance-images/profit.png'
// import Car from '../assets/insurance-images/car.png'
// import Scooter from '../assets/insurance-images/scooter.png'
// import Family from '../assets/insurance-images/family.png'
// import Flight from '../assets/insurance-images/flight.png'
// import Money from '../assets/insurance-images/money.png'
// import Strategy from '../assets/insurance-images/strategy.png'
// import Savings from '../assets/insurance-images/savings.png'
// import Superhero from '../assets/insurance-images/superhero.png'
// import Man from '../assets/insurance-images/man.png'
// import Users from '../assets/insurance-images/users.png'
// import House from '../assets/insurance-images/house.png'

// const Insurances = () => {
//     const insurances = [
//         { id: 1, image: Umbrella, type: 'Term Life Insurance', message: 'Upto 10% Discount', msgBg: '#b6f4b4' },
//         { id: 2, image: Heart, type: 'Health Insurance', message: 'FREE Home Visit', msgBg: '#b6f4b4' },
//         { id: 3, image: Profit, type: 'Investment Plans', message: 'In-Built Life Cover', msgBg: '#b6f4b4' },
//         { id: 4, image: Car, type: 'Car Insurance', message: 'Upto 85% Discount', msgBg: '#b6f4b4' },
//         { id: 5, image: Scooter, type: '2 Wheeler Insurance' },
//         { id: 6, image: Family, type: 'Family Health Insurance', message: 'Upto 25% Discount', msgBg: '#b6f4b4' },
//         { id: 7, image: Flight, type: 'Travel Insurance', },
//         { id: 8, image: Superhero, type: 'Term Insurance (Women)', message: 'Upto 20% Cheaper', msgBg: '#b6f4b4' },
//         { id: 9, image: Money, type: 'Term Plans with Return of Premium',  },
//         { id: 10, image: Strategy, type: 'Gurenteed Return Plans', },
//         { id: 11, image: Savings, type: 'Child Saving Plans', message: 'Premium Waiver', msgBg: '#f4a4a1' },
//         { id: 12, image: Man, type: 'Retirement Plans',  },
//         { id: 13, image: Users, type: 'Employee Group Health Insurance', message: 'Upto 65% Discount', msgBg: '#b6f4b4' },
//         { id: 14, image: House, type: 'Home Insurance', message: 'Upto 25% Discount', msgBg: '#b6f4b4' },
//     ]
//     return (
//         <>
//         <div className='max-w-7xl container mx-auto px-4'>
//             <div className='grid grid-cols-2 xs:grid-cols-3  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 py-16'>
//                 {insurances.map((insurance) => (
//                     <div key={insurance.id} className='flex flex-col items-center'>
//                         <div className='relative bg-[#f2f7ff] py-3.5 px-10 rounded-md'>
//                             <img
//                                 src={insurance.image}
//                                 alt={insurance.type}
//                                 className='w-11 h-11 mt-2.5'
//                             />
//                                 {insurance.message ? (
//                                     <p style={{fontSize: '11px', backgroundColor: `${insurance.msgBg}`}} className='absolute font-semibold tracking-tight left-0 top-0 right-0 text-[#253858] text-center rounded-t-md py-[1px]'>{insurance.message}</p>
//                                 ) : (
//                                     <p></p>
//                                 )}
//                         </div>
//                         <div className='text-center my-2'>
//                             <p className='text-[#253858] text-sm  font-semibold'>{insurance.type}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             </div>
//         </>
//     )
// }

// export default Insurances



import React, { useState } from 'react'
import { Building2, Car, BikeIcon, Heart, Umbrella, Users, Search, Route } from 'lucide-react'
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom'
import MoreInsuranceModal from './MoreInsuranceModal';

const Insurances = () => {
    const insurances = [
        { id: 1, delay: 0, category: 'property-insurance', icon: <Building2 className='h-12 w-12 sm:h-24 sm:w-24 ' />, title: 'Property', colSpan: 'col-span-10 sm:col-span-10 md:col-span-9 lg:col-span-3', rowSpan: 'row-span-8' },
        { id: 2, delay: 150, category: 'auto-insurance', icon: <Car className='h-12 w-12 ' />, title: 'Auto', colSpan: 'col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2', rowSpan: 'row-span-4' },
        { id: 3, delay: 300, category: 'motor-cycle-insurance', icon: <BikeIcon className='h-12 w-12 ' />, title: 'Motorcycle', colSpan: 'col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2', rowSpan: 'row-span-4' },
        { id: 4, delay: 450, category: 'health-insurance', icon: <Heart className='h-12 w-12 ' />, title: 'Health', colSpan: 'col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2', rowSpan: 'row-span-4' },
        { id: 5, delay: 600, category: 'life-insurance', icon: <Umbrella className='h-12 w-12 ' />, title: 'Life', colSpan: 'col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2', rowSpan: 'row-span-4' },
        { id: 6, delay: 750, category: 'family-health-insurance', icon: <Users className='h-12 w-12 ' />, title: 'Family Health', colSpan: 'col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2', rowSpan: 'row-span-4' },
    ];

    const [ModalOpen, setModalOpen] = useState(false);

    const handleShow = () => setModalOpen(true) 
    const handleClose = () => setModalOpen(false)
    


    return (
        <div className='max-w-7xl container mx-auto px-4 my-10'>
            <Slide triggerOnce direction='up'>
                <div className='max-w-2xl mx-auto text-left min-[425px]:text-center py-6'>
                    <h1 className='text-3xl md:text-4xl font-semibold text-[#253858]'>Explore Comprehensive Insurance Plans with RK Insurance</h1>
                </div>
            </Slide>

            <div className="flex h-full w-full items-center justify-center">

                <div className="h-full w-full my-8 grid grid-cols-10 grid-rows-8 md:grid-cols-9 md:grid-rows-8 gap-4">
                    {insurances.map((insurance) => (
                        <Slide
                            triggerOnce
                            direction='up'
                            delay={insurance.delay}
                            key={insurance.id}
                            className={`${insurance.colSpan} ${insurance.rowSpan} relative shadow-md border flex flex-col items-center justify-center p-4 overflow-hidden group hover:shadow-lg`}

                        >
                            <Fade triggerOnce>
                                <Link
                                    to={`/insurance-details/${insurance.category}`}
                                >
                                    <div className='flex flex-col items-center'>
                                        <div className="absolute bottom-0 left-0 w-full h-full bg-blue-500 transform scale-y-0 origin-bottom transition-all duration-300 group-hover:scale-y-100 z-10"></div>
                                        <div className="mb-2 text-blue-500 group-hover:text-white duration-300 transition-all ease-in-out z-20">{insurance.icon}</div>
                                        <p className="text-base font-semibold py-0.5 px-10 lg:px-7 xl:px-10 rounded bg-[#ffd700] z-20 ">{insurance.title}</p>
                                    </div>
                                </Link>
                            </Fade>
                        </Slide>
                    ))}
                    <Slide triggerOnce direction='up' delay={900} className='relative col-span-10 sm:col-span-5 md:col-span-3 lg:col-span-2 row-span-4 shadow-md border p-4 flex flex-col items-center justify-center overflow-hidden group hover:shadow-lg'>
                        <button onClick={handleShow} className='flex flex-col items-center justify-center'>
                            <div className="absolute bottom-0 left-0 w-full h-full bg-blue-500 transform scale-y-0 origin-bottom transition-all duration-300 group-hover:scale-y-100 z-10"></div>
                            <div className="mb-2 text-blue-500 group-hover:text-white duration-300 transition-all ease-in-out z-20"> <Search className='h-12 w-12 ' /></div>
                            <p className="text-base font-semibold py-0.5 px-10 lg:px-7 xl:px-10 rounded bg-[#ffd700] z-20 ">More</p>
                        </button>
                    </Slide>

                   
                    <MoreInsuranceModal handleClose={handleClose} handleShow={handleShow} ModalOpen={ModalOpen} />

                </div>
            </div>
        </div>

    );
};

export default Insurances;
