import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { faqs } from "../data";

const FaqList = ({ faqData, handleSlide }) => {
  // answer.style.height = "0px";
  // answer.style.overflow = "hidden";

  const faqItems = faqData.map((faq) => (
    <div key={faq.id}>
      <div className=" w-full py-4 bg-addispink mt-10 mb-4">
        <h4 className=" text-center text-lg font-medium text-white ">
          {faq.catagory}
        </h4>
      </div>

      {faq.content.map((list) => (
        <div
          className="group my-2 mx-3 px-4 py-4 rounded-b-md bg-slate-200 hover:bg-slate-300 duration-300 cursor-pointer"
          onClick={() => handleSlide(list.id)}
          key={list.id}
        >
          <div className="flex items-center justify-between ">
            <h4 id={"question" + list.id} className="group-hover:font-semibold">
              {list.question}
            </h4>
            <div
              id={"arrow" + list.id}
              className=" text-addispink text-2xl duration-500"
            >
              <FiChevronDown />
            </div>
          </div>
          <h4
            id={list.id}
            className=" pt-2 pl-2 text-slate-600 duration-500 "
            style={{ height: 0, overflow: "hidden" }}
          >
            {list.answer}
          </h4>
        </div>
      ))}
    </div>
  ));
  return <>{faqItems}</>;
};

export default FaqList;
