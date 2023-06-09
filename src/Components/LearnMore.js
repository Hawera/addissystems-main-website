import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import ButtonChevron from "./ButtonChevron";

const LearnMore = () => {
  return (
    <div data-aos="fade-up" data-aos-offset="150" data-aos-delay="100">
      <Heading
        head="Learn More About"
        headtwo={"AddisSystems?"}
        para="Feel free to ask us"
      />
      <div className="text-center text-lg -mt-8 mb-8">
        <Link to="contact" className="inline-block">
          <ButtonChevron text="Contact us" py={10} px={28} />
        </Link>
      </div>
    </div>
  );
};

export default LearnMore;
