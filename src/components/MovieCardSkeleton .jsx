import React from "react";
import { IoIosStar } from "react-icons/io";

const MovieCardSkeleton = () => {
  return (
    <div className="col-span-1 group hover:scale-105 transition-all cursor-pointer relative hover:z-[999] duration-300">
      <div className="relative">
        <div className="md:min-h-[350px] w-full rounded-3xl backdrop-blur-3xl bg-gray-700 animate-pulse" />
      </div>
      <div>
        <div className="mt-3 ml-3 h-4 w-2/3 bg-gray-600 rounded-md animate-pulse" />
        <div className="flex gap-x-1 ml-3 mt-2">
          <div className="text-xl text-yellow-400">
            <IoIosStar className="opacity-50" />
          </div>
          <div className="h-4 w-8 bg-gray-600 rounded-md animate-pulse" />
          <div className="h-4 w-12 bg-gray-600 rounded-md animate-pulse ml-1" />
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
