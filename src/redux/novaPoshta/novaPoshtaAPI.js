import { createApi } from "@reduxjs/toolkit/query/react";
import {
  apiPost,
  axiosBaseQuery,
  warehouseDepartmentsRequest,
  warehouseSettlementsRequest,
  warehouseStreetsRequest,
} from "../../http/api";

export const novaPoshtaAPI = createApi({
  reducerPath: "novaPoshta",

  baseQuery: axiosBaseQuery(apiPost),

  endpoints: builder => ({
    getCities: builder.query({
      query: search => ({
        url: "https://api.novaposhta.ua/v2.0/json/",
        method: "POST",
        data: warehouseSettlementsRequest(search),
      }),
    }),
    getDepartments: builder.mutation({
      query: ref => ({
        url: "https://api.novaposhta.ua/v2.0/json/",
        method: "POST",
        data: warehouseDepartmentsRequest(ref),
      }),
    }),
    getStreets: builder.query({
      query: (ref, search) => ({
        url: "https://api.novaposhta.ua/v2.0/json/",
        method: "POST",
        data: warehouseStreetsRequest(ref, search),
      }),
    }),
  }),
});

export const {
  useGetCitiesQuery,
  useGetDepartmentsMutation,
  useLazyGetCitiesQuery,
  useGetStreetsQuery,
  useLazyGetStreetsQuery,
} = novaPoshtaAPI;
