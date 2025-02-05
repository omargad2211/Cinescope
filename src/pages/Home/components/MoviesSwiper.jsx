/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import "swiper/css";
import "./swiper.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { useEffect, useState } from "react";

import { IoIosStar } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MoviesSwiper() {
  const [swiperInitialized, setSwiperInitialized] = useState(false);
  const bannerData = useSelector((state) => state.movies.bannerData);

  useEffect(() => {
    if (bannerData) {
      setSwiperInitialized(true);
    }
  }, [bannerData]);
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-[50vh] lg:h-[90vh]">
      {/* <Image
        src={bg}
        alt="texture"
        className="absolute opacity-15 top-0 md:top-[-25%] z-[1]"
      />
      <Image
        src={bg}
        alt="texture2"
        className="absolute sm:hidden block opacity-15 top-[30%] z-[1] -rotate-180"
      /> */}
      <div>
        {swiperInitialized ? (
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={10}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              scale: 1,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="padding"
          >
            {bannerData?.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <Link
                    to={
                      item.media_type === "tv"
                        ? `/shows/${item.id}`
                        : `/movie/${item.id}`
                    }
                  >
                    <div className="cursor-pointer">
                      <div className="relative">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                          alt={`${item.title}`}
                          width={350}
                          height={350}
                          className={
                            isActive
                              ? "md:min-h-[350px] rounded-2xl w-full"
                              : "md:min-h-[350px] rounded-2xl w-full backdrop-blur-2xl"
                          }
                        />
                      </div>
                      {isActive && (
                        <>
                          {/* Additional content can be re-enabled here if needed */}
                        </>
                      )}
                    </div>
                  </Link>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </div>
  );
}

export default MoviesSwiper;
