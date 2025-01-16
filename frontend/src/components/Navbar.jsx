import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {

  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

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
    {
      id: 5,
      name: "Courses",
      link: "/courses",
    },
  ];

  const generatorItems = [
    { id: 1, name: "Offer Letter", link: "/offer-letter" },
    { id: 2, name: "Letter Head", link: "/letter-head" },
    { id: 3, name: "Appointment Letter", link: "/appointment-letter" },
  ];

  const isGeneratorActive = ['/offer-letter', '/letter-head', '/appointment-letter'].some((path) =>
    location.pathname.startsWith(path)
  );

  useEffect(() => {
    if(isGeneratorActive) {
      setIsMobileDropdownOpen(true);
    } else {
      setIsMobileDropdownOpen(false);
    }
  },isMobileDropdownOpen)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className="w-full bg-white text-black shadow-lg py-2 px-4">
      <div className="flex items-center justify-between max-w-7xl container mx-auto">
        <div className="flex justify-start items-center">
          <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl my-2  flex gap-2 items-start">
            <span className="text-[#ffd700]">RK</span>
            <span className="text-[#253858]">Insurance</span>
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
                className="h-7 w-7"
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
              onClick={() => { setIsDesktopDropdownOpen(false) }}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "md:text-xs lg:text-sm xl:text-lg font-semibold bg-[#ffd700] text-[#253858] py-1.5 px-6 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 cursor-pointer rounded transition-colors duration-300 ease-in-out"
                  : "md:text-xs lg:text-sm xl:text-lg font-medium text-[#253858] py-2 px-6 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 cursor-pointer hover:text-[#ffd700] duration-300 ease-in-out"
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button
            className={`relative`}
            onMouseEnter={() => {setIsDesktopDropdownOpen(true)}}
            onMouseLeave={() => {setIsDesktopDropdownOpen(false)}}
            >
            <div className={`flex gap-1 px-2.5 py-2 rounded items-center ${isGeneratorActive ? 'bg-[#ffd700] text-[#253858]' : ''}`}>
              <p className={`font-medium md:text-xs lg:text-sm xl:text-lg `}>Generators</p>
              <ChevronDown className={`${isDesktopDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200 ease-in-out`} />
            </div>

            {isDesktopDropdownOpen && (
              <div className="absolute top-10 left-0 bg-white w-56 p-2 space-y-1 z-50 rounded">
                {generatorItems.map((item) => (
                  <li key={item.id} className="">
                    <NavLink
                      onClick={() => { setIsDesktopDropdownOpen(false) }}
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? "md:text-sm lg:text-sm xl:text-lg font-semibold block py-2 bg-[#ffd700] text-[#253858] transition-colors duration-300 ease-in-out"
                          : "md:text-sm lg:text-sm xl:text-lg font-medium block py-2 bg-gray-100 text-[#253858] hover:bg-[#ffd700] duration-300 ease-in-out"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </div>
            )}
          </button>
        </div>
        {/* Login button (hidden on mobile) */}
        <div className="hidden md:flex items-end justify-end">
          <button className="px-10 md:px-3 lg:px-8 xl:px-10 py-1.5 md:py-1 lg:py-1.5 text-xl  md:text-sm lg:text-lg xl:text-xl border-2 text-[#ffd700] border-[#ffd700] rounded hover:bg-[#ffd700] hover:border-transparent hover:text-[#253858] font-semibold duration-200 ease-in-out transition-all">
            Pay Now
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
                onClick={closeMenu}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "block text-lg font-semibold bg-[#ffd700] text-[#253858] py-2 px-3 rounded transition-colors duration-300 ease-in-out"
                    : "block text-lg font-medium py-2 px-3 text-[#253858] hover:text-[#ffd700] duration-300 ease-in-out"
                }
            
              >
                {item.name}
              </NavLink>
            ))}
            <div className={`relative `}>
              <button
                onClick={toggleMobileDropdown}
                className={`flex justify-between items-center w-full py-2 px-3 text-lg font-medium rounded text-[#253858] ${isGeneratorActive ? 'bg-[#ffd700] font-semibold' : ''} `}
              >
                Generators
                <ChevronDown className={`${isMobileDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200 ease-in-out`} />
              </button>
              {isMobileDropdownOpen && (
                <div className="bg-gray-100 rounded mt-1">
                  {generatorItems.map((item) => (
                    <NavLink
                      key={item.id}
                      onClick={closeMenu}
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? "block text-base font-semibold bg-[#ffd700] text-[#253858] py-2 px-6 transition-colors duration-300 ease-in-out"
                          : "block text-base font-medium py-2 px-6 text-[#253858] hover:bg-gray-200 duration-300 ease-in-out"
                      }
                     
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="px-4 mt-4">
            <button className="w-full text-center uppercase py-2 text-base tracking-wide font-semibold border-2 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-[#253858] rounded transition-colors duration-300 ease-in-out">
              Pay Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

