import React from "react";
import MovieCardSkeleton from "../../components/MovieCardSkeleton ";

const MoodFilterSkeleton = () => {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-r from-black to-cyan-800">
      <div className="container md:w-custom-md xl:w-custom-xl mx-auto">
        <h1 className="text-xl mb-4 text-neutral-500 animate-pulse">
          Loading Mood Filter...
        </h1>

        {/* Mood Buttons Skeleton */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-32 bg-gray-700 animate-pulse rounded-md"
            />
          ))}
        </div>

        {/* Movie Card Skeleton Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodFilterSkeleton;
