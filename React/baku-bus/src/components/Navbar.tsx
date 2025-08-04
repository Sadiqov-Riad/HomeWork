import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 z-50 backdrop-blur bg-white/70 shadow-md">
      <div className="w-full h-full flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="w-30">
        <img src="src\assets\Logo.png" alt="" />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden text-2xl  cursor-pointer z-50" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-16">
          <ul className="flex items-center gap-8 text-lg  font-medium">
            <li>
              <Link to="/" className="hover:text-red-500 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition-colors duration-200">About</Link>
            </li>
            <li>
              <Link to="/tickets" className="hover:text-red-500 transition-colors duration-200">Tickets</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-500 transition-colors duration-200">Services</Link>
            </li>
          </ul>
          <button className="bg-red-500 hover:bg-transparent hover:text-red-500 border border-red-500 text-white px-4 py-2 rounded-full transition-colors duration-200">
            Sign in
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-white/70 backdrop-blur transition-transform duration-300 z-40 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-10 text-xl font-medium ">
            <Link to="/" onClick={closeMenu} className="hover:text-red-500">Home</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-red-500">About</Link>
            <Link to="/tickets" onClick={closeMenu} className="hover:text-red-500">Tickets</Link>
            <Link to="/services" onClick={closeMenu} className="hover:text-red-500">Services</Link>
            <button
              onClick={closeMenu}
              className="bg-red-500 hover:bg-transparent hover:text-red-500 border border-red-500 text-white px-6 py-2 rounded-xl transition-colors duration-200"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
