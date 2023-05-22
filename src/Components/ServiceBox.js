import React from "react";
import Button from "./Button";

const ServiceBox = ({ head, title, h1, h2, para1, para2 }) => {
  return (
    <div className=" w-[96%] md:w-1/2 card-container bg-slate-200 max-w-[480px] px-3 sm:px-7 pt-7 pb-4">
      <h3 className=" text-2xl font-medium">{head}</h3>
      <p className="">{title}</p>
      <div className=" my-6 grid gap-y-4">
        <div className=" flex items-start">
          <div className=" h-6 w-6 mr-2 mt-1 bg-addispink"></div>
          <div className=" basis-[90%]">
            <h4 className="text-xl font-medium">{h1}</h4>
            <p className="">{para1}</p>
          </div>
        </div>
        <div className=" flex items-start">
          <div className=" h-6 w-6 mr-2 mt-1 bg-addispink"></div>
          <div className=" basis-[90%]">
            <h4 className="text-xl font-medium">{h2}</h4>
            <p className="">{para2}</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end ">
        <Button text="Learn more" />
      </div>
    </div>
  );
};

export default ServiceBox;
