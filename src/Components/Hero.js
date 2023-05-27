import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../image/hero-image.png";
import Button from "./Button";
import ButtonChevron from "./ButtonChevron";

const Hero = () => {
  return (
    <header className=" bg-[#454262] px-4">
      <div className=" sm:banner h-screen max-h-[678px] sm:h-ful sm:max-[1280px] max-w-7xl mx-auto flex flex-col-reverse  md:flex-row md:justify-between items-center  border-addispink overflow-hidden justify-end sm:gap-y-12 md:gap-0 sm:justify-center ">
        <div className=" w-full md:w-1/2 text-center md:text-left  border-addispink px-8 md:px-0 sm:px-24">
          <h1 className=" text-white text-2xl md:text-4xl font-semibold uppercase">
            Facilitating <br className="heading-break hidden " />{" "}
            <span className="text-addispink font-bold">e-commerce</span> in
            Ethiopia and beyond.
          </h1>
          <p className="text-slate-300">
            Solve All Your Digital Transaction Needs
          </p>
          <div className=" mt-7 sm:mb-12 md:mb-0">
            <Link to="demo-request" className="inline-block">
              <ButtonChevron text="Demo Request" py={14} px={30} />
            </Link>
          </div>
        </div>
        <div className=" w-[95%] max-w-[400px] sm:max-w-[70%] md:max-w-[60%]  border-addispink my-4 sm:my-0">
          <img
            className=" w-full h-full object-contain"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
