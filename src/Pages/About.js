import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "../Components/Banner";
import Button from "../Components/Button";
import aboutImg from "../image/1x/about-us_1.png";
import Moto from "../Components/Moto";
import Sponsors from "../Components/Sponsors";
import aboutImage from "../image/about-us.jpg";
import Heading from "../Components/Heading";

const About = () => {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1000,
  //     // offset: 50,
  //   });
  // }, []);
  return (
    <main className="">
      <Banner
        bannerImage={aboutImage}
        header={"About us"}
        subtitle={"Solve all your digital transaction needs."}
      />

      <div data-aos="fade-up" data-aos-delay="200">
        <Heading
          head={"Who "}
          headtwo={"we are"}
          para={"learn little about us"}
        />
      </div>
      <div className=" max-w-5xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 mt-10 md:mt-16 mb-12">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="w-[90%] md:w-1/2 max-w-[450px] mb-8"
          >
            <img
              className=" w-full"
              src={aboutImg}
              alt="pos service illustration"
            />
          </div>
          <div
            data-aos="fade-left"
            // data-aos-delay="300"
            className="card-container w-[96%] md:w-1/2 max-w-[480px] min-h-[350px] flex flex-col justify-between bg-slate-200  px-3 sm:px-7 pt-7 pb-4"
          >
            <div className="">
              <h3 className=" text-center md:text-left text-2xl font-medium mb-3">
                About the company
              </h3>
              <p className="">
                Addissystems PLC is ERP, Electronic Invoicing and E-POS company
                that delivers convenient, innovative, safe and secure financial
                softwares services in Ethiopia by leveraging the latest
                technology platform in the industry and developing user-oriented
                products and services.
              </p>
            </div>
            <div className=" flex justify-center gap-8 mt-10 ">
              <Button
                text={"POS System"}
                bgHover={"hover:bg-addisblue"}
                // textHover={"addispink"}
              />
              <Button
                text={"ERP System"}
                bgHover={"hover:bg-addisblue"}
                // textHover={"addispink"}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between gap-3 lg:gap-5 px-2 my-16 ">
          <div
            data-aos="fade-up"
            className=" bg-slate-100 w-full max-w-md md:max-w-[330px] pt-4 pb-4 pl-4 md:p-6"
          >
            <h2 className="text-center md:text-left text-base font-medium sm:text-lg mb-2 ">
              Our Mission and Objective
            </h2>
            <ul className="">
              <li className="text-sm sm:text-base">
                Facilitate commerce for everyone. Facilitate domestic and cross
                border trade and enable citizens to enjoy financial and
                technological benefits through technology
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className=" bg-slate-100 w-full max-w-md md:max-w-[330px] pt-4 pb-4 pl-4 md:p-6"
          >
            <h2 className="text-center md:text-left text-base font-medium sm:text-lg mb-2 ">
              Our vision
            </h2>
            <ul className="">
              <li className="text-sm sm:text-base">
                Provide a one touch end to end commercial transaction experience
                for consumers and businesses in Africa.
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className=" bg-slate-100 w-full max-w-md md:max-w-[330px] pt-4 pb-4 pl-4 md:p-6"
          >
            <h2 className="text-center md:text-left text-base font-medium sm:text-lg mb-2 ">
              Core values
            </h2>
            <ul className="">
              <li className="text-sm sm:text-base flex items-center justify-start">
                <div className=" w-4 h-4 rounded-full bg-addispink mr-2"></div>
                Trust
              </li>
              <li className="text-sm sm:text-base flex items-center justify-start">
                <div className=" w-4 h-4 rounded-full bg-addispink mr-2"></div>
                Responsiveness
              </li>
              <li className="text-sm sm:text-base flex items-center justify-start">
                <div className=" w-4 h-4 rounded-full bg-addispink mr-2"></div>
                Transparency
              </li>
              <li className="text-sm sm:text-base flex items-center justify-start">
                <div className=" w-4 h-4 rounded-full bg-addispink mr-2"></div>
                Security
              </li>
              <li className="text-sm sm:text-base flex items-center justify-start">
                <div className=" w-4 h-4 rounded-full bg-addispink mr-2"></div>
                Creativity and value addition
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Moto />
      <Sponsors />
    </main>
  );
};

export default About;
