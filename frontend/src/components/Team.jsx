import React from 'react'

import { Link } from 'react-router-dom'

import { Fade, Slide} from 'react-awesome-reveal'

import { FaTwitter, FaFacebookF, FaInstagramSquare, FaLinkedinIn, } from "react-icons/fa";

import Member1 from '../assets/team-member-images/member-1.jpg'
import Member2 from '../assets/team-member-images/member-2.jpg'
import Member3 from '../assets/team-member-images/member-3.jpg'
import Member4 from '../assets/team-member-images/member-4.jpg'

const Team = () => {
    const teamMembers = [
        { id: 1, delay: 0, image: '/owner-1.jpeg', name: 'Rajesh L Singh', role: 'MD', },
        { id: 2, delay: 200, image: '/owner-2.jpeg', name: 'Kalpana Ashok Aher', role: 'MD', }
    ]
    return (
        <>
            <div className='max-w-7xl container mx-auto px-4 my-16'>
            <Fade triggerOnce>
                <Slide triggerOnce direction='up' className="text-[#253858] flex flex-col items-center justify-center text-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black">Meet Our Team</h1>
                        <p className="text-lg md:text-xl my-6 font-semibold">
                         Our team is the backbone of our commitment to providing exceptional service and reliable protection. Each member brings unique expertise and a shared passion for securing your future. Together, we work to build trust and deliver peace of mind, one policy at a time.
                        </p>
                    </div>
                </Slide>
            </Fade>
            
                <div className='flex gap-6 justify-center'>
                    {teamMembers.map((member) => (
                        <Fade triggerOnce>
                        <Slide triggerOnce direction='up' delay={member.delay}  key={member.id} className='flex flex-col justify-start  p-4 h-full bg-white rounded shadow-lg'>
                        <div>
                            <div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className='h-64 w-64 rounded object-contain'
                                />
                            </div>
                            <div className='text-center my-2.5'>
                                <h1 className='text-xl font-semibold'>{member.name}</h1>
                                <p className='text-lg font-medium'>{member.role}</p>
                            </div>
                            <div className='flex justify-center space-x-1.5 mb-2'>
                                <Link to='#' className='border-2 p-2 rounded text-[#253858] hover:bg-[#ffd700] hover:border-black hover:text-black transition-all duration-200 ease-in-out'>
                                    <FaFacebookF className='h-5 w-5' />
                                </Link>
                                <Link to='#' className='border-2 p-2 rounded text-[#253858] hover:bg-[#ffd700] hover:border-black hover:text-black transition-all duration-200 ease-in-out'>
                                    <FaTwitter className='h-5 w-5' />
                                </Link>
                                <Link to='#' className='border-2 p-2 rounded text-[#253858] hover:bg-[#ffd700] hover:border-black hover:text-black transition-all duration-200 ease-in-out'>
                                    <FaInstagramSquare className='h-5 w-5' />
                                </Link>
                                <Link to='#' className='border-2 p-2 rounded text-[#253858] hover:bg-[#ffd700] hover:border-black hover:text-black transition-all duration-200 ease-in-out'>
                                    <FaLinkedinIn className='h-5 w-5' />
                                </Link>
                            </div>
                        </div>
                        </Slide>
                        </Fade>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Team