import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Button from "./Button";

const LearnMore = () => {
  return (
    <>
      <Heading
        head="Learn More About"
        headtwo={"AddisSystems?"}
        para="Feel free to ask us"
      />
      <div className="text-center text-lg -mt-8 mb-8">
        <Link to="contact">
          <Button
            text="Contact Us"
            py={8}
            width={180}
            bgHover={"hover:bg-addishover"}
          />
        </Link>
      </div>
    </>
  );
};

export default LearnMore;
