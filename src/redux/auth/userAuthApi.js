import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../http/api";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    createUser: builder.mutation({
      query: user => ({
        url: "/auth/signup",
        method: "POST",
        data: user,
      }),
    }),

    loginUser: builder.mutation({
      query: user => ({
        url: "/auth/signin",
        method: "POST",
        data: user,
      }),
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/signout",
        method: "POST",
      }),
    }),

    fetchCurrentUser: builder.query({
      query: () => ({
        url: "/auth/current",
        method: "GET",
      }),
    }),

    loginUserGoogle: builder.query({
      query: () => ({
        url: "/auth/google",
        method: "GET",
      }),
    }),

    loginUserFB: builder.query({
      query: () => ({
        url: "/auth/facebook",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useLoginUserGoogleQuery,
  useLoginUserFBQuery,
  useLazyFetchCurrentUserQuery,
} = userAuthApi;
