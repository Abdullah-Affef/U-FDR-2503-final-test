import React from "react";
import { CgArrowLongRight, CgArrowTopRight } from "react-icons/cg";
import CommonButton from "./CommonButton";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-10 ml-30 flex">
      <div className="column-1">
        <div className="text-[76px] flex gap-30">
          <h1 className="leading-18">HIRE</h1>
          <h1 className="leading-18">ME</h1>
        </div>
        <span className="text-brown-white">Enjoy coffe with me</span>
        <ul className="mt-41">
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            mail: 000.lunchbox@gmail.com{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            skype: murren8{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            www.behance.net/Paulggooo{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            telegram: Paul_inc{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
        </ul>
      </div>
      {/* col2 */}
      <div className="column-2 w-128.5 border-l border-l-zinc-600 pl-10">
        <h1 className="text-[40px]">
          Let's grab a coffee and jump on{" "}
          <span className="text-orange">conversation</span> chat with me.
        </h1>
        <div className="flex items-center gap-48.25 mt-23">
          <div>
            <h3 className="uppercase underline">send a brief</h3>
            <p className="mt-6 w-80 text-brown-white">
              I recommend filling out a brief to assess the cost of the
              project.{" "}
            </p>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="NAME"
              className="outline-0 pb-2 border-b border-b-zinc-600 placeholder:text-[18px] w-123.75"
            />
            <input
              type="text"
              placeholder="EMAIL *"
              className="outline-0 pb-2 border-b border-b-zinc-600 placeholder:text-[18px] pt-16 w-123.75"
            />
            <input
              type="text"
              placeholder="MESSAGE *"
              className="outline-0 pb-2 border-b border-b-zinc-600 placeholder:text-[18px] pt-16 w-123.75"
            />
            <button className="text-white text-3xl px-9 py-4 bg-[#B66449] rounded-full mt-19.5">
              <CgArrowLongRight  />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
