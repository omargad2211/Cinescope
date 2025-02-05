import React, { useEffect } from "react";
import {
  useGetConfigurationQuery,
  useGetTrendingQuery,
} from "../../redux/apiData/getDataSlice";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "../../redux/MovieSlice/MovieSlice";
import BannerHome from "./components/BannerHome";
import MainBackground from "./components/MainBackground";
import MainHeader from "./components/MainHeader";
import MoviesSwiper from "./components/MoviesSwiper";

const Home = () => {
  const dispatch = useDispatch();
  const { data: trendingData, isLoading, isError } = useGetTrendingQuery();
  const { data: configurationData } = useGetConfigurationQuery();
  console.log(trendingData?.results);
  console.log(configurationData?.images?.secure_base_url);

  dispatch(setBannerData(trendingData?.results));
  dispatch(
    setImageURL(configurationData?.images?.secure_base_url + "original")
  );
  let randomNumber = Math.floor(Math.random() * 20);
  let background = `https://image.tmdb.org/t/p/original/${trendingData?.results[randomNumber].backdrop_path}`;
  console.log(background);
  return (
    <>
      <MainBackground background={background}>
        <MainHeader />
        <MoviesSwiper />
      </MainBackground>
    </>
  );
};

export default Home;
