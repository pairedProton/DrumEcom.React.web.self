import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import { LuPhone, LuGlobe, LuGift } from "react-icons/lu";
import { Link } from "react-router-dom";
import { logoImages } from "../../assets/images";

const linkColumns = [
  {
    title: "Quick Links",
    links: [
      { name: "Shop All", path: "/products" },
      { name: "Our Story", path: "/about" },
      { name: "Our Vision & Mission", path: "/vision-mission" },
      { name: "Store Locator", path: "/store-locator" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Track Your Order", path: "/track-order" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  },
  {
    title: "Other",
    links: [
      { name: "Quality Certification", path: "/organic-certification" },
      { name: "Meet the farmer", path: "/meet-the-farmers" },
      { name: "FAQs", path: "/faqs" },
      { name: "Wholesale", path: "/wholesale" },
    ],
  },
];

const socialIcons = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaXTwitter />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
];

const Footer = ({ footerContact = {} }) => {
  const {
    email = "care@taurusorganic.com",
    phone = "+91 9114040067",
    timing = "10 a.m. to 7 p.m. (Monday to Saturday)",
    exportEmail = "export@taurusorganic.com",
    giftingEmail = "gifting@taurusorganic.com",
  } = footerContact;

  return (
    <footer className="w-full bg-brand-light text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12 flex flex-col gap-10">
        {/* Top row: brand + socials */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
              <img
                src={logoImages.lightlogo}
                alt="Taurus Organic"
                className="w-7 h-7 object-contain"
              />
            </span>
            <span className="text-lg font-semibold font-heading">
              Taurus Organic
            </span>
          </Link>
          <div className="flex gap-3">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-9 h-9 rounded-md bg-white/15 hover:bg-white/30 flex items-center justify-center text-sm transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {linkColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-base font-semibold font-heading mb-1">
                {col.title}
              </h4>
              {col.links.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-white/85 hover:text-white hover:underline underline-offset-2 transition-colors font-body"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-white/20" />

        {/* Contact row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm font-semibold font-heading mb-1">
              <LuPhone /> Get in Touch
            </div>
            <a href={`tel:${phone}`} className="text-sm text-white/85 font-body">
              {phone}
            </a>
            <span className="text-sm text-white/70 font-body">{timing}</span>
            <a
              href={`mailto:${email}`}
              className="text-sm text-white/85 font-body hover:text-white"
            >
              {email}
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm font-semibold font-heading mb-1">
              <LuGlobe /> International Business
            </div>
            <a
              href={`mailto:${exportEmail}`}
              className="text-sm text-white/85 font-body hover:text-white"
            >
              {exportEmail}
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-sm font-semibold font-heading mb-1">
              <LuGift /> Corporate Gifting
            </div>
            <a
              href={`mailto:${giftingEmail}`}
              className="text-sm text-white/85 font-body hover:text-white"
            >
              {giftingEmail}
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/20" />

        <p className="text-center text-xs text-white/70 font-body">
          Copyright © 2025 Taurus Organic India. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
