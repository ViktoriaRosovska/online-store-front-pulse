import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../http/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery(),

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
    addToFavorites: builder.mutation({
      query: id => ({
        url: "/users/favorites",
        method: "PATCH",
        data: id,
      }),
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
  useAddToFavoritesMutation,
  useUserSubscribeMutation,
} = userApi;
