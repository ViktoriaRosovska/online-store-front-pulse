import { createSlice } from "@reduxjs/toolkit";
import { DELIVERY } from "../../../utils/DELIVERY";

const userShopCartSlice = createSlice({
  name: "userShopCart",
  initialState: {
    userShopCart: {
      products: [],
      code: "",
      city: "",
      address: "",
      deliveryType: DELIVERY.department,
      priceSum: 0,
    },
    isLoading: true,
    isLoggedIn: false,

    error: null,
  },
  reducers: {
    addShopCartItem(state, { payload }) {
      const item = state.userShopCart.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item) item.quantity += payload.quantity;
      else
        state.userShopCart.products = [payload, ...state.userShopCart.products];
    },
    deleteUserShopCartItem(state, { payload }) {
      state.userShopCart.products = state.userShopCart.products.filter(
        el => el._id !== payload._id || el.size !== payload.size
      );
      console.log("deleteUserShopCartItem", payload, state.userShopCart);
    },
    incrementQuantity(state, { payload }) {
      const item = state.userShopCart.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item) ++item.quantity;
    },
    decrementQuantity(state, { payload }) {
      const item = state.userShopCart.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item && item.quantity > 1) --item.quantity;
    },
    addShopCartPromoCode(state, { payload }) {
      state.userShopCart.code = payload;
    },
    addShopCartCity(state, { payload }) {
      state.userShopCart.city = payload;
    },
    addDeliveryType(state, { payload }) {
      state.userShopCart.deliveryType = payload;
    },
    addShopCartPriceSum(state, { payload }) {
      state.userShopCart.priceSum = +payload;
    },
    addShopCartAddress(state, { payload }) {
      state.userShopCart.address = payload;
    },
    addShopCartStreet(state, { payload }) {
      state.userShopCart.street = payload;
    },
  },
});

export const {
  addShopCartItem,
  deleteUserShopCartItem,
  incrementQuantity,
  decrementQuantity,
  addShopCartPromoCode,
  addShopCartCity,
  addDeliveryType,
  addShopCartPriceSum,
  addShopCartAddress,
  addShopCartStreet,
} = userShopCartSlice.actions;
export const userShopCartReducer = userShopCartSlice.reducer;
