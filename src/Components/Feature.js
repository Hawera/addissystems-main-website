import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className=" bg-slate-100 max-w-[330px] flex flex-col items-center p-4 pl-4 sm:p-6">
      <div className=" w-10 h-10 bg-addispink ">
        {/* <img src="" alt="" /> */}
      </div>
      <h2 className=" text-base sm:text-lg mt-4 mb-2 ">{feature.title}</h2>
      <p className=" text-sm sm:text-base font-light">{feature.paragraph}</p>
    </div>
  );
};

export default Feature;
