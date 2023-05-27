import React from "react";
import { HiChevronRight } from "react-icons/hi";

const ButtonChevron = ({ text, width, px, py }) => {
  return (
    <button
      className=" py-[10px] mx-auto sm:mx-0 px-6 group flex items-center bg-addispink text-white rounded-[4px] hover:bg-[#F60B65] duration-300 "
      style={{
        width: `${width}px`,
        padding: `${py}px  ${px}px`,
      }}
    >
      {text}{" "}
      <HiChevronRight className="mt-1 invisible opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-2 group-hover:visible group-hover:scale-125 duration-500 text-xl " />
    </button>
  );
};

ButtonChevron.defaultProps = {
  py: 10,
  px: 24,
};

export default ButtonChevron;
