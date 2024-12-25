import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
    <nav className="w-full bg-white text-black shadow-lg p-2">
      <div className="flex items-center justify-between max-w-7xl container mx-auto">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl md:text-4xl my-2 mx-4 flex gap-2 items-end">
            <span className="text-[#ffd333]">RK</span>
            <span className="text-black">Insurance</span>
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex bg-gray-100 px-1.5 py-1 items-center list-none rounded">
          {navitems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={
                pathname === item.link
                  ? "text-xl font-medium bg-[#ffd333] text-black py-1.5 px-6 cursor-pointer rounded transition-colors duration-300 ease-in-out"
                  : "text-xl font-medium py-2 px-6 cursor-pointer hover:text-[#ffd333] duration-300 ease-in-out"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login button (hidden on mobile) */}
        <div className="hidden md:block">
          <button className="px-10 py-1.5 border-2 text-[#ffd333] border-[#ffd333] rounded hover:bg-[#ffd333] hover:border-transparent hover:text-black font-semibold text-xl duration-200 ease-in-out transition-all">
            Login
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navitems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={
                  pathname === item.link
                    ? "block text-xl font-medium bg-[#ffd333] text-black py-2 px-3 rounded transition-colors duration-300 ease-in-out"
                    : "block text-xl font-medium py-2 px-3 text-black hover:text-[#ffd333] duration-300 ease-in-out"
                }
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full text-left px-3 py-2 text-xl font-medium text-[#ffd333] hover:bg-[#ffd333] hover:text-black rounded transition-colors duration-300 ease-in-out">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

