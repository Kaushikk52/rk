import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

    const navitems = [
        {
            id: 1,
            name: 'Home',
            link: '/',
        },
        {
            id: 2,
            name: 'Services',
            link: '/services',
        },
        {
            id: 3,
            name: 'About',
            link: '/about-us',
        },
        {
            id: 4,
            name: 'Contact',
            link: '/contact-us',
        },
    ]

    return (
        <>
            <div className='w-full bg-white text-black shadow-lg p-2'>
                <div className='flex items-center justify-between max-w-7xl container mx-auto '>
                    <div>
                        <h1 className='font-bold text-4xl my-2 mx-4 flex gap-2 items-end text-[#ffd333]'>RK<h1 className='text-black text-4xl'>Insurance</h1></h1>
                    </div>
                    <div className='bg-gray-100 px-1.5 py-1 flex items-center list-none rounded'>
                        {navitems.map(item => (
                            <NavLink
                                key={item.id}
                               to={item.link}
                                className={({ isActive }) =>
                                    isActive ? 'text-xl font-medium bg-[#ffd333] text-black py-1.5 px-6 cursor-pointer rounded transition-colors duration-300 ease-in-out' : 'text-xl font-medium py-2 px-6 cursor-pointer hover:text-[#ffd333] duration-300 ease-in-out'
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div>
                       <button className='px-10 py-1.5 border-2 text-[#ffd333] border-[#ffd333] rounded hover:bg-[#ffd333] hover:border-transparent hover:text-black font-semibold text-xl duration-200 ease-in-out transition-all'>
                        Login
                       </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar