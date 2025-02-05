import React from "react";
import { useParams } from "react-router-dom";
import MainBackground from "../Home/components/MainBackground";
import { useGetMovieDetailsQuery } from "../../redux/apiData/getDataSlice";

const MovieDetails = () => {
  const { movieID } = useParams();
  console.log(movieID);
  const {
    data: movieData,
    error,
    isLoading,
  } = useGetMovieDetailsQuery(movieID);
  console.log(movieData);
  const background = `https://image.tmdb.org/t/p/original/${movieData?.poster_path}`;
  console.log(background);
  return (
    <>
      <MainBackground background={background}>
        <div className="flex flex-wrap justify-between items-center gap-4 pt-48 relative z-20  w-full container md:w-custom-md xl:w-custom-xl mx-auto  ">
          <div className="flex flex-col items-center justify-center gap-2">
            {/* title image  */}

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
        </div>
      </MainBackground>
    </>
  );
};

// export default MovieDetails;

// import React from "react";

// import { useGetMovieDetailsQuery } from "../../redux/apiData/getDataSlice";
// import { Link, useParams } from "react-router-dom";

// const MovieDetails = () => {
//   const { movieID } = useParams();
//   console.log(movieID);
//   const {
//     data: movieData,
//     error,
//     isLoading,
//   } = useGetMovieDetailsQuery(movieID);
//   console.log(movieData);
//   //   const video = await videoLink(params?.ID, "movie");
//   //   const Translate = await translate(params?.ID, "movie");
//   //   const arabic = Translate?.translations?.find(
//   //     (item) => item.iso_3166_1 === "SA"
//   //   );

//   //   const { cast } = await crew(params?.ID);
//   //   const recommendations = await similar(params?.ID, "movie");
//   //   const title = "Recommendations";

//   //   const photos = await image(params?.ID, "movie");

//   const background = `https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`;
//   //   let poster = photos.logos
//   //     .filter((item) => item.iso_639_1 !== "he")
//   //     .sort((a, b) => {
//   //       if (a.iso_639_1?.startsWith("en") && !b.iso_639_1?.startsWith("en")) {
//   //         return -1;
//   //       }
//   //       if (b.iso_639_1?.startsWith("en") && !a.iso_639_1?.startsWith("en")) {
//   //         return 1;
//   //       }
//   //       return 0;
//   //     });

//   //   const location = await locationNow();
//   //   const provider = await watchProvider(params?.ID, "movie");

//   //   let value;

//   //   if (provider.results.hasOwnProperty(location?.country_code2)) {
//   //     value = provider.results[location?.country_code2];
//   //   }

//   return (
//     <>
//       <section className="relative z-[70] lg:min-h-screen overflow-hidden">
//         <img
//           src={background}
//           alt=""
//           width={1920}
//           height={1080}
//           className="w-full h-full object-cover fixed hidden lg:block"
//         />
//         <img
//           //   src={`https://image.tmdb.org/t/p/original/${photos?.posters[0]?.file_path}`}
//           alt=""
//           width={1920}
//           height={1080}
//           className="w-full h-full object-cover fixed lg:hidden"
//         />

