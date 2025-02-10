import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDiscoverQuery } from "../../redux/apiData/getDataSlice";
import MovieCard from "../../components/MovieCard";
import ExploreSkeleton from "./ExploreSkeleton ";

const Explore = () => {
  const { explore } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const {
    data: exploreData,
    error,
    isLoading,
  } = useGetDiscoverQuery({
    type: explore,
    page: pageNum,
  });
  const totalPages = exploreData?.total_pages || 1;

  const handlePageChange = (page) => setPageNum(page);

  const generatePaginationButtons = () => {
    const buttons = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(pageNum - 2, 1);
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`px-3 py-1 rounded ${
            i === pageNum ? "bg-white text-black" : "bg-white/20 text-black/70"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };
  // console.log(isLoading);
  if (isLoading) {
    return <ExploreSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-neutral-400 pb-24">
      <div className="relative flex flex-col justify-start items-start gap-3 z-50 w-full container md:w-custom-md xl:w-custom-xl mx-auto pt-24">
        <p className="font-semibold text-2xl text-neutral-300">
          Explore Your Favorites {explore === "tv" ? "TV Show" : explore}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {exploreData?.results?.map((explore) => (
            <MovieCard
              key={explore.id}
              movie={explore}
              path={`${explore?.id}`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-5 w-full">
          <button
            onClick={() => handlePageChange(pageNum > 1 ? pageNum - 1 : 1)}
            className="px-3 py-1 rounded bg-gray-300 text-black disabled:opacity-50"
            disabled={pageNum === 1}
          >
            Prev
          </button>
          {generatePaginationButtons()}
          <button
            onClick={() =>
              handlePageChange(pageNum < totalPages ? pageNum + 1 : totalPages)
            }
            className="px-3 py-1 rounded bg-gray-300 text-black disabled:opacity-50"
            disabled={pageNum === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
