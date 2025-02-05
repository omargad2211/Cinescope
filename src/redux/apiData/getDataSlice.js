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
  }),
});

// Export hooks to use in your components
export const { useGetTrendingQuery, useGetConfigurationQuery } =
  getDataApiSlice;
