import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { HiChevronRight } from "react-icons/hi";

const ServiceBox = ({
  head,
  title,
  h1,
  h2,
  para1,
  para2,
  path,
  icon1,
  icon2,
}) => {
  return (
    <div className=" w-[96%] md:w-1/2 card-container bg-slate-200 max-w-[480px] px-3 sm:px-7 pt-7 pb-4">
      <h3 className=" text-2xl font-medium">{head}</h3>
      <p className="">{title}</p>
      <div className=" my-6 grid gap-y-4">
        <div className=" flex items-start">
          <div className="text-[30px] mr-2 text-addispink">{icon1}</div>
          <div className=" basis-[90%]">
            <h4 className="text-xl font-medium">{h1}</h4>
            <p className="">{para1}</p>
          </div>
        </div>
        <div className=" flex items-start">
          <div className="text-[28px] mr-2 text-addispink">{icon2}</div>
          <div className=" basis-[90%]">
            <h4 className="text-xl font-medium">{h2}</h4>
            <p className="">{para2}</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end ">
        <Link
          to={path}
          className="group flex items-center bg-addispink py-2 text-white px-3 rounded-[4px] hover:bg-[#F60B65] duration-300 "
        >
          Learn more{" "}
          <HiChevronRight className="mt-1 group-hover:translate-x-1 duration-500 text-xl " />
        </Link>
      </div>
    </div>
  );
};

export default ServiceBox;
