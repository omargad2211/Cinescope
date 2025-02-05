import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
      <MobileNavigation />
    </>
  );
};

export default PublicLayout;
