import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <>
      <Fade triggerOnce>
        <div className="w-full px-6 bg-[#15233c] text-white poppins-regular">
          <div className="max-w-7xl container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-14">
              {/* Social Media Links */}
              <div className="flex flex-col justify-center gap-6">
                <p className="text-[#a7a8b4] text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, voluptatibus?
                </p>
                <div className="flex space-x-1.5">
                  <a href="# facebook">
                    <button className="border border-gray-400 hover:border-white p-3 rounded-xl text-gray-400 hover:text-cyan-400 hover:-translate-y-1.5 duration-200 ease-in-out transition-all">
                      <FaFacebookF className="h-4 w-4" />
                    </button>
                  </a>

                  <a href="# twitter">
                    <button className="border border-gray-400 hover:border-white p-3 rounded-xl text-gray-400 hover:text-cyan-400 hover:-translate-y-1.5 duration-200 ease-in-out transition-all">
                      <FaTwitter className="h-4 w-4" />
                    </button>
                  </a>

                  <a href="# youtube">
                    <button className="border border-gray-400 hover:border-white p-3 rounded-xl text-gray-400 hover:text-cyan-400 hover:-translate-y-1.5 duration-200 ease-in-out transition-all">
                      <FaYoutube className="h-4 w-4" />
                    </button>
                  </a>

                  <a href="# linked in">
                    <button className="border border-gray-400 hover:border-white p-3 rounded-xl text-gray-400 hover:text-cyan-400 hover:-translate-y-1.5 duration-200 ease-in-out transition-all">
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
                    <FaLocationDot className="h-6 w-6" />
                    <p className="text-sm sm:text-base">
                      D - 319, Shanti Shopping Center, Mira road East,
                      Thane - 401107
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCall className="h-6 w-6" />
                    <p className="text-sm sm:text-base">+91 97029 58881/2</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdEmail className="h-6 w-6" />
                    <p className="text-sm sm:text-base">sales@msipl.co</p>
                  </div>
                </div>
              </div>

              {/* Quick Links Section */}
              <div>
                <h1 className="font-semibold text-xl py-4 text-left  sm:text-left">
                  Quick Links
                </h1>
                <div className="flex flex-col list-none">
                  <Link to="/">
                    <li className="flex items-center gap-3 py-1 group text-[#a7a8b4]">
                      <FaChevronRight />
                      <p className="group-hover:text-lg group-hover:text-white transition-all duration-200 ease-in-out">
                        Home
                      </p>
                    </li>
                  </Link>

                  <Link to="/about-us">
                    <li className="flex items-center gap-3 py-1 group text-[#a7a8b4]">
                      <FaChevronRight />
                      <p className="group-hover:text-lg group-hover:text-white transition-all duration-200 ease-in-out">
                        About Us
                      </p>
                    </li>
                  </Link>

                  <Link to="#">
                    <li className="flex items-center gap-3 py-1 group text-[#a7a8b4]">
                      <FaChevronRight />
                      <p className="group-hover:text-lg group-hover:text-white transition-all duration-200 ease-in-out">
                        Technology
                      </p>
                    </li>
                  </Link>

                  <Link to="/our-services">
                    <li className="flex items-center gap-3 py-1 group text-[#a7a8b4]">
                      <FaChevronRight />
                      <p className="group-hover:text-lg group-hover:text-white transition-all duration-200 ease-in-out">
                        Services
                      </p>
                    </li>
                  </Link>

                  <Link to="/conditions">
                    <li className="flex items-center gap-3 py-1 group text-[#a7a8b4]">
                      <FaChevronRight />
                      <p className="group-hover:text-lg group-hover:text-white transition-all duration-200 ease-in-out">
                        Terms & Conditions
                      </p>
                    </li>
                  </Link>
                </div>
              </div>
              <Fade triggerOnce delay={150}>
                {/* Map Section */}
                <div className="flex flex-col justify-start">
                  <h1 className="font-semibold text-xl py-4 text-left  sm:text-left">
                    Map
                  </h1>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d80172.43907467806!2d72.9667817250566!3d19.145985576050737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3be7bf58ffffffff%3A0x771ce664098bc6ad!2sManner%20%26%20Skill%20Integrated%20Services%20Pvt.%20Ltd.%2C%20R-243%2C%20MIDC%20Industrial%20Area%2C%20Rabale%2C%20Navi%20Mumbai%2C%20Maharashtra%20400701!3m2!1d19.1459091!2d73.00806709999999!5e1!3m2!1sen!2sin!4v1734085968018!5m2!1sen!2sin"
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
            <div className="flex space-x-1 text-[#a7a8b4] justify-center sm:justify-start">
              <p>©</p>
              <p className="text-cyan-500 hover:text-white transition-all cursor-pointer">
                RK Insurance Services 
              </p>
              <p>, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Footer;
