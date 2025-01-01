import React from 'react';

import { Fade } from 'react-awesome-reveal'

import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';


export const ContactForm = () => {


    return (
        <Fade triggerOnce>
            <div className="max-w-7xl container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
                <div className="grid lg:grid-cols-2 gap-8">
                  
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
                        <div className="space-y-4">
                            <p className="flex items-start sm:items-center">
                                <FaEnvelope className="h-5 w-5 mr-2 text-blue-500" />
                                <span><strong>Email </strong>- rkinsurance@gmail.com</span>
                            </p>
                            <p className="flex items-start sm:items-center">
                                <FaPhone className="h-5 w-5 mr-2 text-blue-500" />
                                <span><strong>Phone </strong>- +91 8850036648</span>
                            </p>
                            <p className="flex items-start sm:items-center">
                                <FaClock className="h-5 w-5 mr-2 text-blue-500" />
                                <span><strong>Working Hours </strong>- Mon-Fri, 9AM-5PM</span>
                            </p>
                        </div>

                        
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2662.9978738381546!2d72.85625916425487!3d19.28029133906246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3be7b10062bf42db%3A0xee8237109f6d6a63!2sD%20Wing%20Shanti%20Shopping%20Centre%2C%20Shanti%20Path%2C%20Shanti%20Vihar%2C%20Ghatkopar%20EastMumbai%2C%20Mira%20Bhayandar%2C%20Maharashtra!3m2!1d19.280352!2d72.8576156!5e0!3m2!1sen!2sin!4v1735304207808!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                  
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="reason" className="block mb-1">Reason for Contact</label>
                                <select
                                    name="reason"
                                    className="w-full px-3 py-2 border rounded-md"
                                >
                                    <option value="">Select a reason</option>
                                    <option value="claims">Claims</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Customer Support</option>
                                    <option value="billing">Billing</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1">Message</label>
                                <textarea
                                    name="message"
                                    className="w-full px-3 py-2 border rounded-md"
                                    rows={4}
                                />
                            </div>
                            <button
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fade>
    );
};


