import { createApi } from "@reduxjs/toolkit/query/react";
import {
  NOVA_POSHTA_BASE_URL,
  apiPost,
  axiosBaseQuery,
  warehouseDepartmentsRequest,
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
    getDepartments: builder.mutation({
      query: ref => ({
        // url: NOVA_POSHTA_BASE_URL,
        url: "https://api.novaposhta.ua/v2.0/json/",
        method: "POST",
        data: warehouseDepartmentsRequest(ref),
      }),
    }),
  }),
});

export const { useGetCitiesMutation, useGetDepartmentsMutation } =
  novaPoshtaAPI;
