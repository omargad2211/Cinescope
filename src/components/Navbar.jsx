import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import Search from "./Search";

const Navbar = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const navigation = [
    {
      title: "TV Shows",
      path: "tv",
      icon: <PiTelevisionFill />,
    },
    {
      title: "Movies",
      path: "movie",
      icon: <BiSolidMoviePlay />,
    },
  ];

  // Handle form submission
  const onSubmit = (data) => {
    navigate(`/search?q=${data.searchQuery}`);
  };

  return (
    <nav className="z-[9999] fixed top-4 w-full px-4 md:px-0">
      <div className="bg-white/20 shadow-black/10 backdrop-blur-[5px] border border-white/20 container w-full md:w-custom-md xl:w-custom-xl transition-all duration-300 h-16 mx-auto shadow-sm rounded-full flex items-center justify-between gap-2">
        {/* logo */}
        <Link to="/">
          <img
            src="/images/cinescope-removebg-preview.png"
            alt="logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* nav items */}
        <div className=" hidden lg:flex items-center justify-center gap-4 mx-auto">
          {navigation.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.path}
              className="text-gray-300 hover:text-gray-100 transition-colors duration-500"
            >
              {nav.title}
            </NavLink>
          ))}
        </div>

        {/* search */}
        <Search />
        {/* profile */}
        <Link to="/profile" className="hidden lg:block">
          <img
            src="/images/User-Profile-PNG-Clipart.png"
            alt="profile"
            className="size-8 "
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
