import { get } from "react-hook-form";
import { apiSlice } from "../api/apiSlice";

export const getDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => ({
        url: "trending/all/week",
        method: "GET",
      }),
      providesTags: ["trending"],
    }),
    getConfiguration: builder.query({
      query: () => ({
        url: "configuration",
        method: "GET",
      }),
      providesTags: ["trending"],
    }),
    getTopRated: builder.query({
      query: () => ({
        url: "movie/top_rated?language=en-US&page=1",
        method: "GET",
      }),
      providesTags: ["TopRated"],
    }),
    getMovieDetails: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}?language=en-US`,
        method: "GET",
      }),
      providesTags: ["MovieDetails"],
    }),
    getMovieVideo: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}/videos?language=en-US`,
        method: "GET",
      }),
      providesTags: ["MovieDetails"],
    }),
    getMovieImages: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}/images`,
        method: "GET",
      }),
      providesTags: ["MovieDetails"],
    }),
    getMovieCrew: builder.query({
      query: (id) => ({
        url: `movie/${id}/credits?language=en-US`,
        method: "GET",
      }),
      providesTags: ["MovieCrew"],
    }),
    getRecommended: builder.query({
      query: ({ type, id }) => ({
        url: `${type}/${id}/recommendations?language=en-US`,
        method: "GET",
      }),
      providesTags: ["TopRated"],
    }),
    getDiscover: builder.query({
      query: ({ type, page }) => ({
        url: `discover/${type}?&page=${page}`,
        method: "GET",
      }),
      providesTags: ["Discover"],
    }),
    getSearch: builder.query({
      query: ({ name, page }) => ({
        url: `search/multi?query=${name}&include_adult=false&language=en-US&page=${page}`,
        method: "GET",
      }),
      providesTags: ["SearchData"],
    }),
    getGenre: builder.query({
      query: ({ type, page, genreIds }) => ({
        url: `discover/${type}?page=${page}${
          genreIds ? `&with_genres=${genreIds}` : ""
        }`,
        method: "GET",
      }),
      providesTags: ["Genres"],
    }),
  }),
});

// Export hooks to use in your components
export const {
  useGetTrendingQuery,
  useGetConfigurationQuery,
  useGetTopRatedQuery,
  useGetMovieDetailsQuery,
  useGetMovieVideoQuery,
  useGetMovieImagesQuery,
  useGetMovieCrewQuery,
  useGetRecommendedQuery,
  useGetDiscoverQuery,
  useGetSearchQuery,
  useGetGenreQuery,
} = getDataApiSlice;
