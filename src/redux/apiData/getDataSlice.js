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
      query: (id) => ({
        url: `movie/${id}?language=en-US`,
        method: "GET",
      }),
      providesTags: ["MovieDetails"],
    }),
    getMovieVideo: builder.query({
      query: (id) => ({
        url: `movie/${id}/videos?language=en-US`,
        method: "GET",
      }),
      providesTags: ["MovieDetails"],
    }),
    getMovieImages: builder.query({
      query: (id) => ({
        url: `movie/${id}/images`,
        method: "GET",
      }),
      providesTags: ["MovieDetails"],
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
  useGetMovieImagesQuery
} = getDataApiSlice;
