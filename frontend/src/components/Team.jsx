import React from 'react'

import { Link } from 'react-router-dom'

import { Fade, Slide } from 'react-awesome-reveal'

import { FaTwitter, FaFacebookF, FaInstagramSquare, FaLinkedinIn, } from "react-icons/fa";

import Member1 from '../assets/team-member-images/member-1.jpg'
import Member2 from '../assets/team-member-images/member-2.jpg'
import Member3 from '../assets/team-member-images/member-3.jpg'
import Member4 from '../assets/team-member-images/member-4.jpg'

const Team = () => {
    const teamMembers = [
        { id: 1, delay: 0, image: '/owner-1.jpeg', name: 'Rajesh L Singh', position: 'MD', Exp: '17 Year In insurance company.', education: 'Graduate with science, Post graduation', },
        { id: 2, delay: 200, image: '/owner-2.jpeg', name: 'Kalpana Ashok Aher', position: 'MD', Exp: '15 Years in insurance.', education: 'Graduate with arts MBA Finance ( Pune University)', text: 'Lic & Edelweiss life insurance company.' }
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

                {/* <div className='flex gap-6 justify-center'>
                    {teamMembers.map((member) => (
                        <Fade triggerOnce>
                            <Slide triggerOnce direction='up' delay={member.delay} key={member.id} className='flex flex-col justify-start max-w-[330px]  p-4 h-full bg-white rounded shadow-lg'>
                                <div>
                                    <div className='flex justify-center items-center'>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className='h-64 w-64 rounded object-cover object-top'
                                        />
                                    </div>
                                    <div className='text-center my-2.5'>
                                        <h1 className='text-xl font-semibold'>{member.name}</h1>
                                        <p className='text-lg font-medium'><strong>Position:</strong> {member.position}</p>
                                        <p className='text-lg font-medium mt-2'>{member.Exp}</p>
                                        <p className='text-lg font-medium '>{member.education}</p>
                                        <p className='text-lg font-medium '>{member.text}</p>
                                    </div>

                                </div>
                            </Slide>
                        </Fade>
                    ))}
                </div> */}

                <div className='grid grid-cols-2 gap-4'>
                    {teamMembers.map((member, index) =>
                        <div key={index} className='grid grid-cols-12 bg-gray-100 shadow-md rounded-md'>
                            <div className='col-span-5'>
                                <img src={member.image} alt={member.name} className='aspect-[11/12] object-cover object-top rounded-md' />
                            </div>
                            <div className='col-span-7 flex flex-col justify-center space-y-4 p-4'>
                                <p className='text-xl text-center mb-4 font-semibold'>{member.name}</p>
                                <p className='text-base'><span className='font-semibold'>Position : </span> {member.position}</p>
                                <p className='text-base'><span className='font-semibold'>Education : </span> {member.education}</p>
                                <p className='text-base'><span className='font-semibold'>Experience : </span> {member.Exp}</p>
                                <p className='text-base'>{member.text}</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Team