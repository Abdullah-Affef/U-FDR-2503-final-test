import React from "react";
import { CgArrowLongRight, CgArrowTopRight } from "react-icons/cg";
import ProjectsSlider from "./ProjectsSlider"
import CommonButton from "./CommonButton";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-10 border-b border-zinc-600 flex ml-30"
    >
      {/* COL1 */}
      <div className="column-1">
        <h2 className="text-[76px] text-[#E2DCC8] mb-10 uppercase">Projects</h2>
        <ul>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            berling agency website{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            Prettylittlething american shop{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            Benhome - Architecture theme{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            Gilhouse - architecture website{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            gilber - personal website{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
          <li className="py-2.25 pl-6.5 group uppercase border-zinc-600 border w-156.5 text-[22px] font-light opacity-50 hover:opacity-100 flex justify-between items-center pr-4 cursor-pointer">
            jonny - personal website{" "}
            <CgArrowTopRight className="hidden group-hover:inline-block text-white text-3xl" />
          </li>
        </ul>
        <CommonButton content={"View all works"} />
      </div>
      {/* COl2 */}
      <div className="column-2">
        {/* <ProjectsSlider /> */}
        <div className="main-div rounded-2xl w-253.25 h-225.75 bg-gray-500 ml-6.5 border-l border-l-zinc-600"></div>
      </div>
    </section>
  );
};

export default Projects;
