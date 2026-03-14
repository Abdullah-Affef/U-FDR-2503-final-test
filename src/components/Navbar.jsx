import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const navLinks = [
    {
      content: "Home",
      link: "/",
    },
    {
      content: "Projects",
      link: "/projects",
    },
    {
      content: "Awards",
      link: "/awards",
    },
    {
      content: "Testimonials",
      link: "/testimonials",
    },
    {
      content: "Blog",
      link: "/blog",
    },
    {
      content: "CONTACT",
      link: "/contact",
    },
  ];

  return (
    <nav className=" absolute top-0 left-0 w-full border-b border-b-gray-400 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-[38px] text-white pl-7.25 pt-7.25 pb-6.75 pr-7 border-r border-r-gray-400 w-fit">
          P
        </div>
        <div className="Logos flex gap-[38.5px] pl-7 text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
      {/* NAVLINK */}
      <div className="navLinks h-">
        <ul className="flex gap-16 ">
          {navLinks.map((item, i) => {
            return (
              <li className="uppercase hover:text-orange-600/60">
                <Link to={item.link}>{item.content}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="phone-number text-sm pr-8.5">+2(315) 590 83 68</div>
    </nav>
  );
};

export default Navbar;
