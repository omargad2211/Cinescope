import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../../components/MovieCard";

const TrendingShows = () => {
  const bannerData = useSelector((state) => state.movies.bannerData);
  console.log(bannerData);
  return (
    <div className="relative flex flex-col justify-start items-start gap-3 z-50 w-full container md:w-custom-md xl:w-custom-xl mx-auto pt-24">
      <p className="font-semibold text-2xl text-neutral-400">Trending Show</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {bannerData?.map((trending) => {
          return (
            <MovieCard
              key={trending.id}
              movie={trending}
              path={`movie/${trending?.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingShows;
