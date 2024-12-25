import React from 'react'
import Umbrella from '../assets/insurance-images/umbrella.png'
import Heart from '../assets/insurance-images/heart.png'
import Profit from '../assets/insurance-images/profit.png'
import Car from '../assets/insurance-images/car.png'
import Scooter from '../assets/insurance-images/scooter.png'
import Family from '../assets/insurance-images/family.png'
import Flight from '../assets/insurance-images/flight.png'
import Money from '../assets/insurance-images/money.png'
import Strategy from '../assets/insurance-images/strategy.png'
import Savings from '../assets/insurance-images/savings.png'
import Superhero from '../assets/insurance-images/superhero.png'
import Man from '../assets/insurance-images/man.png'
import Users from '../assets/insurance-images/users.png'
import House from '../assets/insurance-images/house.png'

const Insurances = () => {
    const insurances = [
        { id: 1, image: Umbrella, type: 'Term Life Insurance', message: 'Upto 10% Discount', msgBg: '#b6f4b4' },
        { id: 2, image: Heart, type: 'Health Insurance', message: 'FREE Home Visit', msgBg: '#b6f4b4' },
        { id: 3, image: Profit, type: 'Investment Plans', message: 'In-Built Life Cover', msgBg: '#b6f4b4' },
        { id: 4, image: Car, type: 'Car Insurance', message: 'Upto 85% Discount', msgBg: '#b6f4b4' },
        { id: 5, image: Scooter, type: '2 Wheeler Insurance' },
        { id: 6, image: Family, type: 'Family Health Insurance', message: 'Upto 25% Discount', msgBg: '#b6f4b4' },
        { id: 7, image: Flight, type: 'Travel Insurance', },
        { id: 8, image: Superhero, type: 'Term Insurance (Women)', message: 'Upto 20% Cheaper', msgBg: '#b6f4b4' },
        { id: 9, image: Money, type: 'Term Plans with Return of Premium',  },
        { id: 10, image: Strategy, type: 'Gurenteed Return Plans', },
        { id: 11, image: Savings, type: 'Child Saving Plans', message: 'Premium Waiver', msgBg: '#f4a4a1' },
        { id: 12, image: Man, type: 'Retirement Plans',  },
        { id: 13, image: Users, type: 'Employee Group Health Insurance', message: 'Upto 65% Discount', msgBg: '#b6f4b4' },
        { id: 14, image: House, type: 'Home Insurance', message: 'Upto 25% Discount', msgBg: '#b6f4b4' },
    ]
    return (
        <>
        <div className='max-w-7xl container mx-auto px-4'>
            <div className='grid grid-cols-2 xs:grid-cols-3  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 py-16'>
                {insurances.map((insurance) => (
                    <div key={insurance.id} className='flex flex-col items-center'>
                        <div className='relative bg-[#f2f7ff] py-3.5 px-10 rounded-md'>
                            <img
                                src={insurance.image}
                                alt={insurance.type}
                                className='w-11 h-11 mt-2.5'
                            />
                                {insurance.message ? (
                                    <p style={{fontSize: '11px', backgroundColor: `${insurance.msgBg}`}} className='absolute font-semibold tracking-tight left-0 top-0 right-0 text-[#253858] text-center rounded-t-md py-[1px]'>{insurance.message}</p>
                                ) : (
                                    <p></p>
                                )}
                        </div>
                        <div className='text-center my-2'>
                            <p className='text-[#253858] text-sm  font-semibold'>{insurance.type}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Insurances