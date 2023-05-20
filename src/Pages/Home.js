import React from "react";
import Hero from "../Components/Hero";
import Heading from "../Components/Heading";
import Button from "../Components/Button";

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
      <div className="">
        <div className=" flex">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="card-container bg-slate-200 max-w-[480px] px-7 pt-7 pb-4">
            <h3 className=" text-2xl font-medium">POS Service</h3>
            <p className="">Easy Payments With Addis POS Services</p>
            <div className=" my-6 grid gap-y-4">
              <div className=" flex items-start">
                <div className=" h-6 w-6 mr-2 mt-1 bg-addispink"></div>
                <div className=" basis-[90%]">
                  <h4 className="text-xl font-medium">
                    Enhance your customer service.
                  </h4>
                  <p className="">
                    Automate time-consuming procedures, avoid manual entry that
                    is prone to error, and quickly spot and correct problems to
                    keep business operations operating smoothly and customers
                    satisfied.
                  </p>
                </div>
              </div>
              <div className=" flex items-start">
                <div className=" h-6 w-6 mr-2 mt-1 bg-addispink"></div>
                <div className=" basis-[90%]">
                  <h4 className="text-xl font-medium">
                    Boost business performance.
                  </h4>
                  <p className="">
                    With automated supply chain document flows that lighten
                    workloads, businesses may become more agile and speed their
                    time to revenue.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-end ">
              <Button text="Learn more" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
