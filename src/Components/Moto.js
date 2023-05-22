import React from "react";
import asset1 from "../image/1x/Asset 1.png";
import asset2 from "../image/1x/Asset 2.png";
import asset3 from "../image/1x/Asset 3.png";
import asset4 from "../image/1x/Asset 4.png";

const Moto = () => {
  return (
    <div className=" relative w-full bg-[#454262] my-14 pt-12 mmd:py-0">
      <div className=" max-w-7xl mx-auto flex flex-col  mmd:flex-row min-h-80 h-96 ssm:max-h-80 items-center sm:items-start mmd:items-center px-2 lg:px-0">
        <div className=" max-w-[400px] text-center sm:text-left">
          <h2 className=" text-white text-3xl md:text-4xl font-semibold">
            Facilitating e-commerce in Ethiopia and beyond.
          </h2>
          <p className=" text-slate-300">
            Lorem ipsum dolor sit amet consectetur. Pharetra neque vitae pretium
            pharetra vel dolor facilisis netus. Facilisi phasellus magnis
            tristique egestas.
          </p>
        </div>
        <div className="">
          <div className="absolute bottom-6 right-[10%] sm:right-20  sm:bottom-10 mmd:right-64 lg:right-96 rotate-3 mmd:top-8 h-20 w-28 ssm:w-36 ssm:h-28 bg-addispink animate-updown origin-center ">
            {/* <img src={asset3} alt="icons" /> */}
          </div>
          <div className=" hidden mmd:block absolute right-20 lg:right-32 -rotate-12 top-12 w-24 h-16 bg-addisblue animate-updown1">
            {/* <img src={asset4} alt="icons" /> */}
          </div>
          <div className="hidden mmd:block absolute right-[40%] lg:right-[600px] -rotate-3 bottom-12 w-16 h-10 bg-slate-400 animate-updown3">
            {/* <img src={asset2} alt="icons" /> */}
          </div>
          <div className="absolute right-[70%] bottom-12 sm:right-16  sm:top-16 mmd:right-40 lg:right-60 -rotate-6 mmd:bottom-16 mmd:top-auto mmd:left-auto w-20 h-12 bg-slate-50 animate-updown1 ">
            {/* <img src={asset1} alt="icons" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moto;
