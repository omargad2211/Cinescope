import React from "react";
import { useParams } from "react-router-dom";
import MainBackground from "../Home/components/MainBackground";
import {
  useGetMovieDetailsQuery,
  useGetMovieImagesQuery,
  useGetMovieVideoQuery,
  useGetRecommendedQuery,
} from "../../redux/apiData/getDataSlice";
import { MdDeleteForever, MdSlowMotionVideo } from "react-icons/md";
import { RiHeartAddFill } from "react-icons/ri";
import ScrollingCrew from "./components/ScrollingCrew";
import RecommendedMovies from "./components/RecommendedMovies";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/wishList/wishlistSlice";
import { IoHeartDislikeOutline } from "react-icons/io5";

const MovieDetails = () => {
  const { movieID, explore } = useParams();
  const dispatch = useDispatch();

  // get movie details
  const { data: movieData } = useGetMovieDetailsQuery({
    type: explore,
    id: movieID,
  });
  const background = `https://image.tmdb.org/t/p/original/${movieData?.poster_path}`;

  // get movie video
  const { data: movieVedios } = useGetMovieVideoQuery({
    type: explore,
    id: movieID,
  });
  const { data: movieImages } = useGetMovieImagesQuery({
    type: explore,
    id: movieID,
  });

  const wishlist = useSelector((state) => state.wishlist.items);
  const isSelected = wishlist?.some((item) => item.id === movieID);

  const handleToggleWishlist = () => {
    if (isSelected) {
      dispatch(removeFromWishlist({ id: movieID }));
    } else {
      dispatch(
        addToWishlist({
          id: movieID,
          type: explore,
          name:
            movieData?.original_title ||
            movieData?.title ||
            movieData?.original_name,
          description: movieData?.overview,
          image: background,
          rate: movieData?.vote_average,
          date: movieData?.release_date,
          duration: movieData?.runtime,
          seasons: movieData?.number_of_seasons,
          categories: movieData?.genres,
          isSelected: true,
        })
      );
    }
  };

  return (
    <>
      <MainBackground background={background}>
        <div className="flex flex-wrap justify-between items-center gap-4 pt-48 relative z-20  w-full  container md:w-custom-md xl:w-custom-xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-1/2">
            {/* title image  */}
            {movieImages?.logos[0]?.file_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieImages?.logos[0]?.file_path}`}
                alt="movies"
                width={350}
                height={350}
                className="h-auto lg:w-[20%] w-[35%] lg:h-auto"
              />
            )}
            {!movieImages?.logos[0]?.file_path && movieData?.original_name && (
              <p className="text-3xl lg:text-5xl pt-2 pb-4 mBlur borderGlass rounded-3xl inline-block px-3 text-white font-extrabold lg:mt-10">
                {movieData.original_name}
              </p>
            )}

            {movieData?.tagline && (
              <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full">
                {movieData.tagline}
              </p>
            )}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {movieData?.release_date && (
                <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full">
                  {movieData.release_date}
                </p>
              )}
              {movieData?.genres?.map(
                (genre) =>
                  genre?.name && (
                    <p
                      key={genre?.id}
                      className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full"
                    >
                      {genre.name}
                    </p>
                  )
              )}
            </div>
            {movieData?.overview && (
              <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-lg">
                {movieData.overview}
              </p>
            )}
            <div className="flex items-center justify-center gap-2">
              {movieData?.runtime && (
                <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-lg">
                  Duration: {movieData.runtime} mins
                </p>
              )}
              {movieData?.number_of_seasons && (
                <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-lg">
                  Seasons: {movieData.number_of_seasons}
                </p>
              )}
              {movieData?.status && (
                <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-lg">
                  Status: {movieData.status}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/20 p-4 gap-4 w-full lg:w-1/3 rounded-xl">
            {movieImages?.posters[0]?.file_path && (
              <img
                src={`https://image.tmdb.org/t/p/original/${movieImages?.posters[0]?.file_path}`}
                alt="poster_Movie"
                className="w-32 lg:w-48 rounded-3xl block borderGlass"
              />
            )}

            {movieVedios?.results[0]?.key && (
              <div className="mBlur border mBlur borderGlass rounded-3xl py-3 px-5 lg:px-10 hover:shadow-black group hover:shadow-2xl transition-all hover:scale-105">
                <a
                  target="_blank"
                  href={`https://www.youtube.com/watch?v=${movieVedios.results[0].key}`}
                  className="flex flex-col gap-y-3 items-center justify-center"
                >
                  <p className="text-white text-[12px] lg:text-sm font-semibold">
                    <MdSlowMotionVideo className="text-green text-2xl inline mx-1" />
                    Watch Trailer
                  </p>
                </a>
              </div>
            )}
            <button
              onClick={() => handleToggleWishlist()}
              className="flex flex-col gap-y-3 items-center justify-center mBlur border mBlur borderGlass rounded-3xl py-3 px-5 lg:px-8 hover:scale-105 transition-all"
            >
              <p className="text-white text-[12px] lg:text-sm font-semibold flex items-center justify-center">
                {isSelected ? (
                  <>
                    <IoHeartDislikeOutline className="text-white text-sm lg:text-2xl inline mx-1" />
                    Remove from Favorites
                  </>
                ) : (
                  <>
                    <RiHeartAddFill className="text-white text-sm lg:text-2xl inline mx-1" />
                    Add to Favorites
                  </>
                )}
              </p>
            </button>
          </div>
          <ScrollingCrew />
        </div>
        <RecommendedMovies />
      </MainBackground>
    </>
  );
};

export default MovieDetails;
