import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "../../http/config";

export const filterQuerySlice = createSlice({
  name: "filterQuery",
  initialState: {
    filterQuery: {
      page: DEFAULT_QUERY_PAGE,
      limit: DEFAULT_QUERY_LIMIT,
      sort: "createdAt",
      order: "desc",
      brand: "",
      color: "",
      size: "",
      season: "",
      sex: "",
    },
  },
  reducers: {
    getFilterQuery(state, action) {
      return { ...state, filterQuery: action.payload };
    },
  },
});
export const { getFilterQuery } = filterQuerySlice.actions;
export const filterQueryReducer = filterQuerySlice.reducer;