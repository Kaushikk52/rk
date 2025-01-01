import React from "react";

import { NavLink } from "react-router-dom";

import { Fade } from "react-awesome-reveal";

import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaChevronRight } from "react-icons/fa";
import { FaLocationDot, FaEnvelope, FaPhone   } from "react-icons/fa6";


const Footer = () => {

  const navigationLinks = [
    { goto: '/', linkText: 'Home', },
    { goto: '/about-us', linkText: 'About us', },
    { goto: '/contact-us', linkText: 'Contact us', },
    { goto: '/services', linkText: 'Services', },
    { goto: '/conditions', linkText: 'Terms & Conditions', },
  ]

  return (
    <>
      <Fade triggerOnce>
        <div className="w-full px-6 bg-[#15233c] text-white poppins-regular">
          <div className="max-w-7xl container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-14">

              {/* Social Media Links */}
              <div className="flex flex-col justify-center gap-6">
                <p className="text-[#a7a8b4] text-sm sm:text-base">
                  RK Insurance one of India's favourite places to buy insurance
                </p>
                <div className="flex space-x-1.5">
                  <a href="# facebook">
                    <button className="border border-gray-400 hover:border-[#ffd700] p-3 rounded text-gray-400 hover:text-[#ffd700] hover:-translate-y-1.5 duration-200 ease-in-out transition-all">
                      <FaFacebookF className="h-4 w-4" />
                    </button>
                  </a>

                  <a href="# twitter">
                    <button className="border border-gray-400 hover:border-[#ffd700] p-3 rounded text-gray-400 hover:text-[#ffd700] hover:-translate-y-1.5 duration-200 ease-in-out transition-all">
                      <FaTwitter className="h-4 w-4" />
                    </button>
                  </a>

                  <a href="# youtube">
                    <button className="border border-gray-400 hover:border-[#ffd700] p-3 rounded text-gray-400 hover:text-[#ffd700] hover:-translate-y-1.5 duration-200 ease-in-out transition-all">
                      <FaYoutube className="h-4 w-4" />
                    </button>
                  </a>

                  <a href="# linked in">
                    <button className="border border-gray-400 hover:border-[#ffd700] p-3 rounded text-gray-400 hover:text-[#ffd700] hover:-translate-y-1.5 duration-200 ease-in-out transition-all">
                      <FaLinkedinIn className="h-4 w-4" />
                    </button>
                  </a>
                </div>
              </div>

              {/* Address Section */}
              <div>
                <h1 className="font-semibold text-xl py-4 text-left  sm:text-left">
                  Address
                </h1>
                <div className="flex flex-col space-y-4 text-[#a7a8b4]">
                  <div className="flex items-start space-x-4">
                    <FaLocationDot className="h-6 w-6 lg:h-8 lg:w-8 xl:h-7 xl:w-7" />
                    <p className="text-sm sm:text-base">
                    OFFICE NO. D-319, 2ND FLOOR, SHANTI SHOPPING CENTRE, OPP. MIRA ROAD RAILWAY STATION, MIRA ROAD (EAST),  THANE , Pin 401107
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaPhone  className="h-5 w-5" />
                    <p className="text-sm sm:text-base">+91 8850036648</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope  className="h-5 w-5" />
                    <p className="text-sm sm:text-base">hr@rkinsuranceservice.in</p>
                  </div>
                </div>
              </div>

              {/* Quick Links Section */}
              <div>
                <h1 className="font-semibold text-xl py-4 text-left  sm:text-left">
                  Quick Links
                </h1>

                <div className="flex flex-col list-none">
                  {navigationLinks.map((link, index) => (

                  <NavLink
                    key={index}
                    to={link.goto}
                    className={({ isActive }) =>
                      isActive ? "text-[#ffd700] text-lg" : "text-[#a7a8b4] group"
                    }
                  >
                    <li className="flex items-center gap-3 py-1 group-hover:text-lg group-hover:text-[#ffd700] transition-all duration-200 ease-in-out">
                      <FaChevronRight />
                      <p>{link.linkText}</p>
                    </li>
                  </NavLink>
                  ))}
                </div>

              </div>

              <Fade triggerOnce delay={150}>
                {/* Map Section */}
                <div className="flex flex-col justify-start">
                  <h1 className="font-semibold text-xl py-4 text-left  sm:text-left">
                    Map
                  </h1>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2662.9978738381546!2d72.85625916425487!3d19.28029133906246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3be7b10062bf42db%3A0xee8237109f6d6a63!2sD%20Wing%20Shanti%20Shopping%20Centre%2C%20Shanti%20Path%2C%20Shanti%20Vihar%2C%20Ghatkopar%20EastMumbai%2C%20Mira%20Bhayandar%2C%20Maharashtra!3m2!1d19.280352!2d72.8576156!5e0!3m2!1sen!2sin!4v1735304207808!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Fade>

            </div>
          </div>

          <hr />

          <div className="max-w-7xl container mx-auto py-6">
            <div className="flex space-x-1 text-[#a7a8b4] justify-center text-center sm:justify-start">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <NavLink
                to='/'
                >
                <p className="text-[#ffd700] cursor-pointer">
                  © RK Insurance Services,
                </p>
                </NavLink>
                <p>All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Footer;
