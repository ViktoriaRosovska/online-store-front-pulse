import { createApi } from "@reduxjs/toolkit/query/react";
import {
  apiPost,
  axiosBaseQuery,
  warehouseSettlementsRequest,
} from "../../http/api";

export const novaPoshtaAPI = createApi({
  reducerPath: "novaPoshta",

  baseQuery: axiosBaseQuery(apiPost),

  endpoints: builder => ({
    getCities: builder.mutation({
      query: search => ({
        url: "https://api.novaposhta.ua/v2.0/json/",
        method: "POST",
        data: warehouseSettlementsRequest(search),
      }),
    }),
  }),
});

export const { useGetCitiesMutation } = novaPoshtaAPI;
