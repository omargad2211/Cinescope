import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../../components/MovieCard";
import { useParams } from "react-router-dom";
import { useGetRecommendedQuery } from "../../../redux/apiData/getDataSlice";

const RecommendedMovies = () => {
  const { movieID } = useParams();

  // get related movies
  const { data: relatedMovies } = useGetRecommendedQuery({
    type: "movie",
    id: movieID,
  });

  console.log(relatedMovies);
  return (
    <div className="relative flex flex-col justify-start items-start gap-3 z-50 w-full container md:w-custom-md xl:w-custom-xl mx-auto pt-24">
      <p className="font-semibold text-2xl text-neutral-400">Recommendations</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {relatedMovies?.results?.map((trending) => {
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

export default RecommendedMovies;
