import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  // baseUrl: "http://192.168.1.26:8000/api/v1",
  baseUrl: "https://api.themoviedb.org/3/",
  // credentials: "true",
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTJjMzA3ZDQ1ZDI2MDY3NDY5OTkyYmRiNWExZmJmZSIsIm5iZiI6MTczODY3MTExOC4xODQsInN1YiI6IjY3YTIwNDBlYmViOGZmZWU4NTI2NWRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-pVKMx1IdvvGr8srbmQEmuB1u6dhWIWsdpvkinKRIAY";

    // console.log(endpoint)
    // Add Authorization header for all requests except login , logout and Change Password
    if (
      token &&
      endpoint !== "/auth/login/student" &&
      endpoint !== "getSchools" &&
      endpoint !== "getGrades" &&
      endpoint !== "getAllSchoolInformation" &&
      endpoint !== "getSubjectTeachers"
    ) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({}),
});
