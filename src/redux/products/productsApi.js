import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../http/api";
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

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getAllProducts: builder.query({
      query: params => ({
        url: "/products",
        method: "GET",
        params: { ...commonProductQuery(params) },
      }),
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
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetNewestQuery,
  useGetSalesQuery,
  useFindProductsQuery,
  useCreateProductMutation,
} = productsApi;
