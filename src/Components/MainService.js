import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { logDOM } from "@testing-library/react";

const MainService = ({ heading, title, paragraph, btntext, heroImage }) => {
  const navigate = useNavigate();
  const func = () => {
    navigate("demo-request");
    console.log("Done");
  };
  return (
    <main className="">
      <header className=" bg-[#454262] px-4">
        <div className=" sm:banner h-screen max-h-[678px] sm:h-ful sm:max-[1280px] max-w-7xl mx-auto flex flex-col  md:flex-row md:justify-between items-center  border-addispink overflow-hidden justify-start sm:gap-y md:gap-0 sm:justify-center ">
          <div className=" w-full md:w-1/2 text-center md:text-left  border-addispink mt-6 sm:mt-12 px-8 md:px-0 sm:px-24">
            <h1 className=" text-white text-2xl md:text-4xl font-semibold uppercase">
              {heading}
            </h1>
            <p className="text-slate-300">{title}</p>
            <p className="text-slate-200 font-light mt-4">{paragraph}</p>
            <div className=" mt-7 sm:mb-12 md:mb-0 hidden md:block">
              <Link onClick={() => func()}>
                <Button
                  text={"Demo request"}
                  py={12}
                  width={210}
                  bgHover={"hover:bg-white"}
                  textHover={"addispink"}
                />
              </Link>
            </div>
          </div>
          <div className=" w-[95%] max-w-[400px] sm:max-w-[70%] md:max-w-[60%]  border-addispink mt-4 sm:my-0">
            <img
              className=" w-full h-full object-contain"
              src={heroImage}
              alt=""
            />
          </div>

          <div className="mb-12 md:hidden">
            <Link to="demo-request">
              <Button
                text={"Demo request"}
                py={12}
                width={210}
                bgHover={"hover:bg-white"}
                textHover={"addispink"}
              />
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
};

export default MainService;
