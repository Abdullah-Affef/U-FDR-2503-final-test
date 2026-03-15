import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import CommonButton from "./CommonButton";

const Blog = () => {
  return (
    <section
      id="blog"
      className="min-h-screen py-20 px-10 border-b border-zinc-600 ml-30 flex"
    >
      {/* col1 */}
      <div className="column-1">
        <h1 className="text-[76px] leading-18">LATEST</h1>
        <span className="text-brown-white">
          I love my work and every project is my pride
        </span>
        <h1 className="text-[76px] leading-18 uppercase ml-50">news</h1>
        <ul className="mt-35">
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            How to design well?{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            Lemon Illustration design{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            Paul theme Branding{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            Best typography 2020{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            my name is pattison{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
        </ul>
        <CommonButton content={"View all works"} className={"mr-10"} />
      </div>
      {/* col2 */}
      <div className="column-2 border-l border-l-zinc-600 pl-10">
        <div className="single-row flex justify-between w-250">
          <div className="date">
            <span>3th January, 2020</span>
          </div>
          <p className="w-94.25 text-brown-white pb-10">
            Berling ® — minimalism photography agency website. with the help of
            a minimalistic design, the site turned out to be very user-friendly
            and responsive, and the brand became more.
          </p>
          <h1 className="text-4xl">(01)</h1>
        </div>
        <div className="w-250 h-160 rounded-2xl bg-gray-300"></div>
      </div>
    </section>
  );
};

export default Blog;
