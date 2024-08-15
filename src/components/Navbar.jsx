import React from 'react'
import NavLogo from '../assets/Images/Page1Logo.png'

function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-full h-24 bg-[#F5EACD] px-8">
      <img className="w-44 h-14" src={NavLogo} alt="Logo" />
      <ul className="flex gap-12 items-center text-sm font-semibold font-raleway">
        <li>Pet's Services</li>
        <li>Pet's Essentials</li>
        <li>Pet's Health</li>
        <li>About Us</li>
        <li>Join Us</li>
      </ul>
    </nav>
  );
}

export default Navbar
