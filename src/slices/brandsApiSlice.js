import { BRANDS_URL } from '../constants/api-constant';
import { apiSlice } from './apiSlice';

export const brandsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => ({
        url: BRANDS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBrandsQuery } = brandsApiSlice;
