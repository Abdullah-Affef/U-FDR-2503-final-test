import React from 'react';
import { CgArrowLongRight } from "react-icons/cg";

const CommonButton = ({content, className}) => {
  return (
    <div className={`common-button flex gap-7 items-center mt-52.5 justify-end w-156.5 ${className}`}>
      <p>{content}</p>
      <button className="text-white text-3xl px-9 py-4 bg-[#B66449] rounded-full">
        <CgArrowLongRight />
      </button>
    </div>
  );
};

export default CommonButton;