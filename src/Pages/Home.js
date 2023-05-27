import React from "react";
import Hero from "../Components/Hero";
import Heading from "../Components/Heading";
import posimage from "../image/pos service with bg-01.png";
import erpimage from "../image/ERP3-03.png";
import invoiceimage from "../image/Addis e-invoice-01.png";
import businessinteligence from "../image/business inteligent.png";
import ServiceBox from "../Components/ServiceBox";
import Moto from "../Components/Moto";
import Sponsors from "../Components/Sponsors";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { SiSpeedtest } from "react-icons/si";
import { TbCirclesRelation } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { BiTime } from "react-icons/bi";
import { GiUpgrade } from "react-icons/gi";
import { TbArrowsExchange } from "react-icons/tb";
import LearnMore from "../Components/LearnMore";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Heading
        head="why work"
        headtwo={"with us?"}
        para="Addissystems PLC is ERP, Electronic Invoicing and E-POS company that delivers convenient, innovative, safe and secure financial softwares services in Ethiopia by leveraging the latest technology platform in the industry and developing user-oriented products and services."
      />
      <Heading head="service we " headtwo={"provide"} />
      <div className=" grid gap-y-20 sm:px-4 lg:px-2">
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-x-4 lg:gap-x-32">
          <div className="w-[90%] md:w-1/2 max-w-[550px]">
            <img src={posimage} alt="pos service illustration" />
          </div>
          <ServiceBox
            head="POS service"
            title="Easy Payments With Addis POS services"
            icon1={<HiOutlineEmojiHappy />}
            icon2={<SiSpeedtest />}
            path={"pos-service"}
            h1="Enhance your customer service."
            para1="Automate time-consuming procedures, avoid manual entry that is prone to error, and quickly spot and correct problems to keep business operations operating smoothly and customers satisfied."
            h2="Boost business performance."
            para2="With automated supply chain document flows that lighten workloads, businesses may become more agile and speed their time to revenue."
          />
        </div>
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-x-4 lg:gap-x-10 ">
          <div className="w-[90%] md:w-1/2 max-w-[550px] ">
            <img
              className=" h-full max-h-[450px] "
              src={erpimage}
              alt="pos service illustration"
            />
          </div>
          <ServiceBox
            head="ERP service"
            title="Manage day-to-day activities easly"
            icon1={<TbCirclesRelation />}
            icon2={<FaMoneyBillWave />}
            path={"erp-service"}
            h1="Cooperate to grow more quickly"
            para1="Use the industry-leading B2B/ERP Service integration to stay competitive, connect with partners fast, and satisfy buyer and vendor connectivity needs."
            h2="Lower Cost"
            para2="To save time and money, eliminate manual paper-based operations, connect to all trading partners, and share information in any format through a single connection."
          />
        </div>
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-x-4 lg:gap-x-32">
          <div className="w-[90%] md:w-1/2 max-w-[550px]">
            <img src={invoiceimage} alt="pos service illustration" />
          </div>
          <ServiceBox
            head="Electronic Invoice"
            title="We automate the E-invoicing process, saving businesses time and money."
            icon1={<VscServerProcess />}
            icon2={<BiTime />}
            path={"electronic-invoice"}
            h1="Automation"
            para1="E-invoicing can help automate the invoicing process, making it faster and more efficient. This can help businesses save time and money."
            h2="Shorter Payment Cycles"
            para2="E-invoicing can help shorten payment cycles by making it easier for businesses to track and process invoices. This can help businesses to pay faster and improve their cash flow."
          />
        </div>
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-x-4 lg:gap-x-10 ">
          <div className="w-[90%] md:w-1/2 max-w-[550px] ">
            <img
              className=" h-full max-h-[450px] "
              src={businessinteligence}
              alt="pos service illustration"
            />
          </div>
          <ServiceBox
            head="Business Intelligence"
            title="Manage day-to-day activities easly"
            icon1={<GiUpgrade />}
            icon2={<TbArrowsExchange />}
            path={"business-intelligence"}
            h1="Increased revenue"
            para1="Business Intelligence helps businesses to identify new revenue sources and indicate new line of opportunities for growth."
            h2="Transforms tax compliance"
            para2="Business Intelligence services can helps tax authority to identify non-compliant taxpayers and take appropriate action."
          />
        </div>
      </div>
      <Moto />
      <LearnMore />
      <Sponsors />
    </main>
  );
};

export default Home;
