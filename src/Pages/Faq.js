import React from "react";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import FaqList from "../Components/FaqList";
import Button from "../Components/Button";
import { faqs } from "../data";
import faqbanner from "../image/faq-banner-01-01.jpg";

const Faq = () => {
  const handleSlide = (id) => {
    const answer = document.getElementById(id);
    const arrow = document.getElementById(`arrow${id}`);
    // const question = document.getElementById(`question${id}`);

    arrow.classList.toggle("rotate");
    if (answer.style.height !== "0px") {
      answer.style.height = "0px";
      answer.style.overflow = "hidden";
      // arrow.classList.add("rotate");
    } else {
      answer.style.height = answer.scrollHeight + "px";
      // arrow.classList.remove("rotate");
    }
  };
  return (
    <main className="">
      <Banner bannerImage={faqbanner} header={"FAQs"} />
      <div className=" max-w-7xl mx-auto ">
        <Heading head={"Frequently"} headtwo={"Asked Questions"} />
        <div className=" max-w-[850px] mx-auto px-2 mb-12">
          <FaqList faqData={faqs} handleSlide={handleSlide} />
        </div>
        <Heading
          head="Learn More About"
          headtwo={"AddisSystems?"}
          para="Feel free to ask us"
        />
        <div className="text-center text-lg -mt-8 mb-8">
          <Button
            text="Contact Us"
            py={8}
            width={180}
            bgHover={"hover:bg-addisblue"}
          />
        </div>
      </div>
    </main>
  );
};

export default Faq;
