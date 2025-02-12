import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../../components/MovieCard";
import { useParams } from "react-router-dom";
import {
  useGetActorMoviesQuery,
  useGetRecommendedQuery,
} from "../../../redux/apiData/getDataSlice";

const ActorWork = () => {
  const { actorID } = useParams();

  const { data: actorMovies } = useGetActorMoviesQuery(actorID);

  //   console.log(actorMovies);
  const displayedMovies = actorMovies?.cast?.filter(
    (movie) => movie.backdrop_path !== null
  );
  //   console.log(displayedMovies);
  return (
    <div className="relative flex flex-col justify-start items-start gap-3 z-50 w-full container md:w-custom-md xl:w-custom-xl mx-auto py-24">
      <p className="font-semibold text-2xl text-neutral-400">Actor Works</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {displayedMovies?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              path={`/${movie.media_type === "tv" ? "tv" : "movie"}/${
                movie?.id
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActorWork;
