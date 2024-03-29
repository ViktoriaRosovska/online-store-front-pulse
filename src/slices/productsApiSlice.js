import { PRODUCTS_URL } from '../constants/api-constant';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getFilteredProducts: builder.query({
      query: (queryParams) => {
        const queryString = new URLSearchParams(queryParams).toString();
        return { url: `${PRODUCTS_URL}${queryString ? `?${queryString}` : ''}` };
      },
      keepUnusedDataFor: 5,
    }),
    getTopSelleres: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getSearchProducts: builder.query({
      query: (search) => ({
        url: `${PRODUCTS_URL}?q=${search}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetFilteredProductsQuery,
  useGetTopSelleresQuery,
  useGetSearchProductsQuery,
  useGetProductDetailsQuery,
} = productsApiSlice;
