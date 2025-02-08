import { motion } from "framer-motion";
import { useGetMovieCrewQuery } from "../../../redux/apiData/getDataSlice";
import { useParams } from "react-router-dom";

const ScrollingCrew = () => {
  return (
    <div className="flex items-center justify-center z-20 pt-12 w-full overflow-hidden">
      <Scrolling />
    </div>
  );
};

const Scrolling = () => {
  const { movieID } = useParams();
  const { data: movieCrew } = useGetMovieCrewQuery(movieID);

  const crewItems = movieCrew?.cast?.filter((cast) => cast?.profile_path) || [];
  const duplicatedItems = [
    ...crewItems,
    ...crewItems,
    ...crewItems,
    ...crewItems,
  ];

  const marqueeVariants = {
    animate: {
      x: ["0%", `-${duplicatedItems.length * 12}%`], // Move based on dynamic item count
      transition: {
        x: {
          repeat: Infinity,
          duration: duplicatedItems.length * 1,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden py-5">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedItems.map((cast, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
              alt={cast.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <p className="text-sm font-bold text-white mt-2">{cast.name}</p>
            <p className="text-xs text-neutral-400">{cast.character}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingCrew;
