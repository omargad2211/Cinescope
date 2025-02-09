import React from "react";
import MovieCard from "../../../components/MovieCard";
import {
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "../../../redux/apiData/getDataSlice";

const TopRated = () => {
  const { data: topRated, isLoading, isError } = useGetTopRatedQuery();
  console.log(topRated?.results);

  return (
    <div className="relative flex flex-col justify-start items-start gap-3 z-50 w-full container md:w-custom-md xl:w-custom-xl mx-auto py-24">
      <p className="font-semibold text-2xl text-neutral-400">
        Top Rated Movies
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {topRated?.results.map((TopRated) => {
          return (
            <MovieCard
              key={TopRated.id}
              movie={TopRated}
              path={`movie/${TopRated?.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
