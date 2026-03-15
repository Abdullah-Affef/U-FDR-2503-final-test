import React from "react";
import artchive from "../assets/Artchive.png";
import creative from "../assets/Creative-Space.png";
import christopherWilli from "../assets/Christopher-Willi.png";
import behr from "../assets/Behr.png";
import quote from "../assets/Quotes.png";
import { CgArrowLongRight } from "react-icons/cg";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen py-20 px-10 border-b border-zinc-600 flex ml-30"
    >
      {/* col1 */}
      <div className="column-1 pr-52">
        <h1 className="text-[76px] leading-18">+250</h1>
        <span className="text-brown-white">
          I love my work and every project is my pride{" "}
        </span>
        <h1 className="text-[76px] leading-18 ml-50">HAPPY</h1>
        <h1 className="text-[76px] leading-18">CLIENTS</h1>
        <div className="companies grid grid-cols-2 grid-rows-2 mt-102.5 items-center justify-center">
          <img src={artchive} alt="company" className="mb-10" />
          <img src={creative} alt="company" className="ml-20 mb-10" />
          <img src={christopherWilli} alt="company" />
          <img src={behr} alt="company" className="ml-20" />
        </div>
      </div>
      {/* col2 */}
      <div className="column-2 border-l border-l-zinc-600">
        <h1 className="ml-6.5 text-[40px] w-128.5">
          <span className="text-orange">Creative</span> & dedicated is things
          that my studio brings for your business
        </h1>
        <div className="quotes mt-56 ml-78.25">
          <div className="flex items-center gap-25">
            <img src={quote} alt="quote" />
            <p className="text-sm w-95">
              “ If you are seeking an Interior designer that will understand
              exactly your needs, and someone who will utilise their creative
              and technical skills in parity with your taste, then Suzanne at
              The Bauhaus Studio is perfect.
            </p>
          </div>
          <div className="person ml-50 mt-12.25">
            <h4 className="text-brown-white uppercase text-xl">
              david & elisa
            </h4>
            <p className="text-sm">Apartment view lake at Brooklyn</p>
          </div>
        </div>
        <div className="buttons flex gap-9 ml-128 mt-49.5">
          <button className="text-white text-3xl px-9 py-4 bg-transparent border border-white rounded-full rotate-180">
            <CgArrowLongRight />
          </button>
          <button className="text-white text-3xl px-9 py-4 bg-orange rounded-full">
            <CgArrowLongRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
