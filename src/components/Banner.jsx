import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import grids from "../assets/Grid.png";
import circles from "../assets/Group 5.png"
import CommonButton from "./CommonButton";

const Banner = () => {
  return (
    <section id="banner" className="w-full flex ml-30">
      {/* col1 */}
      <div className="column-1">
        <div className="flex gap-41.75 text-[76px] leading-tight text-[#E2DCC8]">
          <span className="text-[#E2DCC8]">GET</span>
          <span className="text-[#E2DCC8]">YOUR</span>
        </div>
        <p className="mt-0 text-[#E2DCC8]">
          Always available for freelance work, contact me and get your greate
          design ;)
        </p>
        <span className="text-[76px] block leading-15 text-[#E2DCC8]">
          GREAT
        </span>
        <span className="text-[76px] pl-20 text-[#E2DCC8]">DESIGN</span>
        <CommonButton content={"(hire me :)"} />
        <div className="stats flex justify-between mt-35">
          <div className="single-stat flex gap-6.5 items-center">
            <span className="text-[74px] ">8</span>
            <h3 className="w-18.5">Years Experience</h3>
          </div>
          <div className="single-stat flex gap-6.5 items-center">
            <span className="text-[74px] ">5</span>
            <h3 className="w-18.5">Themeforest Awards</h3>
          </div>
          <div className="single-stat flex gap-6.5 items-center">
            <span className="text-[74px] ">60</span>
            <h3 className="w-18.5">Projects done</h3>
          </div>
        </div>
      </div>
      {/* col2 */}
      <div className="column-2 flex-1 relative">
        <img
          src={grids}
          alt="grids"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        <img
          src={circles}
          alt="circles"
          className="absolute top-0 left-40 w-3/4 h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
