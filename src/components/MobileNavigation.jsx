import React from "react";
import { BiHeartCircle, BiSolidMoviePlay } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { TbMoodSearch } from "react-icons/tb";


const MobileNavigation = () => {
  const mobileNavigation = [
    {
      title: "Home",
      path: "/",
      icon: <MdHomeFilled />,
    },
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
    {
      title: "Favorites",
      path: "favorites",
      icon: <CiHeart />,
    },
    {
      title: "Mood",
      path: "mood",
      icon: <TbMoodSearch /> ,
    },
  ];
  return (
    <div className="z-[9999] fixed bottom-4 w-full px-4 md:px-0">
      <section className="lg:hidden bg-white/20 shadow-black/10 backdrop-blur-[5px] border border-white/20 container w-full md:w-custom-md xl:w-custom-xl transition-all duration-300 h-16 mx-auto shadow-sm rounded-full gap-2">
        <div className="flex items-center justify-between h-full text-neutral-400">
          {mobileNavigation.map((nav, index) => {
            return (
              <NavLink
                key={nav.title + "mobilenavigation"}
                to={nav.path}
                className={({ isActive }) =>
                  `px-3 flex h-full items-center flex-col justify-center ${
                    isActive && "text-white"
                  }`
                }
              >
                <div className="text-2xl">{nav.icon}</div>
                <p className="text-sm">{nav.title}</p>
              </NavLink>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MobileNavigation;
