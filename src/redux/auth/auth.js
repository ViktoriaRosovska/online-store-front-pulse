import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "usersAuth",
  initialState: {
    token: "",
    user: null,
    favoriteProducts: [],
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.favoriteProducts = payload.favoriteProducts;
    },
    removeCredentials: state => {
      state.token = "";
      state.user = null;
      state.favoriteProducts = [];
    },
  },
});

export const { setCredentials, removeCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
