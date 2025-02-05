import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative text-gray-200 hidden lg:block"
        >
          <input
            className="border-[1px] w-full bg-transparent rounded-full outline-none ring-0 py-1 px-2 pl-10"
            type="search"
            placeholder="search"
            {...register("searchQuery", { required: true })}
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          >
            <IoIosSearch />
          </button>
        </form>

        {/* profile */}
        <Link to="/profile">
          <img
            src="/images/User-Profile-PNG-Clipart.png"
            alt="profile"
            className="size-8"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
