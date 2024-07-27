import React, { useState } from "react";
import Page1Logo from '../../assets/Images/Page1Logo.png';
import "./Navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav-bar">
        <div className="nav-left">
          <img width={183} height={52} src={Page1Logo} alt="logo" />
        </div>
        <div className={`nav-right ${isOpen ? "open" : ""}`}>
          <ul>
            <li>Pet’s Services</li>
            <li>Pet’s Essentials</li>
            <li>Pet’s Health</li>
            <li>About Us</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
