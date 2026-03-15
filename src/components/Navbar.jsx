import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = ({ activeSection = "" }) => {
  const navLinks = [
    {
      content: "Home",
      link: "#banner",
      id: "banner",
    },
    {
      content: "Projects",
      link: "#projects",
      id: "projects",
    },
    {
      content: "Awards",
      link: "#awards",
      id: "awards",
    },
    {
      content: "Testimonials",
      link: "#testimonials",
      id: "testimonials",
    },
    {
      content: "Experience",
      link: "#experience",
      id: "experience",
    },
    {
      content: "Blog",
      link: "#blog",
      id: "blog",
    },
    {
      content: "CONTACT",
      link: "#contact",
      id: "contact",
    },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-b-zinc-600 flex justify-between items-center">
      {/* Left side */}
      <div
        className="flex items-center
      "
      >
        <span className="px-7 py-6.5 text-4xl inline-block border-r border-r-zinc-600">
          P
        </span>
        <div className="flex gap-8 text-xl ml-8">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
      {/* Navlinks */}
      <ul className="navLinks flex gap-16">
        {navLinks.map((item, i) => (
          <li className="uppercase" key={i}>
            <a
              href={item.link}
              className={`transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-[#B66449]"
                  : "text-white hover:text-[#B66449]"
              }`}
            >
              {item.content}
            </a>
          </li>
        ))}
      </ul>
      {/* Number */}
      <div className="number text-sm mr-7">+2(315) 590 83 68</div>
    </nav>
  );
};

export default Navbar;
