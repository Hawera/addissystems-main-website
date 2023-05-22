import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import logo from "../image/addissystems-logo.png";
import Button from "./Button";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" sticky w-full bg-slate-50 z-40 opacity-100 top-0 px-2 shadow-md ">
      <div className=" container max-w-7xl mx-auto z-30 font-medium h-16 flex justify-between items-center ">
        <div className="-ml-1 w-[190px] mt-1 hover:scale-[1.02] duration-300 ">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <ul
          className={`fixed flex flex-col items-end bg-white ${
            menuOpen
              ? "right-0 opacity-100"
              : "-right-64 sm:-right-80 opacity-0"
          } top-0 pt-20 z-20 pr-4 gap-y-4 w-60 sm:w-80 sm:pr-6 h-full mmd:flex mmd:flex-row  mmd:static mmd:gap-3 mmd:opacity-100 mmd:items-center mmd:h-fit mmd:w-fit mmd:bg-inherit mmd:p-0 mmd: mmd:justify-between duration-500 mmd:duration-0 mmd:mr-1`}
        >
          <li className="hover:text-addispink">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <div className="group flex flex-col items-end mmd:block transition-all duration-500 ">
              <Link to="">
                {" "}
                <span className="flex items-center group-hover:text-addispink">
                  Solution{" "}
                  <span className="text-sm group-hover:-rotate-180 duration-500">
                    <FaCaretDown />
                  </span>
                </span>{" "}
              </Link>
              <ul className="hidden group-hover:flex flex-col items-end mmd:items-start gap-y-1 mmd:absolute text-sm bg-white min-w-[150px] p-3 shadow-md">
                <li className="hover:text-addispink">
                  <Link to="pos-service">POS Service</Link>
                </li>
                <li className="hover:text-addispink">
                  <Link to="erp-service">ERP Service</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:text-addispink">
            <Link to="about-us">About us</Link>
          </li>
          <li className="hover:text-addispink">
            <Link to="blog">Blog</Link>
          </li>
          <li className="hover:text-addispink">
            <Link to="contact">Contact</Link>
          </li>
          <li className="group  flex items-end flex-col mmd:block">
            <span className=" flex items-center group-hover:text-addispink">
              More Info{" "}
              <span className="text-sm group-hover:-rotate-180 duration-500">
                <FaCaretDown />
              </span>
            </span>{" "}
            <ul className="hidden group-hover:flex flex-col items-end mmd:items-start gap-y-1 mmd:absolute text-sm bg-white min-w-[150px] p-3 shadow-md">
              <li className="hover:text-addispink">
                <Link to="user-guide">User Guide</Link>
              </li>
              <li className="hover:text-addispink">
                <Link to="faq">FAQs</Link>
              </li>
              <li className="hover:text-addispink">
                <Link to="help">Help</Link>
              </li>
            </ul>
          </li>
          <li className="relative group flex items-end flex-col mmd:block ml-3">
            <span className=" text-sm flex items-center hover:text-addispink">
              Eng{" "}
              <span className="text-sm group-hover:-rotate-180 duration-500 ">
                <FaCaretDown />
              </span>
            </span>{" "}
            <ul className="hidden group-hover:block mmd:absolute text-sm bg-white mmd:min-w-[80px] p-3 shadow-md right-0">
              <li className="hover:text-addispink float-right">Amharic</li>
            </ul>
          </li>
          <Link to="">
            {" "}
            <Button
              text="Log in"
              py={6}
              width={120}
              bgHover="hover:bg-addisblue"
              textHover="text-addispink"
            />
          </Link>{" "}
          <div className="absolute cursor-default text-sm font-normal bottom-2 right-1/2 translate-x-1/2 mmd:hidden block">
            <p className="text-addispink">
              Addis<span className="text-addisblue">systems</span>
            </p>
          </div>
        </ul>
        <button
          className="mmd:hidden text-addispink menu-btn cursor-pointer  text-4xl z-40 "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CgClose /> : <CgMenu />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
