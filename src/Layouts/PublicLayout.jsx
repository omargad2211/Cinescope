import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PublicLayout;
