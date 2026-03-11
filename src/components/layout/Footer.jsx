import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const column1Links = [
    "About Us",
    "Organic & Quality Certification",
    "Meet The Farmers",
    "Investor Relation",
    "Whole Herb",
    "Our Herb",
    "Terms of Service",
    "Consult For Detox",
  ];

  const column2Links = [
    "Contact Us",
    "Vision & Mission",
    "Terms & Conditions",
    "Privacy Policy",
    "FAQs",
    "Press / News",
    "Track Your Order",
    "Store Locator",
  ];

  return (
    <div className="w-full relative bg-emerald-900 font-[Open Sans] ">
      {/* Background with leaf patterns */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-80">
            <img 
                src="https://organicindia.com/cdn/shop/files/1920-X-830-testimonial.png?v=1666267004" 
                alt="" 
                className='w-full h-full object-cover object-center'
            />
        </div> */}

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1 - Links */}
          <div className="flex flex-col">
            <ul className="flex flex-col gap-3">
              {column1Links.map((link, index) => (
                <li key={index} className="flex items-center gap-2 ">
                  <div className="text-black  flex justify-center items-center bg-amber-200 "></div>
                  <a
                    href="#"
                    className="text-white hover:text-green-200 transition-colors text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Links */}
          <div className="flex flex-col">
            <ul className="flex flex-col gap-3">
              {column2Links.map((link, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-black mt-2"></span>
                  <a
                    href="#"
                    className="text-white hover:text-green-200 transition-colors text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="flex flex-col gap-6">
            {/* Get in Touch */}
            <div>
              <h3 className="text-white  mb-2 text-base md:text-lg font-[Montserrat]">
                Get in Touch
              </h3>
              <a
                href="mailto:care@taurusorganic.com"
                className="text-white hover:text-green-200 transition-colors text-sm md:text-base"
              >
                care@taurusorganic.com
              </a>
            </div>

            {/* Toll Free */}
            <div>
              <h3 className="text-white mb-2 text-base md:text-lg font-[Montserrat] ">
                Toll Free:
              </h3>
              <p className="text-white text-sm md:text-base">1800-108-4488</p>
              <p className="text-white text-sm md:text-base">
                10am to 7pm (Monday to Saturday)
              </p>
            </div>

            {/* International Business */}
            <div>
              <h3 className="text-white  mb-2 text-base md:text-lg font-[Montserrat] ">
                For International Business
              </h3>
              <a
                href="mailto:export@taurusorganic.com"
                className="text-white hover:text-green-200 transition-colors text-sm md:text-base"
              >
                export@taurusorganic.com
              </a>
            </div>

            {/* Corporate Gifting */}
            <div>
              <h3 className="text-white mb-2 text-base md:text-lg font-[Montserrat]">
                For Corporate / Institutional Gifting
              </h3>
              <a
                href="mailto:gifting@taurusorganic.com"
                className="text-white hover:text-green-200 transition-colors text-sm md:text-base block mb-1"
              >
                gifting@taurusorganic.com
              </a>
              <a
                href="tel:9151777907"
                className="text-white hover:text-green-200 transition-colors text-sm md:text-base"
              >
                9151777907
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 w-full bg-white py-4">
        <div className="container mx-auto px-8 md:px-12">
          <p className="text-center text-emerald-950 text-sm md:text-base">
            Copyright © 2025 Taurus Organic India. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
