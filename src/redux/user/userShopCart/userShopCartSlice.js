import { createSlice } from "@reduxjs/toolkit";
import { DELIVERY } from "../../../utils/DELIVERY";

const userShopCartSlice = createSlice({
  name: "userShopCart",
  initialState: {
  
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
    
    isLoading: true,
    isLoggedIn: false,

    error: null,
  },
  reducers: {
    addShopCartItem(state, { payload }) {
      const item = state.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item) item.quantity += payload.quantity;
      else
        state.products = [payload, ...state.products];
      state.priceSum += payload.price;
      state.countQuantity += 1;
    },
    deleteUserShopCartItem(state, { payload }) {
      state.products = state.products.filter(
        el => el._id !== payload._id || el.size !== payload.size
      );
      state.priceSum -= payload.price;
      state.countQuantity -= 1;
      // console.log("deleteUserShopCartItem", payload, state.userShopCart);
    },
    incrementQuantity(state, { payload }) {
      const item = state.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item) ++item.quantity;
      state.priceSum += payload.price;
      state.countQuantity += 1;
    },
    decrementQuantity(state, { payload }) {
      const item = state.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item && item.quantity > 1) --item.quantity;
      state.priceSum -= payload.price;
      state.countQuantity -= 1;
    },
    addShopCartPromoCode(state, { payload }) {
      state.code = payload;
    },
    addShopCartCity(state, { payload }) {
      state.city = payload;
    },
    addDeliveryType(state, { payload }) {
      state.deliveryType = payload;
    },

    addShopCartAddress(state, { payload }) {
      state.address = payload;
    },
    addShopCartStreet(state, { payload }) {
      state.street = payload;
    },
    addShopCartName(state, { payload }) {
      state.name = payload;
    },
    addShopCartSurname(state, { payload }) {
      state.surname = payload;
    },
    addShopCartPhone(state, { payload }) {
      state.phone = payload;
    },
    addShopCartIsMailing(state, { payload }) {
      state.isMailing = payload;
    },
    addShopCartCondition(state, { payload }) {
      state.condition = payload;
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
