import React from "react";
import MovieCardSkeleton from "../../../components/MovieCardSkeleton ";

const TrendingShowsSkeleton = () => {
  return (
    <div className="relative flex flex-col justify-start items-start gap-3 z-50 w-full container md:w-custom-md xl:w-custom-xl mx-auto pt-12">
      <p className="font-semibold text-2xl text-neutral-500 animate-pulse">
        Loading Trending Shows...
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendingShowsSkeleton;
