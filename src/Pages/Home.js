import React from "react";
import Hero from "../Components/Hero";
import Heading from "../Components/Heading";
import Button from "../Components/Button";
import posimage from "../image/pos service with bg-01.png";
import erpimage from "../image/ERP-image.png";
import ServiceBox from "../Components/ServiceBox";
import Moto from "../Components/Moto";
import Sponsors from "../Components/Sponsors";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Heading
        head="why work with us?"
        para="Lorem ipsum dolor sit amet consectetur. Mi mollis at dignissim orci et
      mattis consequat euismod nec. Egestas augue in interdum eu massa
      malesuada feugiat placerat tellus. Diam lorem sed facilisis ac
      tristique. Viverra enim blandit lobortis pellentesque fringilla lectus
      mi varius tellus. Ac a aliquam aliquam at sit a sed. Aenean tristique
      tristique et tempus volutpat eget diam dolor porta. Ac mauris blandit
      semper scelerisque quisque consequat tellus pellentesque. Tortor vitae
      nunc lectus elementum pellentesque ultrices. Proin sed diam nulla."
      />
      <Heading head="service we provide" />
      <div className=" grid gap-y-20 sm:px-4 lg:px-2">
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-x-4 lg:gap-x-32">
          <div className="w-[90%] md:w-1/2 max-w-[550px]">
            <img src={posimage} alt="pos service illustration" />
          </div>
          <ServiceBox
            head="POS service"
            title="Easy Payments With Addis POS services"
            h1="Enhance your customer service."
            para1="Automate time-consuming procedures, avoid manual entry that is prone to error, and quickly spot and correct problems to keep business operations operating smoothly and customers satisfied."
            h2="Boost business performance."
            para2="With automated supply chain document flows that lighten workloads, businesses may become more agile and speed their time to revenue."
          />
        </div>
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-x-4 lg:gap-x-10 ">
          <div className="w-[90%] md:w-1/2 max-w-[550px]">
            <img src={erpimage} alt="pos service illustration" />
          </div>
          <ServiceBox
            head="ERP service"
            title="Manage day-to-day activities easly"
            h1="Cooperate to grow more quickly"
            para1="Use the industry-leading B2B/ERP Service integration to stay competitive, connect with partners fast, and satisfy buyer and vendor connectivity needs."
            h2="Lower Cost"
            para2="To save time and money, eliminate manual paper-based operations, connect to all trading partners, and share information in any format through a single connection."
          />
        </div>
      </div>
      <Moto />
      <Heading
        head="Learn More About AddisSystems?"
        para="Feel free to ask us on..."
      />
      <div className="text-center text-lg -mt-8 mb-8">
        <Button
          text="Contact Us"
          py={8}
          width={180}
          bgHover={"hover:bg-addisblue"}
        />
      </div>
      <Sponsors />
    </main>
  );
};

export default Home;
