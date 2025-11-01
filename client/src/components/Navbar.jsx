import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-[26px] md:text-[30px] font-light font-poppins text-black leading-tight"
        >
          Kambaa School <br className="hidden md:block" /> Project
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold text-gray-800">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/academics" className="hover:text-blue-600 transition-colors">
            Academics
          </Link>
          <Link to="/faculty" className="hover:text-blue-600 transition-colors">
            Faculty
          </Link>
          <Link to="/events" className="hover:text-blue-600 transition-colors">
            Events
          </Link>
          <Link to="/gallery" className="hover:text-blue-600 transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <Link
            to="/admin"
            className="underline text-[18px] font-light px-3 py-1 hover:text-blue-700"
          >
            Admin ➚
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-50 rounded-lg shadow-inner">
          <div className="flex flex-col space-y-3 p-4 text-gray-800 font-medium">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/academics"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Academics
            </Link>
            <Link
              to="/faculty"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Faculty
            </Link>
            <Link
              to="/events"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Events
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              to="/admin"
              onClick={() => setMenuOpen(false)}
              className="underline text-[18px] font-light hover:text-blue-700"
            >
              Admin ➚
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
