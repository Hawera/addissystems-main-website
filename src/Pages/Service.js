import React from "react";
import { useState, useEffect } from "react";
import { features } from "../data";
import MainService from "../Components/MainService";
import Heading from "../Components/Heading";
import Moto from "../Components/Moto";
import Button from "../Components/Button";
import Sponsors from "../Components/Sponsors";
import Feature from "../Components/Feature";
import LearnMore from "../Components/LearnMore";

const Service = ({ heading, title, paragraph, heroImage }) => {
  // const [data, setData] = useState([]);
  // const API_URL = "http://localhost:3500/features";

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       const feature = await response.json();
  //       setData(feature);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   (async () => await fetchItems())();
  // }, []);

  return (
    <main className="">
      <MainService
        heading={heading}
        title={title}
        paragraph={paragraph}
        heroImage={heroImage}
      />
      <Heading
        head={"ADDIS B2B/POS Service Integration Can"}
        headtwo={"Benefit Business"}
        para={
          "Discover the advantages of using B2B/POS Service integration to digitize information flowing through business ecosystems."
        }
      />
      <div className="max-w-7xl px-2 sm:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-5  ">
        {features.map((data) => (
          <Feature key={data.title} feature={data} />
        ))}
      </div>
      <Moto />
      <LearnMore />
      <Sponsors />
    </main>
  );
};

export default Service;
