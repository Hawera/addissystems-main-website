import React from "react";
import Button from "./Button";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" bg-black [#454262] black pt-12 pb-8 text-white">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-7 gap-x-1 px-6">
        <ul className="">
          <h4 className=" font-semibold text-lg text-addispink">About us</h4>
          <li className=" font-light text-base pr-20 text-slate-50 w-fit">
            Addis Ababa <br />
            Megenagna to 22 road <br />
            Efrata building 4<sup>th</sup> Floor
            <br />
            <Link
              to="contact"
              className=" group flex items-center text-addispink duration-500  hover:text-slate-200"
            >
              <BiChevronRight className="text-xl " /> See on map
            </Link>
          </li>
          <div className="mt-2">
            <h4 className="font-semibold text-base">Get in touch</h4>
            <div className="flex gap-4 mt-1">
              <FaFacebookF className="hover:text-addispink text-white hover:scale-125 duration-300" />
              <FaTwitter className="text-addispink hover:text-white hover:scale-125 duration-300" />
              <FaLinkedinIn className="text-addispink hover:text-white hover:scale-125 duration-300" />
              <FaInstagram className="text-addispink hover:text-white hover:scale-125 duration-300" />
            </div>
          </div>
        </ul>
        <ul className="">
          <h4 className="font-semibold text-lg text-addispink">
            Products and Services
          </h4>
          <li className="font-light text-base hover:text-addispink duration-300 w-fit">
            <Link to="pos-service">POS service</Link>
          </li>
          <li className="font-light text-base hover:text-addispink duration-300 w-fit">
            <Link to="erp-service">ERP service</Link>
          </li>
          <h4 className="font-semibold  text-addispink text-base">
            Working Hours
          </h4>
          <li className=" font-light text-base hover:text-addispink duration-300 w-fit">
            Monday - Friday
          </li>
          <li className=" font-light text-base hover:text-addispink duration-300 w-fit">
            08:00 AM - 05:00 PM
          </li>
        </ul>
        <ul className="">
          <h4 className="font-semibold text-lg text-addispink">Related info</h4>
          <li className="font-light text-base hover:text-addispink duration-300 w-fit">
            <Link to="">Terms and conditions</Link>
          </li>
          <li className="font-light text-base hover:text-addispink duration-300 w-fit">
            <Link to="">Privacy policy</Link>
          </li>
          <li className="font-light text-base hover:text-addispink duration-300 w-fit">
            <Link to="">User Guide</Link>
          </li>
          <li className="font-light text-base hover:text-addispink duration-300 w-fit">
            <Link to="faq">FAQs</Link>
          </li>
          <li className="font-light text-base hover:text-addispink duration-300 w-fit">
            <Link to="">Help</Link>
          </li>
        </ul>
        <ul className="">
          <h4 className="font-semibold text-lg text-addispink">Contact</h4>
          <li className=" flex items-center font-light text-base  hover:text-addispink duration-300 w-fit">
            <div className="w-4 h-4 grid mr-2 ">
              <BsFillTelephoneFill />
            </div>
            <Link to="">(+251) 11 68 4243</Link>
          </li>
          <li className=" flex items-center font-light text-base  hover:text-addispink duration-300 w-fit">
            <div className="w-4 h-4 grid mr-2 text-lg ">
              <MdEmail />
            </div>
            <Link to="">info@addissystems.net</Link>
          </li>
          <li className=" flex items-center font-light text-base  hover:text-addispink duration-300 w-fit">
            <div className="w-4 h-4 mr-2"></div>
            <Link to="">support@addissystems.et</Link>
          </li>
          <div className="mt-3 ml-6">
            <Link to={"demo-request"}>
              {" "}
              <Button
                text="Demo request"
                bg="bg-addispink"
                color="white"
                bgHover="hover:bg-white"
                textHover="addispink"
              />
            </Link>
          </div>
        </ul>
      </div>
      <hr className="mt-8 w-4/5 mx-auto opacity-50 border-addispink" />
      <div className=" text-center mt-6 ">
        <p className=" opacity-70">
          Copyright &copy; {date.getFullYear()} All right reserved.
        </p>
        <p className="">
          <span className=" opacity-70">Powered by</span>{" "}
          <span className="text-addispink opacity-100 hover:opacity-95 duration-300 cursor-pointer">
            AddisSystems plc.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
