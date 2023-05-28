import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import addisPayLogo from "../image/addispay-logo2.jpg";
import abyssiniaLogo from "../image/abyssinia-logo2.jpg";
import cbeLogo from "../image/cbe-logo2.jpg";
import insaLogo from "../image/insa-logo2.jpg";

const Sponsors = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      // offset: 50,
    });
  }, []);
  return (
    <section className=" my-10 bg-slate-100 py-6 sm:py-10 px-2 lg:px-0">
      <div className=" max-w-7xl mx-auto flex justify-evenly gap-2">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          className=" w-48 max-h-36 border-b-4 border-addispink bg-white rounded-md shadow-lg hover:scale-[1.03] duration-500 hover:shadow-xl"
        >
          <img
            className="h-full object-contain flex items-center justify-center rounded-md"
            src={cbeLogo}
            alt="commercial bank of ethiopia logo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="200"
          className=" w-48 max-h-36 border-b-4 border-addispink bg-white rounded-md shadow-lg hover:scale-[1.03] duration-500 hover:shadow-xl"
        >
          <img
            className="h-full object-contain flex items-center justify-center rounded-md"
            src={addisPayLogo}
            alt="addis pay logo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="200"
          className=" w-48 max-h-36 border-b-4 border-addispink bg-white rounded-md shadow-lg hover:scale-[1.03] duration-500 hover:shadow-xl"
        >
          <img
            className="h-full object-contain flex items-center justify-center rounded-md"
            src={insaLogo}
            alt="ethiopian information network and security logo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-offset="200"
          className=" w-48 max-h-36 border-b-4 border-addispink bg-white rounded-md shadow-lg hover:scale-[1.03] duration-500 hover:shadow-xl"
        >
          <img
            className="h-full object-contain flex items-center justify-center rounded-md"
            src={abyssiniaLogo}
            alt="abyssinia bank logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
