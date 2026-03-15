import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-10 border-b border-zinc-600 bg-[url(src/assets/Education-bg.png)] ml-19 flex"
    >
      {/* col1 */}
      <div className="column-1">
        <div className="flex gap-19.75 leading-18 text-[76px]">
          <h1>EDUCATION</h1>
          <h1>&</h1>
        </div>
        <span>Professional awards I’ve reached during my working times.</span>
        <h1 className="uppercase ml-40 leading-18 text-[76px]">experience</h1>
        <p className="w-95 text- mt-12">
          I have been developing sites for 8 years and I know for sure the main
          trends and directions of modern design, you will get a decent result
        </p>
        <button className="bg-orange px-15.5 pt-3.5 pb-3.75 rounded-full mt-26 ml-100">
          RESUME
        </button>
      </div>
      {/* col2 */}
      <div className="column-2 border-l-2 border-l-zinc-600 ml-28">
        <ul>
          <li className="border-b-2 border-b-zinc-600 flex justify-between w-250 pb-11.5 pl-18.25">
            <FaFacebook className="text-5xl text-brown-white" />
            <div className="timeline">
              <span className="opacity-50">2019-2021</span>
              <h3 className="uppercase text-2xl ">facebook</h3>
            </div>
            <p className="text-brown-white w-94 ">
              Assertively exploit wireless initiatives rather than synergistic
              core competencies.
            </p>
          </li>
          <li className="border-b-2 border-b-zinc-600 flex justify-between w-250 pb-11.5 pl-18.25 pt-15">
            <IoLogoBehance className="text-[55px] text-brown-white" />
            <div className="timeline">
              <span className="opacity-50">2017-2019</span>
              <h3 className="uppercase text-2xl ">behance</h3>
            </div>
            <p className="text-brown-white w-94 ">
              im working via developer 9 years and i know all about design
            </p>
          </li>
          <li className="border-b-2 border-b-zinc-600 flex justify-between w-250 pb-11.5 pl-18.25 pt-15">
            <FaTwitter className="text-5xl text-brown-white" />
            <div className="timeline">
              <span className="opacity-50">2014-2017</span>
              <h3 className="uppercase text-2xl ">twitter</h3>
            </div>
            <p className="text-brown-white w-94 ">
              Credibly streamline mission-critical value with multifunctional
              functionalities. Leading team designers.
            </p>
          </li>

          <li className="border-b-2 border-b-zinc-600 flex justify-between w-250 pb-11.5 pl-18.25 pt-15">
            <FaInstagram className="text-[55px] text-brown-white" />
            <div className="timeline">
              <span className="opacity-50">2012-2014</span>
              <h3 className="uppercase text-2xl ">instagram</h3>
            </div>
            <p className="text-brown-white w-94 ">
              Proven ability to lead and manage a wide variety of design and
              development projects in team and independent situations.
            </p>
          </li>
          <li className="border-b-2 border-b-zinc-600 flex justify-between w-250 pb-11.5 pl-18.25 pt-15">
            <FaLinkedin className="text-[55px] text-brown-white" />
            <div className="timeline">
              <span className="opacity-50">206-2012</span>
              <h3 className="uppercase text-2xl ">facebook</h3>
            </div>
            <p className="text-brown-white w-94 ">
              Assertively exploit wireless initiatives rather than synergistic
              core competencies.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
