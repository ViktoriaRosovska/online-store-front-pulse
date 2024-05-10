import { createSlice } from "@reduxjs/toolkit";

const userShopCartSlice = createSlice({
  name: "userShopCart",
  initialState: {
    userShopCart: [],
    isLoading: true,
    isLoggedIn: false,

    error: null,
  },
  reducers: {
    addShopCartItem(state, { payload }) {
      const item = state.userShopCart.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item) item.quantity += payload.quantity;
      else state.userShopCart = [payload, ...state.userShopCart];
    },
    deleteUserShopCartItem(state, { payload }) {
      state.userShopCart = state.userShopCart.filter(
        el => el._id !== payload._id || el.size !== payload.size
      );
      console.log("deleteUserShopCartItem", payload, state.userShopCart);
    },
    incrementQuantity(state, { payload }) {
      const item = state.userShopCart.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item) ++item.quantity;
    },
    decrementQuantity(state, { payload }) {
      const item = state.userShopCart.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item && item.quantity > 1) --item.quantity;
    },
  },
});

export const {
  addShopCartItem,
  deleteUserShopCartItem,
  incrementQuantity,
  decrementQuantity,
} = userShopCartSlice.actions;
export const userShopCartReducer = userShopCartSlice.reducer;
