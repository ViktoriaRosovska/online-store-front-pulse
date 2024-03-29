import { CATEGORIES_URL } from '../constants/api-constant';
import { apiSlice } from './apiSlice';

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: CATEGORIES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
