import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* <div className=" min-h-[900px]"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Layout;
