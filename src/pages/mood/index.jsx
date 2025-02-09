import { useEffect, useState } from "react";
import { useGetGenreQuery } from "../../redux/apiData/getDataSlice";
import MovieCard from "../../components/MovieCard";
import MoodFilterSkeleton from "./MoodFilterSkeleton";

const moodGenreMapping = {
  Happy: [35, 12, 10751], // Comedy, Adventure, Family
  Sad: [18, 10749], // Drama, Romance
  Adventurous: [12, 28], // Adventure, Action

  Excited: [28, 53], // Action, Thriller
  Scared: [27, 9648], // Horror, Mystery
  Thoughtful: [99, 36], // Documentary, History
  Romantic: [10749, 10751], // Romance, Family
  Nostalgic: [16, 10770], // Animation, TV Movie
  Futuristic: [878, 28], // Science Fiction, Action
  Heroic: [28, 14], // Action, Fantasy
  Mysterious: [9648, 53], // Mystery, Thriller
  Epic: [14, 36], // Fantasy, History
  Uplifting: [10751, 10402], // Family, Music
};

export default function MoodFilter() {
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [movieList, setMovieList] = useState([]);

  const toggleMood = (mood) => {
    setSelectedMoods((prev) =>
      prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]
    );
    setPageNum(1); // Reset page number on mood change
    setMovieList([]); // Clear previous movie list
  };

  // Combine all genre IDs for selected moods
  const genreIds = selectedMoods
    .flatMap((mood) => moodGenreMapping[mood])
    .join(",");

  const { data: movies, isLoading } = useGetGenreQuery({
    type: "movie",
    page: pageNum,
    genreIds,
  });

  // Append new data to movie list when `movies` changes
  useEffect(() => {
    if (movies?.results) {
      setMovieList((prev) => [...prev, ...movies.results]);
    }
  }, [movies]);

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setPageNum((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log(isLoading);
  if (isLoading) {
    return <MoodFilterSkeleton />;
  }
  return (
    <div className="min-h-screen py-24 bg-gradient-to-r from-black to-cyan-800">
      <div className="container md:w-custom-md xl:w-custom-xl mx-auto">
        <h1 className="text-xl mb-4 text-neutral-300">Select Your Mood</h1>
        <div className="flex gap-4 mb-6 flex-wrap">
          {Object.keys(moodGenreMapping).map((mood) => (
            <button
              key={mood}
              onClick={() => toggleMood(mood)}
              className={`px-4 py-2 rounded ${
                selectedMoods.includes(mood)
                  ? "bg-cyan-700/50 text-neutral-100"
                  : "bg-black/50 text-neutral-400"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {movieList.map((movie, index) => (
            <MovieCard
              key={`${movie.id}-${index}`}
              movie={movie}
              path={`/movie/${movie.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
