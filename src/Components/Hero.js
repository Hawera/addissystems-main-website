import React from "react";
import heroImage from "../image/hero-image.png";
import Button from "./Button";

const Hero = () => {
  return (
    <header className=" bg-black [#454262] px-4">
      <div className=" banner h-screen sm:h-full max-w-7xl mx-auto flex flex-col-reverse  md:flex-row md:justify-between items-center  border-addispink overflow-hidden justify-end ">
        <div className=" w-full md:w-1/2 text-center md:text-left  border-addispink px-8 md:px-0 sm:px-24">
          <h1 className=" text-white text-2xl md:text-4xl font-semibold uppercase">
            Facilitating <br className="heading-break hidden " />{" "}
            <span className="text-addispink font-bol">e-commerce</span> in
            Ethiopia and beyond.
          </h1>
          <p className="text-slate-300">
            Lorem ipsum dolor sit amet consectetur. Amet purus risus.
          </p>
          <div className=" mt-7 sm:mb-12 md:mb-0">
            <Button text="Demo Request" py={12} width={210} />
          </div>
        </div>
        <div className=" w-[95%] max-w-[400px] md:max-w-[60%]  border-addispink my-4 sm:my-0">
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
