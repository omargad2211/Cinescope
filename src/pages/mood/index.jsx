import { useState } from "react";
import { useGetGenreQuery } from "../../redux/apiData/getDataSlice";
import MovieCard from "../../components/MovieCard";

const moodGenreMapping = {
  Happy: [35, 12, 10751], // Comedy, Adventure, Family
  Sad: [18, 10749], // Drama, Romance
  Excited: [28, 53], // Action, Thriller
  Scared: [27, 9648], // Horror, Mystery
  Thoughtful: [99, 36], // Documentary, History
};
export default function MoodFilter() {
  const [selectedMoods, setSelectedMoods] = useState([]);

  const toggleMood = (mood) => {
    setSelectedMoods((prev) =>
      prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]
    );
  };

  // Combine all genre IDs for selected moods
  const genreIds = selectedMoods
    .flatMap((mood) => moodGenreMapping[mood])
    .join(",");

  const { data: movies, isLoading } = useGetGenreQuery({
    type: "movie",
    page: 1,
    genreIds, // pass genreIds if needed
  });
  console.log(movies);
  return (
    <div className="min-h-screen py-24 bg-gradient-to-r from-black to-cyan-700">
      <div className="container md:w-custom-md xl:w-custom-xl mx-auto">
        <h1 className="text-xl mb-4 text-neutral-300">Select Your Mood</h1>
        <div className="flex gap-4 mb-6">
          {Object.keys(moodGenreMapping).map((mood) => (
            <button
              key={mood}
              onClick={() => toggleMood(mood)}
              className={`px-4 py-2 rounded ${
                selectedMoods.includes(mood)
                  ? "bg-green-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            {movies?.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
