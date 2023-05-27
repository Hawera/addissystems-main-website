import React from "react";
import { useState, useEffect } from "react";
import { features } from "../data";
import MainService from "../Components/MainService";
import Heading from "../Components/Heading";
import Moto from "../Components/Moto";
import Button from "../Components/Button";
import Sponsors from "../Components/Sponsors";
import Feature from "../Components/Feature";
import LearnMore from "../Components/LearnMore";
import { HiChevronRight } from "react-icons/hi";
import posHero from "../image/pos service with bg-01.png";
import erpHero from "../image/ERP-image.png";
import invoiceimage from "../image/Addis e-invoice-01.png";
import businessinteligence from "../image/business inteligent.png";
import ButtonChevron from "../Components/ButtonChevron";
import ServiceBox from "../Components/ServiceBox";

const Service = ({
  heading,
  title,
  paragraph,
  featureData1,
  featureData2,
  bannerImage,
}) => {
  const imageHandler = (heading) => {
    switch (heading) {
      case "POS Service":
        return (bannerImage = posHero);

      case "ERP Service":
        return (bannerImage = erpHero);

      case "Electronic Invoice":
        return (bannerImage = invoiceimage);

      case "Business Intelligence":
        return (bannerImage = businessinteligence);

      default:
        console.log("Error happend");
        break;
    }
  };

  return (
    <main className="">
      {/* Banner with Heading and Button  */}
      <header className=" relative">
        <div
          className=" max-w-7xl mx-auto h-60 sm:h-72 flex items-center justify-center sm:justify-start px-4 text-center sm:text-left "
          style={{
            backgroundImage: ` url('${imageHandler(heading)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className=" absolute left-0 top-0 w-full h-full z-0 "
            style={{
              background: `linear-gradient(90deg, rgba(69, 66, 98, 1), rgba(69, 66, 98, 0.5))`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className=" z-10">
            <h1 className=" text-3xl text-white sm:text-5xl font-semibold">
              {heading}
            </h1>
            <p className=" text-slate-300 mb-4">{title}</p>
            <ButtonChevron text={"Demo request"} />
          </div>
        </div>
      </header>

      {/* <MainService
        heading={heading}
        title={title}
        // paragraph={paragraph}
        heroImage={heroImage}
      /> */}

      {/* Body Title with Color  */}
      <div className="text-center my-12 max-w-7xl mx-auto px-4 lg:px-32 md:px-20 sm:px-8 ">
        <h1 className=" text-2xl sm:text-3xl uppercase font-medium">
          ADDIS{" "}
          <span className="text-addispink">
            {heading.includes("Service")
              ? heading.replace("Service", "")
              : heading}
          </span>{" "}
          Service Integration Can{" "}
          <span className="text-addispink">Benefit</span>
        </h1>
        <div className=" border-b-4 w-32 mx-auto my-4 border-addispink rounded-full" />
        <section className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-x-4 lg:gap-x-10 ">
          <div className="w-[90%] md:w-1/2 max-w-[550px] ">
            <img
              className=" h-full max-h-[450px] "
              src={imageHandler(heading)}
              alt="pos service illustration"
            />
          </div>
          <div className="w-[90%] md:w-1/2 max-w-[550px]">
            <p className="text-sm md:text-base text-justify indent-8 ">
              {paragraph}
            </p>
          </div>
        </section>
      </div>
      <div className="max-w-6xl px-2 sm:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-5  ">
        <h2 className=" mt-8 mb-2 text-xl sm:text-2xl uppercase font-medium col-span-full">
          Benefits to the business{" "}
          <span className="text-addispink">community</span>
        </h2>
        {featureData1.map((data) => (
          <>
            <Feature key={data.title} feature={data} />
          </>
        ))}
        {featureData2 && (
          <h2 className=" mt-8 mb-2 text-xl sm:text-2xl uppercase font-medium col-span-full">
            Benefits to Tax <span className="text-addispink">Authorities</span>
          </h2>
        )}
        {featureData2 &&
          featureData2.map((data) => (
            <>
              <Feature key={data.title} feature={data} />
            </>
          ))}
      </div>
      <Moto />
      <LearnMore />
      <Sponsors />
    </main>
  );
};

export default Service;
