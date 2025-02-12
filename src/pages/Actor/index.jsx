import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetActorDetailsQuery,
  useGetActorMoviesQuery,
} from "../../redux/apiData/getDataSlice";
import MainBackground from "../Home/components/MainBackground";
import ActorWork from "./components/ActorWork";

const ActorDetails = () => {
  const { actorID } = useParams();
  console.log(actorID);
  const { data: actorData } = useGetActorDetailsQuery(actorID);
  const background = actorData?.profile_path
    ? `https://image.tmdb.org/t/p/original/${actorData.profile_path}`
    : "";

  return (
    <>
      {background && (
        <MainBackground background={background}>
          <div className="flex flex-wrap justify-between items-center gap-4 pt-48 relative z-20  w-full  container md:w-custom-md xl:w-custom-xl mx-auto">
            {actorData?.biography && (
              <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-1/2">
                <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-2xl">
                  {actorData.biography}
                </p>
              </div>
            )}

            <div className="flex flex-col justify-center items-center bg-white/20 p-4 gap-4 w-full lg:w-1/3 rounded-xl">
              {background && (
                <img
                  src={background}
                  alt="Actor Profile"
                  className="w-32 lg:w-48 rounded-3xl block borderGlass"
                />
              )}

              {actorData?.name && (
                <p className="text-white">{actorData.name}</p>
              )}

              <div className="flex flex-wrap justify-center items-center gap-2">
                {actorData?.birthday && (
                  <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full">
                    {actorData.birthday}
                  </p>
                )}
                {actorData?.place_of_birth && (
                  <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full">
                    {actorData.place_of_birth}
                  </p>
                )}
                {actorData?.imdb_id && (
                  <p className="text-white bg-white/5 shadow-black/10 backdrop-blur-[5px] border border-white/20 px-2 py-1 rounded-full text-nowrap">
                    IMDb ID: {actorData.imdb_id}
                  </p>
                )}
              </div>
            </div>
            <ActorWork />
          </div>
        </MainBackground>
      )}
    </>
  );
};

export default ActorDetails;
