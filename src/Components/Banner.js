import React from "react";

const Banner = ({ header, subtitle }) => {
  return (
    <header className=" bg-addisbg">
      <div className=" max-w-7xl mx-auto h-72 flex items-center justify-center sm:justify-start px-4 text-center sm:text-left">
        <div className="">
          <h1 className=" text-3xl text-white sm:text-4xl font-semibold">
            {header}
          </h1>
          <p className=" text-slate-300">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
