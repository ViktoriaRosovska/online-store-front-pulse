import { createApi } from "@reduxjs/toolkit/query/react";
import { api, axiosBaseQuery } from "../../../http/api";

export const userApi = createApi({
  reducerPath: "userApi",

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

  tagTypes: ["Favorites"]["Payments"],

  endpoints: builder => ({
    userUpdate: builder.mutation({
      query: user => ({
        url: "/users",
        method: "PATCH",
        data: user,
      }),
    }),
    userDelete: builder.mutation({
      query: () => ({
        url: "/users",
        method: "DELETE",
      }),
    }),
    getFavorites: builder.query({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: "/users/favorites",
          method: "GET",
        });
        if (result.error && result.error.status === 404) {
          return { data: [] };
        }
        return result;
      },
      providesTags: ["Favorites"],
    }),
    addToFavorites: builder.mutation({
      query: id => ({
        url: "/users/favorites",
        method: "PATCH",
        data: id,
      }),
      invalidatesTags: ["Favorites"],
    }),
    deleteFromFavorites: builder.mutation({
      query: id => ({
        url: "/users/favorites",
        method: "DELETE",
        data: id,
      }),
      invalidatesTags: ["Favorites"],
    }),
    userSubscribe: builder.mutation({
      query: payload => ({
        url: "/users/subscribe",
        method: "POST",
        data: payload,
      }),
    }),
    getUserCards: builder.query({
      query: () => ({
        url: "/users/payments",
        method: "GET",
      }),
      providesTags: ["Payments"],
    }),
    addUserCard: builder.mutation({
      query: payload => ({
        url: "/users/payments",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["Payments"],
    }),
    deleteUserCard: builder.mutation({
      query: id => ({
        url: `/users/payments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payments"],
    }),
    sendSupportMessage: builder.mutation({
      query: payload => ({
        url: "/users/supports",
        method: "POST",
        data: payload,
      }),
    }),
    userForgotPassword: builder.mutation({
      query: email => ({
        url: "/users/forgot-password",
        method: "POST",
        data: email,
      }),
    }),
    userResetPassword: builder.mutation({
      query: ({ resetToken, password }) => ({
        url: `users/reset-password?resetToken=${resetToken}`,
        method: "PATCH",
        data: { password },
      }),
    }),
  }),
});

export const {
  useUserUpdateMutation,
  useUserDeleteMutation,
  useGetFavoritesQuery,
  useLazyGetFavoritesQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useUserSubscribeMutation,
  useAddUserCardMutation,
  useGetUserCardsQuery,
  useDeleteUserCardMutation,
  useSendSupportMessageMutation,
  useUserForgotPasswordMutation,
  useUserResetPasswordMutation,
} = userApi;

/*
useGetFavoritesQuery
1 
2
3
4
5
6







*/
