import React, { useState } from "react";
import logo from "../../assets/Images/Page1Logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="Navbar w-full h-20 flex justify-between items-center bg-gradient-to-r from-[#F5EACD] to-[#FFD1C1] p-5 shadow-lg relative">
        {/* Logo */}
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            className="w-48 h-auto transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <li className="nav-items flex gap-10 text-[#BD282B] font-semibold pr-5">
            <a
              href=""
              className="hover:text-[#F97316] transition-colors duration-300"
            >
              Pet's Services
            </a>
            <a
              href=""
              className="hover:text-[#F97316] transition-colors duration-300"
            >
              Pet's Essentials
            </a>
            <a
              href=""
              className="hover:text-[#F97316] transition-colors duration-300"
            >
              Pet's Health
            </a>
            <a
              href=""
              className="hover:text-[#F97316] transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <a
            href=""
            className="bg-[#BD282B] text-white px-6 py-2 rounded-full hover:bg-[#F97316] transition-all duration-300"
          >
            Join Us
          </a>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="relative z-50">
            <svg
              className={`w-8 h-8 text-[#BD282B] transition-transform duration-300 ${
                isOpen ? "transform rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[#F5EACD] bg-opacity-95 z-40 flex flex-col items-center justify-center transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden`}
      >
        {/* Back Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 left-5 text-[#BD282B] text-2xl"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu Links */}
        <li className="nav-items flex flex-col items-center gap-8 text-[#BD282B] font-semibold text-xl mt-16">
          <a
            href=""
            className="hover:text-[#F97316] transition-colors duration-300"
          >
            Pet's Services
          </a>
          <a
            href=""
            className="hover:text-[#F97316] transition-colors duration-300"
          >
            Pet's Essentials
          </a>
          <a
            href=""
            className="hover:text-[#F97316] transition-colors duration-300"
          >
            Pet's Health
          </a>
          <a
            href=""
            className="hover:text-[#F97316] transition-colors duration-300"
          >
            About Us
          </a>
        </li>
        <a
          href=""
          className="bg-[#BD282B] text-white px-8 py-3 mt-5 rounded-full hover:bg-[#F97316] transition-all duration-300"
        >
          Join Us
        </a>
      </div>

      {/* Overlay Background for Mobile */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}

export default Header;

