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
      })
    })
  }),
});

export const {useUserUpdateMutation, useUserDeleteMutation} = userApi
