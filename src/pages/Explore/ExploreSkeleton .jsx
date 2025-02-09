import React from "react";
import MovieCardSkeleton from "../../components/MovieCardSkeleton ";

const ExploreSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-neutral-400 pb-24">
      <div className="relative flex flex-col justify-start items-start gap-3 z-50 w-full container md:w-custom-md xl:w-custom-xl mx-auto pt-24">
        <p className="font-semibold text-2xl text-neutral-500 animate-pulse">
          Loading...
        </p>

        {/* Skeleton grid for movie cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center gap-2 mt-5 w-full">
          <div className="h-8 w-16 bg-gray-300 animate-pulse rounded-md" />
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-8 w-8 bg-gray-300 animate-pulse rounded-md"
            />
          ))}
          <div className="h-8 w-16 bg-gray-300 animate-pulse rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ExploreSkeleton;
