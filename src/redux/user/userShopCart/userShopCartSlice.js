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
      name: "",
      surname: "",
      phone: "",
      isMailing: false,
      condition: false,
      deliveryType: DELIVERY.department,
      priceSum: 0,
      countQuantity: 0,
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
      state.userShopCart.priceSum += payload.price;
      state.userShopCart.countQuantity += 1;
    },
    deleteUserShopCartItem(state, { payload }) {
      state.userShopCart.products = state.userShopCart.products.filter(
        el => el._id !== payload._id || el.size !== payload.size
      );
      state.userShopCart.priceSum -= payload.price;
      state.userShopCart.countQuantity -= 1;
      console.log("deleteUserShopCartItem", payload, state.userShopCart);
    },
    incrementQuantity(state, { payload }) {
      const item = state.userShopCart.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item) ++item.quantity;
      state.userShopCart.priceSum += payload.price;
      state.userShopCart.countQuantity += 1;
    },
    decrementQuantity(state, { payload }) {
      const item = state.userShopCart.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item && item.quantity > 1) --item.quantity;
      state.userShopCart.priceSum -= payload.price;
      state.userShopCart.countQuantity -= 1;
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

    addShopCartAddress(state, { payload }) {
      state.userShopCart.address = payload;
    },
    addShopCartStreet(state, { payload }) {
      state.userShopCart.street = payload;
    },
    addShopCartName(state, { payload }) {
      state.userShopCart.name = payload;
    },
    addShopCartSurname(state, { payload }) {
      state.userShopCart.surname = payload;
    },
    addShopCartPhone(state, { payload }) {
      state.userShopCart.phone = payload;
    },
    addShopCartIsMailing(state, { payload }) {
      state.userShopCart.isMailing = payload;
    },
    addShopCartCondition(state, { payload }) {
      state.userShopCart.condition = payload;
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
  addShopCartName,
  addShopCartSurname,
  addShopCartPhone,
  addShopCartIsMailing,
  addShopCartCondition,
} = userShopCartSlice.actions;
export const userShopCartReducer = userShopCartSlice.reducer;
