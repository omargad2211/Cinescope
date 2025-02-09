import React from "react";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/wishList/wishlistSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Favorites = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(removeFromWishlist({ id }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-red-950 py-24 z-20 w-full">
      <div className="container md:w-custom-md xl:w-custom-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-bold uppercase tracking-wider">
            Your Favorites
          </h1>
          <p className="text-neutral-300 mt-2 py-2 px-4 rounded-lg max-w-sm mx-auto">
            Slide left to remove from favorites
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          {Array.isArray(wishlist) &&
            wishlist.map((movie) => {
              if (!movie) return null; // Safeguard against undefined movie objects
              return (
                <div key={movie.id} className="relative w-full md:w-4/5">
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: -80, right: 0 }}
                    onDragEnd={(event, info) => {
                      if (info.offset.x < -60) {
                        handleRemoveMovie(movie.id);
                      }
                    }}
                    className="bg-white/20 rounded-full border border-neutral-400 flex items-center justify-evenly gap-2 px-5 py-2"
                  >
                    <Link
                      to={`/${movie.type}/${movie.id}`}
                      className="flex w-full items-center gap-2"
                    >
                      {movie.image && (
                        <img
                          src={movie.image}
                          alt="movie image"
                          className="size-16 rounded-2xl"
                        />
                      )}
                      <div className="flex flex-col items-start justify-start gap-1 px-2">
                        <p className="text-neutral-200 font-semibold text-base">
                          {movie.name}{" "}
                          {movie.date ? `(${movie.date.slice(0, 4)})` : ""}
                        </p>
                        <p className="text-neutral-400 font-thin text-xs truncate-multiline pr-8">
                          {movie.description}
                        </p>
                        {Array.isArray(movie.categories) && (
                          <div className="flex justify-center items-center gap-1 text-sm">
                            {movie.categories.map(
                              (category) =>
                                category && (
                                  <p
                                    key={category.id}
                                    className="text-neutral-300 bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full"
                                  >
                                    {category.name}
                                  </p>
                                )
                            )}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-start justify-center gap-1">
                          <IoIosStar className="text-yellow-400 text-xl mb-2" />
                          <p className="text-white text-sm font-medium">
                            {movie.rate}
                          </p>
                        </div>
                        {movie.duration && (
                          <p className="text-neutral-300 bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-3 py-1 rounded-full">
                            {movie.duration}mins
                          </p>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
