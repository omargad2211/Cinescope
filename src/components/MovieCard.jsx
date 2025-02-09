import React from "react";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, path }) => {
  // console.log(movie);
  return (
    <div className="col-span-1 group hover:scale-105 transition-all cursor-pointer relative hover:z-[999] duration-300">
      <Link to={path}>
        <div className="relative">
          <img
            alt={movie.title}
            loading="lazy"
            width="350"
            height="350"
            className="md:min-h-[350px] skeleton rounded-3xl backdrop-blur-3xl"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>
        <div>
          <h3 className="mt-3 ml-3 text-start text-white font-medium lg:text-base text-sm">
            {movie.title || movie.name}
          </h3>
          <div className="flex gap-x-1 ml-3 mt-2">
            <IoIosStar className="text-yellow-400 text-xl mb-2" />
            <p className="text-white text-sm font-medium">
              {movie.vote_average}
            </p>
            <p className="text-white text-sm font-medium">
              |{" "}
              {movie.release_date?.slice(0, 4) ||
                movie.first_air_date?.slice(0, 4)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
