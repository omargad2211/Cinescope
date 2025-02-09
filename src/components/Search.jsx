import React, { useState } from "react";
import { IoIosSearch, IoIosStar } from "react-icons/io";
import { useGetSearchQuery } from "../redux/apiData/getDataSlice";
import { Link } from "react-router-dom";

const Search = () => {
  const [pageNum, setPageNum] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: searchData,
    error,
    isLoading,
  } = useGetSearchQuery({ name: searchQuery, page: pageNum });

  return (
    <>
      <label className="relative text-gray-200 ">
        <input
          className="border-[1px] w-full bg-transparent rounded-full outline-none ring-0 py-1 px-2 pl-10"
          type="search"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </label>

      {/* Only render the results div if searchQuery has a value and searchData exists */}
      {searchQuery && searchData?.results?.length > 0 && (
        <div className="absolute top-[65px] z-[51] rounded-3xl right-0 w-full h-[440px] shadow-black/10 backdrop-blur-[5px] border border-white/60 overflow-y-auto scrollbar-hide searchglass">
          <div className="absolute top-0 h-full w-full rounded-3xl"></div>
          {searchData?.results?.map(
            (item) =>
              item.poster_path != null && (
                <Link
                  onClick={() => setSearchQuery("")}
                  key={item.id}
                  to={
                    item.media_type === "tv"
                      ? `/tv/${item.id}`
                      : `/movie/${item.id}`
                  }
                >
                  <div className="flex gap-x-2 px-3 rounded-b-3xl border-b border-[#ffffff1f] py-2 items-center relative z-[55]">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                      width={50}
                      height={50}
                      alt={`${item?.original_title || item?.name}`}
                      className="rounded-lg z-[55]"
                    />
                    <div className="flex flex-col justify-center items-start flex-wrap gap-x-2 z-[55]">
                      <p className="text-white text-[12px]">
                        {item?.original_title || item?.name}
                      </p>
                      <div className="flex items-center justify-center gap-x-1">
                        <p className="text-white text-[12px]">
                          <IoIosStar className="text-yellow-400 mb-1 inline" />
                          {item?.vote_average?.toString().slice(0, 3)}
                        </p>
                        <p className="text-white text-[12px]">
                          |{" "}
                          {item?.release_date?.toString().slice(0, 4) ||
                            item?.first_air_date?.toString().slice(0, 4)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      )}

      {/* Optionally, handle no search results */}
      {searchQuery && searchData?.results?.length === 0 && (
        <div className="absolute top-[65px] z-[51] w-full bg-white/50 rounded-3xl p-4 text-center text-gray-500">
          No results found
        </div>
      )}
    </>
  );
};

export default Search;