//         <div className="lg:mx-24 mx-4 relative z-[999999] pt-[15rem] md:pt-96 lg:pt-16 lg:min-h-screen flex items-center">
//           <div className="w-full h-auto flex flex-col justify-center">
//             <div className="flex justify-center relative items-start flex-col">
//               {/* <div className="items-center lg:items-start w-full flex flex-col my-3">
//                 {poster[0]?.file_path ? (
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500/${poster[0].file_path}`}
//                     alt="movies"
//                     width={350}
//                     height={350}
//                     className="h-auto lg:w-[20%] w-[35%] lg:h-auto"
//                   />
//                 ) : (
//                   <p className="text-3xl lg:text-5xl pt-2 pb-4 mBlur borderGlass rounded-3xl inline-block px-3 text-white font-extrabold lg:mt-10">
//                     {movieData?.original_name}
//                   </p>
//                 )}
//               </div> */}
//               {movieData?.tagline && (
//                 <div className="w-full lg:w-auto mb-3 text-center lg:text-start">
//                   <p className="text-[12px] lg:text-sm mBlur borderGlass rounded-3xl inline-block px-3 text-white font-medium">
//                     {movieData?.tagline}
//                   </p>
//                 </div>
//               )}
//               <div className="flex mb-2 w-full justify-center lg:justify-start flex-wrap gap-y-2">
//                 <p className="text-[12px] lg:text-sm lg:text-start text-center font-semibold text-white mBlur borderGlass rounded-3xl px-3 py-1 mr-2">
//                   {movieData?.release_date?.slice(0, 4) ||
//                     movieData?.first_air_date?.slice(0, 4)}
//                 </p>
//                 {movieData?.genres.map((item) => (
//                   <Link
//                     key={item?.id}
//                     href={`/explore/${item?.id}-${item?.name?.replace(
//                       / /g,
//                       "-"
//                     )}-movie`}
//                   >
//                     <p className="font-medium mr-2 text-white mBlur borderGlass p-1 px-3 rounded-3xl text-[10px] lg:text-[12px] transition-all">
//                       {item?.name}
//                     </p>
//                   </Link>
//                 ))}
//               </div>
//               <div className="flex items-center lg:items-start flex-col w-full">
//                 <div className="lg:w-[50%] w-full mBlur borderGlass rounded-3xl p-3">
//                   <p className="text-[12px] lg:text-start text-center xl:text-base font-medium text-white">
//                     {movieData?.overview}
//                   </p>
//                 </div>
//                 {/* {arabic?.movieData?.overview && (
//                   <div className="lg:w-[50%] w-full mBlur mt-2 borderGlass rounded-3xl p-3">
//                     <p
//                       dir="rtl"
//                       className="text-[12px] ar lg:text-start text-center xl:text-base font-bold text-white"
//                     >
//                       {arabic?.movieData?.overview}
//                     </p>
//                   </div>
//                 )} */}
//                 <div className="flex w-full justify-center lg:justify-start rounded-3xl mt-2 flex-wrap gap-y-2">
//                   <div className="flex items-center mBlur borderGlass rounded-3xl px-3 py-1">
//                     <p className="text-white font-medium text-[12px] lg:text-sm">
//                       Status :
//                     </p>
//                     <p className="text-white ml-2 text-[12px] lg:text-sm">
//                       {movieData?.status}
//                     </p>
//                   </div>
//                   <div className="mBlur borderGlass rounded-3xl mx-2 flex items-center px-3 py-1 justify-center">
//                     <p className="text-[12px] lg:text-sm text-center lg:text-start font-medium text-white">
//                       Country : {movieData?.origin_country}
//                     </p>
//                   </div>
//                   <div className="mBlur borderGlass rounded-3xl mx-2 flex items-center px-3 py-1 justify-center">
//                     <p className="text-[12px] lg:text-sm text-center lg:text-start font-medium text-white">
//                       Original language : {movieData?.original_language}
//                     </p>
//                   </div>
//                 </div>
//                 {/* <div className="flex gap-x-2 flex-row flex-wrap items-center justify-center">
//                   {value?.flatrate ? (
//                     <div className="mBlur borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center">
//                       <p className="text-[12px] lg:text-sm text-center lg:text-start font-medium text-white mr-1">
//                         Stream
//                       </p>
//                       {value?.flatrate?.map((item) => (
//                         <img
//                           key={item?.logo_path}
//                           src={`https://image.tmdb.org/t/p/original${item?.logo_path}`}
//                           width={50}
//                           height={50}
//                           alt=""
//                           className="size-5 lg:size-7 rounded-full mx-1"
//                         />
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="mBlur borderGlass rounded-3xl px-3 py-1 mt-2 flex items-center">
//                       <p className="text-[10px] lg:text-sm text-center lg:text-start font-medium text-white mr-1">
//                         There are no streaming services currently available for
//                         this in your country
//                       </p>
//                     </div>
//                   )}
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <CastCarousel movieData={cast} />
//         {recommendations?.results?.length > 0 ? (
//           <Sections movieData={recommendations?.results} title={title} />
//         ) : (
//           "No Recommendations"
//         )} */}
//       </section>
//     </>
//   );
// };

export default MovieDetails;
