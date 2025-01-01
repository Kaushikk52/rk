import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdown, setIsDropdownOpen] = useState(false);

  const navitems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Services",
      link: "/services",
    },
    {
      id: 3,
      name: "About",
      link: "/about-us",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact-us",
    },

  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdown)
  };

  return (
    <nav className="w-full bg-white text-black shadow-lg p-2">
      <div className="flex items-center justify-between  max-w-7xl container mx-auto">
        <div className="flex justify-start items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl my-2 mx-4 flex gap-2 items-start">
            <span className="text-[#ffd700]">RK</span>
            <span className="text-black">Insurance</span>
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex justify-center bg-gray-100 px-1.5 py-1 items-center list-none rounded">
          {navitems.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "md:text-base lg:text-lg font-semibold bg-[#ffd700] text-black py-1.5 px-6 md:py-1.5 md:px-4 lg:py-2 lg:px-6 cursor-pointer rounded transition-colors duration-300 ease-in-out"
                  : "md:text-base lg:text-lg font-medium py-2 px-6 md:py-1.5 md:px-4 lg:py-2 lg:px-6 cursor-pointer hover:text-[#ffd700] duration-300 ease-in-out"
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button onClick={toggleDropdown} className={`relative `}>
            <div className={`flex gap-1 px-2.5 items-center ${isDropdown ? 'text-yellow-400' : ''}`}>
            <p className="font-medium text-lg">Generators</p>
            <ChevronDown className={`${isDropdown ? 'rotate-180' : 'rotate-0'} transition-all duration-200 ease-in-out`} />
            </div>

            {isDropdown &&
              <div className="absolute top-10 left-0 bg-white w-56 p-2 space-y-1 z-50 rounded">
                <li className="">
                  <NavLink to='/offer-letter'
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-base lg:text-lg font-semibold block py-2 bg-[#ffd700] text-black transition-colors duration-300 ease-in-out"
                        : "md:text-base lg:text-lg font-medium block py-2 bg-gray-200 hover:bg-[#ffd700] duration-300 ease-in-out"
                    }>
                    Offer Letter
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to='/letter-head'
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-base lg:text-lg font-semibold block py-2 bg-[#ffd700] text-black transition-colors duration-300 ease-in-out"
                        : "md:text-base lg:text-lg font-medium block py-2 bg-gray-200 hover:bg-[#ffd700] duration-300 ease-in-out"
                    }>
                   Letter Head
                  </NavLink>
                </li>
              </div>
            }
          </button>
        </div>
        {/* Login button (hidden on mobile) */}
        <div className="hidden md:flex items-end justify-end">
          <button className="px-10 md:px-4 lg:px-10 py-1.5 md:py-1 lg:py-1.5 text-xl md:text-base lg:text-xl border-2 text-[#ffd700] border-[#ffd700] rounded hover:bg-[#ffd700] hover:border-transparent hover:text-black font-semibold  duration-200 ease-in-out transition-all">
            Login
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden my-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navitems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "block text-lg font-semibold bg-[#ffd700] text-black py-2 px-3 rounded transition-colors duration-300 ease-in-out"
                    : "block text-lg font-medium py-2 px-3 text-black hover:text-[#ffd700] duration-300 ease-in-out"
                }
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="px-4">
            <button className="w-full text-center uppercase py-2 text-base tracking-wide font-semibold border-2 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black rounded transition-colors duration-300 ease-in-out">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;