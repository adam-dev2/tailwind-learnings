import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md backdrop-brightness-110 text-white z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold flex items-center">
          <span className="text-amber-400 text-3xl">⚡</span> Adam
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 uppercase">
          <li><a href="#home" className="hover:text-amber-400">Home</a></li>
          <li><a href="#about" className="hover:text-amber-400">About</a></li>
          <li><a href="#resume" className="hover:text-amber-400">Resume</a></li>
          <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 p-6 text-center">
          <ul className="space-y-4 uppercase">
            <li><a href="#home" className="hover:text-amber-400">Home</a></li>
            <li><a href="#about" className="hover:text-amber-400">About</a></li>
            <li><a href="#resume" className="hover:text-amber-400">Resume</a></li>
            <li><a href="#blog" className="hover:text-amber-400">Blog</a></li>
            <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
