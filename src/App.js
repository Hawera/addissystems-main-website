import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import posHero from "./image/pos service with bg-01.png";
import erpHero from "./image/ERP-image.png";
import invoiceimage from "./image/Addis e-invoice-01.png";
import businessinteligence from "./image/business inteligent.png";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import UserGuide from "./Pages/UserGuide";
import Faq from "./Pages/Faq";
import Help from "./Pages/Help";
import DemoRequest from "./Pages/DemoRequest";
import Submitted from "./Pages/Submitted";
import { features } from "./data";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      // offset: 50,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="pos-service"
          element={
            <Service
              heading={"POS Service"}
              title={"Easy Payments With Addis POS services"}
              paragraph={
                "A POS system refers to the combination of hardware and software required to accept and process different forms of digital payments. The hardware includes a card acceptance machine and the software handles the remaining payment methods, processing and other peripheral value added services"
              }
              featureData1={features.posFeature.feature}
              bannerImage={posHero}
            />
          }
        />
        <Route
          path="erp-service"
          element={
            <Service
              heading={"ERP Service"}
              title={"Easy Payments With Addis POS services"}
              paragraph={
                "Enterprise resource planning, or ERP, software enables businesses to control all facets of their operations, including finance, human resources, manufacturing, sales, planning, and supply chain, from a single interface. Accounting, project management, planning, customer relationship management and compliance, procurement, and other business operations can all be integrated and automated with the help of enterprise resource planning software. Business executives can make better decisions thanks to the automation of all internal processes enabled by ERP software solutions, which also give them access to vital real-time data and insights."
              }
              featureData1={features.posFeature.feature}
              bannerImage={erpHero}
            />
          }
        />
        <Route
          path="electronic-invoice"
          element={
            <Service
              heading={"Electronic Invoice"}
              title={
                "We automate the E-invoicing process, saving businesses time and money"
              }
              paragraph={
                "Electronic invoice is the receipt of goods exchanging activity between a supplier and a buyer in electronic format. Automated billing completely replaces the role of a paper-based invoice as a tax receipt. With the right e-invoicing system, we can cut the costs of issuing, sending, storing, accessing, and archiving business information. Various studies have demonstrated significant savings e-invoice compared with paper billing. According to European Commission, electronic invoice is defined as a compilation of e-data messages on goods sale or service provision, which is created, billed, sent, received, stored and managed electronically. E-invoices shall be created, billed and processed in the computer system of an organization having a tax identification number upon the sale of goods or provision of services and stored in computers of involved parties under the law on e-transactions."
              }
              featureData1={features.electronicInvoice.feature}
              bannerImage={invoiceimage}
            />
          }
        />
        <Route
          path="business-intelligence"
          element={
            <Service
              heading={"Business Intelligence"}
              title={"Easy Payments With Addis POS services"}
              paragraph={
                "Business Intelligence is the application of data analytics techniques and digital technology for the purpose of collecting, storing and analyzing business data for the purpose of driving business insights and make informed decisions. It is software that ingests business data and presents it in user-friendly views such as reports, dashboards, charts and graphs. Businesses and organizations have questions and goals. To answer these questions and track performance against these goals, they gather the necessary data, analyze it, and determine which actions to take to reach their goals. On the technical side, raw data is collected from business systems. Data is processed and then stored in data warehouses, the cloud, applications, and files. Once it is stored, users can access the data, starting the analysis process to answer business questions. In general, BI services can help businesses to leverage the data contained in electronic invoices to gain insights into their operations and make informed decisions that can improve their performance and competitiveness."
              }
              featureData1={
                features.businessIntelligence.featureToBusinessCommunity
              }
              featureData2={features.businessIntelligence.featureToAuthor}
              bannerImage={businessinteligence}
            />
          }
        />
        <Route path="about-us" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user-guide" element={<UserGuide />} />
        <Route path="faq" element={<Faq />} />
        <Route path="help" element={<Help />} />
        <Route path="demo-request" element={<DemoRequest />} />
        <Route path="demo-request/submitted" element={<Submitted />} />
      </Route>
    </Routes>
  );
}

export default App;
