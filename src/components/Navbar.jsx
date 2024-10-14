import React, { useState, useEffect } from "react";
import { FaHome, FaInfo, FaCalendar, FaMailBulk  } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const navItems = [
    { name: "Home", icon: FaHome, link: "/" },
    { name: "About", icon: FaInfo, link: "/about" },
    { name: "Contact", icon: FaMailBulk, link: "/contact" },
    { name: "Book Now", icon: FaCalendar, link: "/" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBackground ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TravelMate
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} to={item.link} className="text-gray-300 hover:text-blue-600">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-2 left-2 right-2 rounded-full bg-white shadow-md">
        <div className="flex justify-around items-center py-4">
          {navItems.map((item) => (
            <Link key={item.name} to={item.link} className="flex flex-col items-center text-gray-600 hover:text-blue-400">
              <item.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;