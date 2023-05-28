import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../Components/Heading";
import Banner from "../Components/Banner";
import flag from "../image/1x/ethiopian_flag.svg";
import Button from "../Components/Button";
import Sponsors from "../Components/Sponsors";
import LearnMore from "../Components/LearnMore";
import axios from "axios";

const DemoRequest = () => {
  const [spinloading, setSpinLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    Fname: "",
    Lname: "",
    inputtitle: "",
    businessname: "",
    email: "",
    phone: "",
    city: "",
    country: "Ethiopia",
    // service: "POS Service",
    tin_no: "",
  };
  const [demoReqForm, setDemoReqForm] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDemoReqForm({ ...demoReqForm, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(demoReqForm);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Fname) {
      errors.Fname = "FirstName is required!";
    }
    if (!values.Lname) {
      errors.Lname = "LastName is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (values.phone.length < 4) {
      errors.phone = "Phone Number must be more than 4 Number";
    } else if (values.phone.length > 10) {
      errors.phone = "Phone Number cannot exceed more than 10 Number";
    }
    if (!values.inputtitle) {
      errors.inputtitle = "Position is required!";
    }
    if (!values.businessname) {
      errors.businessname = "Company Name is required!";
    }
    if (!values.city) {
      errors.city = "Region is required!";
    }
    if (!values.country) {
      errors.country = "Country is required!";
    }
    if (!values.tin_no) {
      errors.tin_no = "Tin Number is required";
    } else if (values.tin_no.length < 4) {
      errors.tin_no = "Tin Number must be more than 4 Number";
    } else if (values.tin_no.length > 10) {
      errors.tin_no = "Tin Number cannot exceed more than 10 Number";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(demoReqForm));
    setIsSubmit(true);
    setSpinLoading(true)
   if(isSubmit !== false){
    try {
      axios.post('https://party.addissystems.et/Demo_handler', demoReqForm).then((response) =>{
         console.log(response)
        if(response.status === 201){
           console.log(response.data.token)
          const pathurl = `https://admin.addissystems.et/create-password/${response.data.token}`
           setSpinLoading(false)
          // dispatch(emailSend(demoReqForm.email, pathurl))
          axios.post('https://email.api.qa.addissystems.et/api/v1/account_create', {
            email: demoReqForm.email,
            path: pathurl,
        }).then((res) => {
          console.log(res)
        })
        } else {
          // setErrMsg(response.data.meg)
          setSpinLoading(false)
        }
      })
      //  dispatch(emailSend(demoReqForm.email, path));
    } catch (err) {
      
    }
  }

   }

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
          <form className=" " onSubmit={handleSubmit}>
            <h1 className=" text-center text-xl mb-8">
              Fill the following information
            </h1>
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(demoReqForm, undefined, 2)}</pre>
      )} */}
            <div className=" flex flex-col sm:flex-row items-center sm:items-start justify-center gap-y-8 sm:gap-4 ">
            
              <div className="flex flex-col w-full max-w-[500px] sm:w-1/2 gap-y-4">
                <input
                  className={
                    formErrors.Fname
                      ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                      : "indent-2 py-3 rounded outline-addisblue"
                  }
                  type="text"
                  placeholder="First Name"
                  name="Fname"
                  value={demoReqForm.Fname}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.Fname
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.Fname}
                </p>
                <input
                  className={
                    formErrors.Lname
                      ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                      : "indent-2 py-3 rounded outline-addisblue"
                  }
                  type="text"
                  name="Lname"
                  placeholder="Last Name"
                  value={demoReqForm.Lname}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.Lname
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.Lname}
                </p>
                <div
                  className={
                    formErrors.phone
                      ? "flex items-center bg-white rounded pl-2 border-[1px] border-rose-600"
                      : "flex items-center bg-white rounded pl-2"
                  }
                >
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
                    name="phone"
                    placeholder="Phone Number"
                    value={demoReqForm.phone}
                    onChange={handleChange}
                  />
                </div>
                <p
                  className={
                    formErrors.phone
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.phone}
                </p>
                <input
                className={
                  formErrors.email
                    ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                    : "indent-2 py-3 rounded outline-addisblue"
                }
                name="email"
                  type="email"
                  placeholder="Email Address"
                  value={demoReqForm.email}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.email
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.email}
                </p>
                <input
                  className={
                    formErrors.inputtitle
                      ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                      : "indent-2 py-3 rounded outline-addisblue"
                  }
                  type="text"
                  name="inputtitle"
                  placeholder="Enter Your Position"
                  value={demoReqForm.inputtitle}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.inputtitle
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.inputtitle}
                </p>
              </div>
              <div className="flex flex-col w-full max-w-[500px] sm:w-1/2 gap-y-4">
                <input
                  className={
                    formErrors.tin_no
                      ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                      : "indent-2 py-3 rounded outline-addisblue"
                  }
                  type="number"
                  name="tin_no"
                  placeholder="TIN NO."
                  value={demoReqForm.tin_no}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.tin_no
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.tin_no}
                </p>
                <input
                  className={
                    formErrors.businessname
                      ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                      : "indent-2 py-3 rounded outline-addisblue"
                  }
                  type="text"
                  name="businessname"
                  placeholder="Company Name"
                  value={demoReqForm.businessname}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.businessname
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.businessname}
                </p>
                <input
                  className={
                    formErrors.country
                      ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                      : "indent-2 py-3 rounded outline-addisblue"
                  }
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={demoReqForm.country}
                  onChange={handleChange}
                />
                <p
                  className={
                    formErrors.country
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.country}
                </p>
                <div className="flex flex-col">
                  {/* <label htmlFor="region">Region</label> */}
                  <select
                    className={
                      formErrors.city
                        ? "indent-2 py-3 rounded outline-addisblue border-[1px] border-rose-600"
                        : "indent-2 py-3 rounded outline-addisblue"
                    }
                    name="city"
                    id="region"

                    value={demoReqForm.city}
                    onChange={handleChange}
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
                <p
                  className={
                    formErrors.city
                      ? "text-[11px] text-red-600 -mt-4 -mb-3 ml-2"
                      : "text-[11px] text-red-600 -mt-4 ml-2"
                  }
                >
                  {formErrors.city}
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              {/* <Link to="submitted"> */}
              <Button
                text="Submit"
                bgHover={"hover:bg-addisblue"}
                textHover={""}
                width={180}
                py={9}
              />
              {/* </Link> */}
            </div>
          </form>
        </div>

        <LearnMore />
        <Sponsors />
      </div>
    </main>
  );
};

export default DemoRequest;
