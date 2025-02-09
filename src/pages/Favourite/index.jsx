import React from "react";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/wishList/wishlistSlice";

const Favourite = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
    console.log(wishlist);
    
      const dispatch = useDispatch();

      const handleToggleWishlist = (teacher) => {
        dispatch(removeFromWishlist({ id: wishlist?.id }));
      };

  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-red-950 py-24 z-20 w-full">
      <div className="flex flex-col items-start gap-2 min-w-full container md:w-custom-md xl:w-custom-xl mx-auto">
        {wishlist.map((movie) => {
          return (
            <div
              key={movie.id}
              className="bg-white/20 rounded-full border border-neutral-400 w-full md:w-4/5 flex items-center justify-evenly  gap-2 px-5 py-2"
            >
              <img
                src={movie.image}
                alt="movie image"
                className="size-16 rounded-2xl"
              />
              <div className="flex flex-col items-start justify-start gap-1 px-2 ">
                <p className="text-neutral-200 font-semibold text-base">
                  {movie.name} ({movie.date.slice(0, 4)})
                </p>
                <p className="text-neutral-400 font-thin text-xs truncate-multiline pr-8">
                  {movie.description}
                </p>
                <div className="flex justify-center items-center gap-1 text-sm">
                  {movie?.categories.map((category) => (
                    <p
                      key={category?.id}
                      className="text-neutral-300 bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full "
                    >
                      {category?.name}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-start justify-center gap-1">
                  <IoIosStar className="text-yellow-400 text-xl mb-2" />
                  <p className="text-white text-sm font-medium">{movie.rate}</p>
                </div>
                <p className="text-neutral-300 bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-3 py-1 rounded-full  ">
                  {movie?.duration}mins
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
