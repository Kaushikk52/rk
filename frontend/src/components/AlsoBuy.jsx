import React from 'react'

const AlsoBuy = () => {
    const data = [
        { id: 1, color: '#998dd9', category: 'Investment', text: 'LIC Plans', },
        { id: 2, color: '#998dd9', category: 'Term Life', text: 'Return of Premium', },
        { id: 3, color: '#998dd9', category: 'Term Life Health Insurance', text: 'Life Insurance for Housewives', },
        { id: 4, color: '#ff9a9a', category: 'Health Insurance', text: 'Day 1 Coverage', },
        { id: 5, color: '#ff9a9a', category: 'Health Insurance', text: '1 Cr Health Insurance', },
        { id: 6, color: '#ff9a9a', category: 'Health Insurance', text: 'Personal Accident', },
        { id: 7, color: '#00b8d9', category: 'Motor Insurance', text: 'Commercial Vehicles', },
        { id: 8, color: '#00b8d9', category: 'Business Insurance', text: 'Marine Insurance', },
        { id: 9, color: '#00b8d9', category: 'Business Insurance', text: 'Professional Indemnity for Doctors', },
        { id: 10, color: '#00b8d9', category: 'Business Insurance', text: 'Directors & Officers Liability', },
        { id: 11, color: '#00b8d9', category: 'Business Insurance', text: 'WorkMen Compensation', },
        { id: 12, color: '#6b778c', category: 'Other', text: 'Pet Insurance', },
    ]
    return (
        <>
            <div className='max-w-7xl container mx-auto px-4'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {data.map((item) => (
                        <div
                        style={{ borderColor: `${item.color}` }}
                            key={item.id}
                            className='flex flex-col justify-center border-2 bg-white rounded-lg shadow-sm md:shadow-md px-4 py-1.5'>
                            <p
                                style={{ color: `${item.color}` }}
                                className='md:text-xs font-semibold text-xs'>● {item.category}
                            </p>
                            <h1 className='md:text-lg lg:text-base font-semibold text-[#253858]'>{item.text}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AlsoBuy