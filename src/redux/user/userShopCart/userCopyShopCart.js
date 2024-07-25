import { createSlice } from "@reduxjs/toolkit";
import { DELIVERY } from "../../../utils/DELIVERY";

const userShopCartSlice = createSlice({
  name: "userCopyShopCart",
  initialState: {
    userCopyShopCart: {
      products: [],
      promocode: "",
      addressDepartment: {},
      addressPoshtomat: {},
      address: {
        Description: "",
        city: {},
        street: {},
        numberHouse: "",
        numberHoll: "",
        flat: "",
        comment: "",
      },

      firstName: "",
      lastName: "",
      phone: "",
      isMailing: false,
      condition: false,
      deliveryType: DELIVERY.department,
      priceSum: 0,
      totalPriceSum: 0,
      countQuantity: 0,
      paymentMethod: "",
      email: "",
      orderDate: "",
      deliveryAddress: "",
      discount: 0,
    },
    isLoading: true,
    isLoggedIn: false,

    error: null,
  },
  reducers: {
    copyShopCart(state, { payload }) {
      state.userCopyShopCart = payload;
    },
  },
});

export const { copyShopCart } = userShopCartSlice.actions;
export const userCopyShopCartReducer = userShopCartSlice.reducer;
