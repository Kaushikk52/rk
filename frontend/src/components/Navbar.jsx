import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav className="w-full bg-white text-black shadow-lg p-2 flex-row">
        <div className="text-xl font-semibold text-gray-800 uppercase flex justify-start items-start">
          <h1 className="font-bold text-2xl md:text-4xl my-2 mx-4 flex gap-2 items-start">
            <span className="text-[#ffd333]">RK</span>
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
        <div className="bg-gray-100 px-1.5 py-1 hidden md:flex items-center space-x-6 list-none rounded">
          {navitems.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold bg-[#ffd333] text-black py-1.5 px-6 cursor-pointer rounded transition-colors duration-300 ease-in-out"
                  : "text-lg font-medium py-2 px-6 cursor-pointer hover:text-[#ffd333] duration-300 ease-in-out"
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="hidden md:block">
          </div>
        </div>
            {/* Login button (hidden on mobile) */}
            <div className="items-end phone-none">
              <button className="px-10 py-1.5 border-2 text-[#ffd333] border-[#ffd333] rounded hover:bg-[#ffd333] hover:border-transparent hover:text-black font-semibold text-xl duration-200 ease-in-out transition-all">
                Login
              </button>
            </div>


      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navitems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "block text-xl font-medium bg-[#ffd333] text-black py-2 px-3 rounded transition-colors duration-300 ease-in-out"
                    : "block text-xl font-medium py-2 px-3 text-black hover:text-[#ffd333] duration-300 ease-in-out"
                }
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
            <button className="w-full text-left px-3 py-2 text-xl font-medium text-[#ffd333] hover:bg-[#ffd333] hover:text-black rounded transition-colors duration-300 ease-in-out">
              Login
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
