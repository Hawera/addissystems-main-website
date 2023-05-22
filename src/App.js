import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import posHero from "./image/pos service with bg-01.png";
import erpHero from "./image/ERP-image.png";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import UserGuide from "./Pages/UserGuide";
import Faq from "./Pages/Faq";
import Help from "./Pages/Help";
import DemoRequest from "./Pages/DemoRequest";
import Submitted from "./Pages/Submitted";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
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
              heroImage={posHero}
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
                "Enterprise resource planning, or ERP, software enables businesses to control all facets of their operations, including finance, human resources, manufacturing, sales, planning, and supply chain, from a single interface."
              }
              heroImage={erpHero}
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
        <Route exact path="demo-request/submitted" element={<Submitted />} />
      </Route>
    </Routes>
  );
}

export default App;
