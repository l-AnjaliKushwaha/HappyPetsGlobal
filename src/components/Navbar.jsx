import React, { useState } from "react";
import NavLogo from "../assets/Images/Page1Logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-24 bg-[#F5EACD] flex items-center justify-between px-8 shadow-md">
      <img className="w-48 h-16" src={NavLogo} alt="Logo" />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-[#BD282B]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <span className="text-3xl">☰</span>
        ) : (
          <span className="text-3xl">☰</span>
        )}
      </button>

      {/* Main Menu */}
      <ul
        className={`hidden md:flex space-x-8 text-lg font-semibold text-[#BD282B]`}
      >
        <li className="hover:text-[#8B0000] transition duration-300">
          Pet's Services
        </li>
        <li className="hover:text-[#8B0000] transition duration-300">
          Pet's Essentials
        </li>
        <li className="hover:text-[#8B0000] transition duration-300">
          Pet's Health
        </li>
        <li className="hover:text-[#8B0000] transition duration-300">
          About Us
        </li>
        <li className="hover:text-[#8B0000] transition duration-300">
          Join Us
        </li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-24 left-0 w-full bg-[#F5EACD] flex flex-col items-center space-y-4 py-4 text-lg font-semibold text-[#BD282B] md:hidden">
          <li className="hover:text-[#8B0000] transition duration-300">
            Pet's Services
          </li>
          <li className="hover:text-[#8B0000] transition duration-300">
            Pet's Essentials
          </li>
          <li className="hover:text-[#8B0000] transition duration-300">
            Pet's Health
          </li>
          <li className="hover:text-[#8B0000] transition duration-300">
            About Us
          </li>
          <li className="hover:text-[#8B0000] transition duration-300">
            Join Us
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;


