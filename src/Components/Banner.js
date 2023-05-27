import React from "react";

const Banner = ({ header, subtitle, bannerImage }) => {
  return (
    <header
      className=" bg-addisbg -z-50"
      style={{
        background: `linear-gradient(90deg, rgba(69, 66, 98, 1), rgba(69, 66, 98, 0.5)), url('${bannerImage}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" max-w-7xl mx-auto h-48 sm:h-72 flex items-center justify-center sm:justify-start px-4 text-center sm:text-left">
        <div className="">
          <h1 className=" text-3xl text-white sm:text-5xl font-semibold">
            {header}
          </h1>
          <p className=" text-slate-300">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
