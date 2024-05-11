import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../http/api";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: axiosBaseQuery({
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

  tagTypes: ["Favorites"],

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
      query: () => ({
        url: "/users/favorites",
        method: "GET",
      }),
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
  }),
});

export const {
  useUserUpdateMutation,
  useUserDeleteMutation,
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useUserSubscribeMutation,
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
