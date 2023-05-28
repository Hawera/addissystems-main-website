import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Feature = ({ feature }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={feature.delay * 100}
      className=" bg-slate-100 max-w-[330px] flex flex-col items-center p-4 pl-4 sm:p-6"
    >
      <div className=" w-10 h-10 overflow-hidden text-addispink text-4xl flex items-center justify-center">
        {feature.icon}
      </div>
      <h2 className=" text-base font-medium sm:text-lg mt-4 mb-2 ">
        {feature.title}
      </h2>
      <p className=" text-sm sm:text-base ">{feature.paragraph}</p>
    </div>
  );
};

export default Feature;
