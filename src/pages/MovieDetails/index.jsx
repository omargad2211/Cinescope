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
  console.log(movieID);
  const dispatch = useDispatch();

  // get movie details
  const {
    data: movieData,
    error,
    isLoading,
  } = useGetMovieDetailsQuery({ type: explore, id: movieID });
  console.log(movieData);
  const background = `https://image.tmdb.org/t/p/original/${movieData?.poster_path}`;
  console.log(background);

  // get movie video
  const { data: movieVedios } = useGetMovieVideoQuery({
    type: explore,
    id: movieID,
  });
  const { data: movieImages } = useGetMovieImagesQuery({
    type: explore,
    id: movieID,
  });
  console.log(movieImages);

  const wishlist = useSelector((state) => state.wishlist.items);
  const isSelected = wishlist?.some((item) => item.id === movieID);

  const handleToggleWishlist = () => {
    if (isSelected) {
      dispatch(removeFromWishlist({ id: movieID }));
    } else {
      dispatch(
        addToWishlist({
          id: movieID,
          type:explore,
          name: movieData?.original_title || movieData?.title,
          description: movieData?.overview,
          image: background,
          rate: movieData?.vote_average,
          date: movieData?.release_date,
          duration: movieData?.runtime,
          categories: movieData?.genres,
          isSelected: true,
        })
      );
    }
  };

  return (
    <>
      <MainBackground background={background}>
        <div className="flex flex-wrap justify-between items-center gap-4 pt-48 relative z-20  w-full  container md:w-custom-md xl:w-custom-xl mx-auto  ">
          <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-1/2">
            {/* title image  */}
            {movieImages?.logos[0]?.file_path != undefined ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieImages?.logos[0]?.file_path}`}
                alt="movies"
                width={350}
                height={350}
                className=" h-auto lg:w-[20%] w-[35%] lg:h-auto"
              />
            ) : (
              <p className="text-3xl lg:text-5xl pt-2 3 pb-4     mBlur  borderGlass rounded-3xl inline-block    px-3 text-white font-extrabold lg:mt-10 ">
                {movieData?.original_name}
              </p>
            )}

            <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full ">
              {movieData?.tagline}
            </p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full ">
                {movieData?.release_date}
              </p>
              {movieData?.genres.map((genre) => (
                <p
                  key={genre?.id}
                  className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full "
                >
                  {genre?.name}
                </p>
              ))}
            </div>
            <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-lg ">
              {movieData?.overview}
            </p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-lg ">
                Duration: {movieData?.runtime} mins
              </p>
              <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-lg ">
                status : {movieData?.status}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/20 p-4 gap-4 w-full lg:w-1/3 rounded-xl">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieImages?.posters[0]?.file_path} `}
              alt="poster_Movie"
              className="w-32 lg:w-48 rounded-3xl block     borderGlass "
            />

            <div className=" mBlur  border mBlur  borderGlass rounded-3xl py-3 px-5 lg:px-10  hover:shadow-black group hover:shadow-2xl transition-all hover:scale-105">
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${movieVedios?.results[0]?.key}`}
                className=" flex flex-col gap-y-3 items-center     justify-center "
              >
                <p className="  text-white text-[12px] lg:text-sm font-semibold   ">
                  <MdSlowMotionVideo className="text-green text-2xl inline  mx-1 " />
                  Watch Trailer
                </p>
              </a>
            </div>
            <button
              onClick={() => handleToggleWishlist()}
              className=" flex flex-col gap-y-3 items-center    justify-center  mBlur  border mBlur  borderGlass  rounded-3xl py-3 px-5 lg:px-8 hover:scale-105 transition-all"
            >
              <p className=" text-white text-[12px] lg:text-sm font-semibold flex items-center justify-center   ">
                {isSelected ? (
                  <>
                    <IoHeartDislikeOutline className="text-white text-sm lg:text-2xl inline mx-1" />
                    Remove from Favourites
                  </>
                ) : (
                  <>
                    <RiHeartAddFill className="text-white text-sm lg:text-2xl inline mx-1" />
                    Add to Favourites
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
