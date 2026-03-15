import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import CommonButton from "./CommonButton";

const Awards = () => {
  return (
    <section
      id="awards"
      className="min-h-screen py-20 px-10 border-b border-zinc-600 flex ml-30"
    >
      {/* COL1 */}
      <div className="column-1 header-text">
        <div className="flex gap-23.25 items-center">
          <h1 className="text-[76px] leading-18">EXPLORE</h1>
          <h1 className="text-[76px] leading-18">MY</h1>
        </div>
        <span className="">I love my projects and every work is my pride</span>
        <h1 className="text-[76px] ml-43.75 leading-20">PROFILE</h1>
        <p className="mt-24 text-left w-95">
          Hello, my name is Pavel Suslov and i am UX/UI designer and front-end
          developer, im working via developer 9 years and i know all about
          design
        </p>
        <CommonButton content={"View Behance"} className={"mr-10"} />
      </div>
      {/* col2 */}
      <div className="column-2 border-l border-l-zinc-600">
        <h2 className="text-[40px]  pl-10">
          Professional <span className="text-[#B66449]">Awards</span>
        </h2>
        <ul className="mt-33.75">
          <li className="flex gap-30 border-b border-b-zinc-600 pb-15  pl-10">
            <div className="w-20 h-20 bg-gray-600"></div>
            <h3 className="w-65 text-[22px]">
              1ST WINNER CREATIVE DESIGN CHAMPIONSHIP
            </h3>
            <p className="w-94">
              For most favorited design voted by NY City Style customers
            </p>
          </li>
          <li className="flex gap-30 border-b border-b-zinc-600 pb-15  pl-10 pt-11">
            <div className="w-20 h-20 bg-gray-600"></div>
            <h3 className="w-65 text-[22px]">
              BEST 5 BRANDING PROJECT OF NOMINATIONS
            </h3>
            <p className="w-94">
              For best creative & usable health care mobile app design
            </p>
          </li>
          <li className="flex gap-30 border-b border-b-zinc-600 pb-15  pl-10 pt-11">
            <div className="w-20 h-20 bg-gray-600"></div>
            <h3 className="w-65 text-[22px]">8 Years of Membership</h3>
            <p className="w-94">
              Has been part of the Envato Community for over 8 years{" "}
            </p>
          </li>
          <li className="flex gap-30 border-b border-b-zinc-600 pb-15  pl-10 pt-11">
            <div className="w-20 h-20 bg-gray-600"></div>
            <h3 className="w-65 text-[22px]">Exclusive Author </h3>
            <p className="w-94">Sells items exclusively on Envato Market </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
