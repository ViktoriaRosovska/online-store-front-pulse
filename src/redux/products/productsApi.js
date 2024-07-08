import { createApi } from "@reduxjs/toolkit/query/react";
import { api, axiosBaseQuery } from "../../http/api";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "../../http/config";

const commonProductQuery = ({
  page,
  limit,
  sort,
  order,
  brand,
  color,
  size,
  season,
  sex,
}) => ({
  page: page || DEFAULT_QUERY_PAGE,
  limit: limit || DEFAULT_QUERY_LIMIT,
  sort: sort || "createdAt",
  order: order || "desc",
  brand: brand || "",
  color: color || "",
  size: size || "",
  season: season || "",
  sex: sex || "",
});

export const productsApi = createApi({
  reducerPath: "products",
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
  tagTypes: ["Products"],

  endpoints: builder => ({
    getAllProducts: builder.query({
      query: params => ({
        url: "/products",
        method: "GET",
        params: { ...commonProductQuery(params) },
      }),
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: id => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),

    getCategories: builder.query({
      query: () => ({
        url: `/products/categories`,
        method: "GET",
      }),
    }),

    getNewest: builder.query({
      query: params => ({
        url: "/products/newest",
        method: "GET",
        params: { ...commonProductQuery(params) },
      }),
    }),

    getSales: builder.query({
      query: params => ({
        url: "/products/sales",
        method: "GET",
        params: { ...commonProductQuery(params) },
      }),
    }),

    findProducts: builder.query({
      query: ({ name, page, limit }) => ({
        url: "/products/search",
        type: "application/json",
        method: "GET",
        params: {
          name,
          page: page || DEFAULT_QUERY_PAGE,
          limit: limit || DEFAULT_QUERY_LIMIT,
        },
      }),
    }),

    createProduct: builder.mutation({
      query: data => ({
        url: "/products/create",
        method: "POST",
        data,
      }),
    }),

    checkPromoCode: builder.query({
      query: code => ({
        url: `/products/orders/${code}`,
        method: "GET",
      }),
    }),

    postOrders: builder.mutation({
      query: data => ({
        url: "/products/orders",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetNewestQuery,
  useLazyGetNewestQuery,
  useGetSalesQuery,
  useLazyGetSalesQuery,
  useFindProductsQuery,
  useLazyFindProductsQuery,
  useCreateProductMutation,
  useCheckPromoCodeQuery,
  useLazyCheckPromoCodeQuery,
  usePostOrdersMutation,
} = productsApi;
