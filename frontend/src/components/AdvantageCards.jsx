import React from 'react'
import Bestprice from '../assets/advantage-images/best-price.png'
import Chat from '../assets/advantage-images/chat.png'
import Insignia from '../assets/advantage-images/insignia.png'
import Suport from '../assets/advantage-images/support.png'
import Student from '../assets/advantage-images/student.png'

const AdvantageCards = () => {
    const advantages = [
        { id: 1, image: Bestprice, title: 'Best Prices', text: 'Guaranteed', },
        { id: 2, image: Chat, title: 'Unbiased Advice', text: 'Keeping customers first', },
        { id: 3, image: Insignia, title: '100% Relaible', text: 'Regulated by IRDAI', },
        { id: 4, image: Suport, title: 'Claim Support', text: 'Made stress-free', },
        { id: 5, image: Student, title: 'Happy to help', text: 'Every day of the week', },
    ]
    return (
        <>
            <div className='max-w-7xl container mx-auto px-4'>
                <div className='text-center max-w-3xl mx-auto'>
                    <h1 className='text-4xl font-semibold text-[#253858] py-6'>RK Advantage</h1>
                    <p className='text-[#253858] font-medium text-lg'>When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.</p>
                </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 my-10'>
                {advantages.map((advantage) => (
                    <div key={advantage.id} className='group grid grid-rows-2 bg-white border rounded-sm py-10 px-2 hover:scale-[110%] hover:shadow-2xl hover:border-white transition-all duration-75 ease-in-out'>
                        <div className='row-span-1 content-end mx-auto'>
                            <img 
                            src={advantage.image} 
                            alt={advantage.title} 
                            className='h-24 w-24'
                            />
                        </div>
                        <div className='row-span-1 content-end mx-auto text-center'>
                            <h1 className='text-xl lg:text-lg xl:text-xl text-[#253858] font-semibold group-hover:font-bold mb-1 text-nowrap'>{advantage.title}</h1>
                            <p className='lg:text-sm font-medium text-gray-500 group-hover:font-semibold group-hover:text-sm text-nowrap'>{advantage.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default AdvantageCards