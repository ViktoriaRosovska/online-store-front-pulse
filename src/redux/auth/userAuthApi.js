import { createApi } from "@reduxjs/toolkit/query/react";
import { api, axiosBaseQuery } from "../../http/api";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: axiosBaseQuery(api, {
    prepareHeaders: ({ getState }) => {
      const state = getState();
      if (state.userAuthReducer.token) {
        return {
          Authorization: `Bearer ${state.userAuthReducer.token}`,
        };
      }
      return {};
    },
  }),

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
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   const {data} = await queryFulfilled
      // }
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
      redirect: "follow",
    }),

    loginUserFB: builder.query({
      query: () => ({
        url: "/auth/facebook",
        method: "GET",
      }),
    }),
    getUserOrders: builder.query({
      query: () => ({
        url: `/products/orders`,
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
  useLazyLoginUserGoogleQuery,
  useFetchCurrentUserQuery,
  useGetUserOrdersQuery,
} = userAuthApi;
