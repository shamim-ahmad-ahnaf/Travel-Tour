import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBox,
  FiInfo,
  FiBookOpen,
  FiPhone,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home", icon: <FiHome /> },
    { name: "Packages", href: "#packages", icon: <FiBox /> },
    { name: "About", href: "#about", icon: <FiInfo /> },
    { name: "Our Courses", href: "#courses", icon: <FiBookOpen /> },
    { name: "Contact", href: "#contact", icon: <FiPhone /> },
  ];

  return (
    <nav className="shadow-lg fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 tracking-wide">
          Travel<span className="">Pro</span>
        </h1>

        {/* Menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="hover:text-yellow-500 transition"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Links - both mobile & desktop */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none 
            px-6 md:px-0 py-4 md:py-0 
            flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 font-medium 
            transition-all duration-300 
            ${menuOpen ? "block" : "hidden"} md:flex`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="w-full md:w-auto">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition duration-200"
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
