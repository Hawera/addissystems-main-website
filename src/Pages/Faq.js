import React from "react";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import FaqList from "../Components/FaqList";
import { faqs } from "../data";
import faqbanner from "../image/faq-banner-01-01.jpg";
import LearnMore from "../Components/LearnMore";

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
        <LearnMore />
      </div>
    </main>
  );
};

export default Faq;
