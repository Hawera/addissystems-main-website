import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import flag from "../image/1x/ethiopian_flag.svg";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Button from "../Components/Button";
import Moto from "../Components/Moto";
import bannerImage from "../image/contact-us.jpg";
import Sponsors from "../Components/Sponsors";

const Contact = () => {
  return (
    <main className=" relative">
      <Banner
        bannerImage={bannerImage}
        header={"Contact us"}
        subtitle={"Solve All Your Digital Transaction Needs."}
      />
      <Heading
        head={"Get in Contact"}
        headtwo={"with us"}
        para={"we will get back to you as soon as possible"}
      />
      <div className=" max-w-7xl mx-auto flex flex-col items-center md:flex-row md:items-stretch justify-center px-1 ssm:px-4  sm:px-1 gap-4 mb-10 ">
        <div className="contact-container w-full max-w-[500px] bg-slate-200 px-2 sm:px-8 py-6 ">
          <div className=" w-full max-w-md">
            <div className=" mb-6 ">
              <h3 className=" text-2xl font-semibold">Contact</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Massa lectus libero et
                eget feugiat elit. Purus cursus etiam fermentum felis
                consectetur amet nec nulla. Turpis odio tristique semper diam
                tempor nibh. Egestas facilisi scelerisque.
              </p>
            </div>

            {/* Contact Section  */}
            <div className="flex flex-col gap-y-2">
              <div className=" group flex items-start ">
                <a className="flex" href="tel:+251116684243">
                  <div className=" text-addispink text-xl mr-2 mt-1">
                    <BsFillTelephoneFill />
                  </div>
                  <h3 className=" text-xl font-semibold hover:text-addispink duration-300 hover:-translate-y-1">
                    +251 11 66 84243
                  </h3>
                </a>
              </div>
              <div className=" group flex items-start ">
                <div className=" text-addispink text-2xl mr-2 mt-2">
                  <MdEmail />
                </div>
                <div className="">
                  <a href="mailto:support@addissystems.et">
                    <h3 className=" text-xl font-semibold hover:text-addispink duration-300 hover:-translate-y-1">
                      support@addissystems.et
                    </h3>
                  </a>
                  <a href="mailto:info@addissystems.et">
                    <h3 className=" text-xl font-semibold hover:text-addispink duration-300 hover:-translate-y-1">
                      info@addissystems.et
                    </h3>
                  </a>
                </div>
              </div>
              <div className=" group flex items-start ">
                <div className=" text-addispink text-2xl mr-2 mt-1">
                  <ImLocation2 />
                </div>
                <h3 className=" text-lg font-semibold hover:text-addispink duration-300 hover:-translate-y-1">
                  Megenagna To 22 Road , Efrata Building Fourth Floor
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section  */}
        <div className="email-us-conatiner w-full max-w-[500px] bg-slate-200 px-2 sm:px-8 py-6 ">
          <h3 className=" text-2xl font-semibold mb-6">Email us</h3>
          <form className=" flex flex-col gap-y-3">
            <input
              className=" py-2 rounded outline-addisblue indent-2"
              type="text"
              name="firstName"
              placeholder="Name"
              required
            />
            <input
              className=" py-2 rounded outline-addisblue indent-2"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="flex items-center bg-white rounded pl-2">
              <div className="h-5">
                <img
                  className="h-full w-7 object-cover rounded"
                  src={flag}
                  alt="ethiopian flag"
                />{" "}
              </div>
              <span className="ml-1 text-base">+251</span>
              <input
                className="indent-2 py-3 rounde w-full outline-none"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <textarea
              className="py-2 rounded outline-addisblue indent-2 max-h-60"
              name="message"
              placeholder="your message..."
              rows={3}
              required
            />
            <div className=" text-center mt-6">
              <Button text={"Submit"} bgHover={"hover:bg-addisblue"} />
            </div>
          </form>
        </div>
      </div>
      <Heading head={"We are"} headtwo={"located at"} />
      <div className=" bg-slate-100">
        <iframe
          title="google map"
          className=" w-full h-[450px] -mt-4 mb-12 shadow-lg border-primaryColor"
          src="https://www.google.com/maps/embed/v1/place?q=Efrata+Building+|+Bambis+|+ኤፍራታ+ህንጻ+|+ባምቢስ,+Equatorial+Guinea+Street,+Addis+Ababa,+Ethiopia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <Moto />
      <Sponsors />
    </main>
  );
};

export default Contact;
