import { React, useState } from "react";
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
          <img
            width={183}
            height={52}
            src="https://s3-alpha-sig.figma.com/img/b44b/4c64/4da6109541e3e95d65a7005cb5a96c91?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUZTu5AiHk9V0B~UdGIfiCiaET7P8QBak0h9HRKHaziILyU7lonERB6d9zNWwM2i5qcvHJBw3ta31bs5ZndK0EYyQdbOFlwkEZOdAkK99jE3K~m0jVSGI2UtWOBjWG9FaQY5la~EZO2LTPPGLtJdWwGQ88t0NkdVVG5vNzyNIQuvFN6t8l8Stb7YQz1z5Y11uXbjfhChXCDQSSf760UZsjNREHUIM4aTpm3FcYD5XNsuCl27u2T2rERTwjWq867h5XYFTSV5-5IIckFVrP4AaAzvePfU8SwRo20LdgRAObzBFLY7rvnSZyv35BaVMPFkPbUaIRLh1rajMPDU3-LsEw__"
            alt="logo"
          />
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
