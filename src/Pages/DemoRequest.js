import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../Components/Heading";
import Banner from "../Components/Banner";
import flag from "../image/1x/ethiopian_flag.svg";
import Button from "../Components/Button";
import Sponsors from "../Components/Sponsors";

const DemoRequest = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    position: "",
    tinNo: "",
    companyName: "",
    country: "",
    region: "",
  });

  return (
    <main className="">
      <Banner header={"Demo Request"} />
      <Heading
        para={
          "We’re here to help. Fill in the details below and one of our team members will get back to you shortly."
        }
      />
      <div className=" max-w-7xl mx-auto">
        <div className=" bg-slate-200 py-10 px-2 sm:px-8 md:p-12 mb-24">
          <form className=" ">
            <h1 className=" text-center text-xl mb-8">
              Fill the following information
            </h1>
            <div className=" flex flex-col sm:flex-row items-center sm:items-start justify-center gap-y-8 sm:gap-4 ">
              <div className="flex flex-col w-full max-w-[500px] sm:w-1/2 gap-y-4">
                <input
                  className="indent-2 py-3 rounded outline-addisblue"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="indent-2 py-3 rounded outline-addisblue"
                  type="text"
                  placeholder="Last Name"
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
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
                <input
                  className="indent-2 py-3 rounded outline-addisblue"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="indent-2 py-3 rounded outline-addisblue"
                  type="text"
                  placeholder="Enter Your Position"
                />
              </div>
              <div className="flex flex-col w-full max-w-[500px] sm:w-1/2 gap-y-4">
                <input
                  className="indent-2 py-3 rounded outline-addisblue"
                  type="number"
                  placeholder="TIN NO."
                />
                <input
                  className="indent-2 py-3 rounded outline-addisblue "
                  type="text"
                  placeholder="Company Name"
                />
                <input
                  className="indent-2 py-3 rounded outline-addisblue "
                  type="text"
                  placeholder="Country"
                />
                <div className="flex flex-col">
                  {/* <label htmlFor="region">Region</label> */}
                  <select
                    className="indent-2 py-3 rounded outline-addisblue"
                    name="region"
                    id="region"
                  >
                    <option value="">Select Region</option>
                    <option value="afar">Afar</option>
                    <option value="amhara">Amhara</option>
                    <option value="benishangul-gumuz">Benishangul-Gumuz</option>
                    <option value="gambela">Gambela</option>
                    <option value="harari">Harari</option>
                    <option value="oromia">Oromia</option>
                    <option value="somali">Somali</option>
                    <option value="snnp">
                      Southern Nations, Nationalities, and Peoples'
                      Region(SNNPR)
                    </option>
                    <option value="tigray">Tigray</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link to="submitted">
                <Button
                  text="Submit"
                  bgHover={"hover:bg-addisblue"}
                  textHover={""}
                  width={180}
                  py={9}
                />
              </Link>
            </div>
          </form>
        </div>

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
      </div>
    </main>
  );
};

export default DemoRequest;
