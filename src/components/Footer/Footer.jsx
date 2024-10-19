import React from "react";
import logo from "../../assets/Images/Page1Logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FFD1C1] to-[#F5EACD] w-full p-10 text-gray-800">
      {/* Container to hold all sections */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* About Us Section */}
        <div className="max-w-md text-center md:text-left flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4 text-[#BD282B] text-center">
            About Us
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At <span className="font-semibold text-[#F97316]">Happy Pets</span>,
            we provide all-inclusive services for your furry friends, from
            grooming and training to medical care and quality products. Our
            mission is to ensure your pets live healthy, happy, and
            well-cared-for lives.
          </p>
          <img
            src={logo}
            alt="Happy Pets Logo"
            className="w-44 md:w-52 mx-auto transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        {/* Our Services Section */}
        <div className="md:text-left flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4 text-[#BD282B] text-center">
            Our Services
          </h1>
          <ul className="text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="hover:text-[#F97316] transition-colors">
              🐾 Pet Training
            </li>
            <li className="hover:text-[#F97316] transition-colors">
              🏠 Pet Shelter
            </li>
            <li className="hover:text-[#F97316] transition-colors">
              🩺 Pet Health
            </li>
            <li className="hover:text-[#F97316] transition-colors">
              🛍️ Pet Essentials
            </li>
            <li className="hover:text-[#F97316] transition-colors">
              ✂️ Pet Grooming
            </li>
          </ul>
        </div>

        {/* Call to Action Buttons Section */}
        <div className="text-center md:text-left flex flex-col gap-4">
          <button className="bg-[#BD282B] text-white px-8 py-3 rounded-full hover:bg-[#F97316] transition-transform transform hover:scale-105 duration-300 shadow-lg w-full md:w-auto">
            Join Us
          </button>
          <button className="bg-[#F97316] text-white px-8 py-3 rounded-full hover:bg-[#BD282B] transition-transform transform hover:scale-105 duration-300 shadow-lg w-full md:w-auto">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-300 pt-5 text-center">
        <p className="text-sm text-gray-600">
          © 2024 Happy Pets. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


