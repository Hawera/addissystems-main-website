import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaChevronDown } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import logo from "../image/addissystems-logo.png";
import icon from "../image/android-chrome-192x192.png";
import Button from "./Button";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleSearch = () => {
    const searchInput = document.getElementById("search");
    if (searchOpen === true) {
      searchInput.style.width = "0px";
      setSearchOpen(false);
    } else {
      setSearchOpen(true);
      screenWidth <= 550
        ? (searchInput.style.width = "150px")
        : (searchInput.style.width = "200px");
    }
  };

  useEffect(() => {
    const updateDimension = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenWidth]);

  console.log(screenWidth);

  return (
    <nav className=" sticky w-full bg-slate-50 z-40 opacity-100 top-0 px-2 shadow-md ">
      <div className=" container max-w-7xl mx-auto z-30 font-medium h-16 flex justify-between items-center ">
        <div className="-ml-1 w-[190px] mt-1 hover:scale-[1.02] duration-300 ">
          <Link to="/">
            <img className="hidden sm:block" id="logo" src={logo} alt="" />
            <img className="sm:hidden w-7 ml-2" id="logo" src={icon} alt="" />
          </Link>
        </div>
        <ul
          className={`fixed flex flex-col items-end bg-white ${
            menuOpen
              ? "right-0 opacity-100"
              : "-right-64 sm:-right-80 opacity-0"
          } top-0 pt-20 z-20 pr-4 gap-y-4 w-60 sm:w-80 sm:pr-6 h-full mdm:flex mdm:flex-row  mdm:static mdm:gap-3 mdm:opacity-100 mdm:items-center mdm:h-fit mdm:w-fit mdm:bg-inherit mdm:p-0 mdm: mdm:justify-between duration-500 mdm:duration-0 mdm:mr-1`}
        >
          <li className="hover:text-addispink">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <div className="group flex flex-col items-end mdm:block transition-all duration-500 ">
              <Link to="">
                {" "}
                <span className="flex items-center group-hover:text-addispink">
                  Solution{" "}
                  <span className="text-xs origin-center group-hover:-rotate-180 duration-500">
                    <FaChevronDown />
                  </span>
                </span>{" "}
              </Link>
              <ul className="hidden group-hover:flex flex-col items-end mdm:items-start gap-y-1 mdm:absolute text-sm bg-white min-w-[150px] p-3 shadow-md">
                <li className="hover:text-addispink">
                  <Link to="pos-service">POS Service</Link>
                </li>
                <li className="hover:text-addispink">
                  <Link to="erp-service">ERP Service</Link>
                </li>
                <li className="hover:text-addispink">
                  <Link to="electronic-invoice">Electronic Invoice</Link>
                </li>
                <li className="hover:text-addispink">
                  <Link to="business-intelligence">Business Intelligence</Link>
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
          <li className="group  flex items-end flex-col mdm:block">
            <span className=" flex items-center group-hover:text-addispink">
              More Info{" "}
              <span className="text-xs group-hover:-rotate-180 duration-500">
                <FaChevronDown />
              </span>
            </span>{" "}
            <ul className="hidden group-hover:flex flex-col items-end mdm:items-start gap-y-1 mdm:absolute text-sm bg-white min-w-[150px] p-3 shadow-md">
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
          <div className=" mdm:hidden flex flex-col items-end gap-y-2">
            <li className=" relative group flex items-end flex-col mdm:block ml-3">
              <span className=" text-xs flex items-center hover:text-addispink">
                Eng{" "}
                <span className="text-xs group-hover:-rotate-180 duration-500 ">
                  <FaChevronDown />
                </span>
              </span>{" "}
              <ul className="hidden group-hover:flex flex-col gap-1 mdm:absolute text-sm bg-white mdm:min-w-[80px] p-3 shadow-md right-0">
                <li className="hover:text-addispink float-right cursor-pointer">
                  Amh
                </li>
                <li className="hover:text-addispink float-right cursor-pointer">
                  Oro
                </li>
              </ul>
            </li>
            <a href="https://admin.addissystems.et/">
              <Button
                text="Log in"
                py={6}
                width={120}
                bgHover="hover:bg-addishover"
                textHover="text-addispink"
              />
            </a>
          </div>
          {/* Mobile Menu Bar Footer - AddisSystems */}
          <div className="absolute cursor-default text-sm font-normal bottom-2 right-1/2 translate-x-1/2 mdm:hidden block">
            <p className="text-addispink">
              Addis<span className="text-addisblue">systems</span>
            </p>
          </div>
        </ul>
        <div className="flex items-center">
          <form className="mr-1 mdm:mr-4">
            <div className="flex items-center cursor-pointer rounded-lg border border-addisblue ">
              <input
                id="search"
                className=" indent-2 rounded-xl py-2 w-50 overflow-hidden w-0 outline-none origin-right duration-500"
                type="text"
                name="search"
                placeholder="search"
              />
              <FiSearch className=" text-xl mx-2 " onClick={handleSearch} />
            </div>
          </form>
          <div className="hidden mdm:flex items-center gap-x-2">
            <div className="relative group">
              <span className=" text-xs flex items-center hover:text-addispink">
                Eng{" "}
                <span className="text-[10px] group-hover:-rotate-180 duration-500 ">
                  <FaChevronDown />
                </span>
              </span>{" "}
              <ul className="hidden group-hover:flex flex-col gap-y-1 absolute text-sm bg-white mdm:min-w-[50px] p-3 shadow-md right-0">
                <li className="hover:text-addispink float-right cursor-pointer">
                  Amh
                </li>
                <li className="hover:text-addispink float-right cursor-pointer">
                  Oro
                </li>
              </ul>
            </div>
            <a href="https://admin.addissystems.et/">
              <Button
                text="Log in"
                py={8}
                width={120}
                bgHover="hover:bg-addisblue"
                textHover="text-addispink"
              />
            </a>
          </div>
          <button
            className="mdm:hidden text-addispink menu-btn cursor-pointer  text-4xl z-40 "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CgClose /> : <CgMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
