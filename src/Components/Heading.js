import React from "react";

const Heading = ({ head, headtwo, para }) => {
  return (
    <div className="text-center my-12 max-w-7xl mx-auto px-4 lg:px-32 md:px-20 sm:px-8 ">
      <h1 className=" text-2xl sm:text-3xl uppercase font-medium">
        {head} <span className="text-addispink">{headtwo}</span>
      </h1>
      <div className=" border-b-4 w-32 mx-auto my-4 border-addispink rounded-full" />
      <p className="text-sm md:text-base ">{para}</p>
    </div>
  );
};

Heading.defaultProps = {
  // head: "Default Heading",
  // para: "lorem ipsum default paragraph here, please insert your content here!",
};

export default Heading;
