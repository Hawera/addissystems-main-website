import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import heroImage from "../image/hero-image.png";
import ButtonChevron from "./ButtonChevron";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1600,
      // offset: 50,
    });
  }, []);
  return (
    <header className=" bg-[#454262] px-4">
      <div className=" min-h-[600px] banner max-h-[] md:min-h-[650px] md:max-h-[800px] max-w-7xl mx-auto flex flex-col-reverse  md:flex-row md:justify-between items-center  overflow-hidden justify-center py-10 md:py-0 sm:gap-y-20 md:gap-0 sm:justify-end ">
        <div
          data-aos="fade-up"
          className=" w-full md:w-1/2 text-center md:text-left  border-addispink px-8 md:px-0 sm:px-24"
        >
          <h1 className=" text-white text-2xl lg:text-5xl md:text-4xl font-semibold uppercase">
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
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className=" w-[95%] max-w-[400px] sm:max-w-[70%] md:max-w-[60%]  border-addispink my-4 -mt-20 sm:my-0"
        >
          <img className="" src={heroImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
