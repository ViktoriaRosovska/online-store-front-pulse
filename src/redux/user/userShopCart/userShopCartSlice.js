import { createSlice } from "@reduxjs/toolkit";
import { DELIVERY } from "../../../utils/DELIVERY";

const userShopCartSlice = createSlice({
  name: "userShopCart",
  initialState: {
    userShopCart: {
      products: [],
      promocode: "",
      city: {},
      addressDepartment: {},
      addressPoshtomat: {},
      address: {},
      street: {},
      numberHouse: "",
      flat: "",
      numberHoll: "",
      comments: "",
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
      userId: "",
      deliveryAddress: "",
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
      if (item && item.quantity > 1) {
        --item.quantity;
        state.userShopCart.priceSum -= payload.price;
        state.userShopCart.countQuantity -= 1;
      }
    },
    addShopCartPromoCode(state, { payload }) {
      state.userShopCart.promocode = payload;
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
    addShopCartAddressDepartment(state, { payload }) {
      state.userShopCart.addressDepartment = payload;
    },
    addShopCartAddressPoshtomat(state, { payload }) {
      state.userShopCart.addressPoshtomat = payload;
    },
    addShopCartStreet(state, { payload }) {
      state.userShopCart.street = payload;
    },
    addShopCartNumberHouse(state, { payload }) {
      state.userShopCart.numberHouse = payload;
    },
    addShopCartNumberHoll(state, { payload }) {
      state.userShopCart.numberHoll = payload;
    },
    addShopCartFlat(state, { payload }) {
      state.userShopCart.flat = payload;
    },
    addShopCartComments(state, { payload }) {
      state.userShopCart.comments = payload;
    },
    addShopCartFirstName(state, { payload }) {
      state.userShopCart.firstName = payload;
    },
    addShopCartFastName(state, { payload }) {
      state.userShopCart.lastName = payload;
    },
    addShopCartPhone(state, { payload }) {
      state.userShopCart.phone = payload;
    },
    addShopCartEmail(state, { payload }) {
      state.userShopCart.email = payload;
    },
    addShopCartIsMailing(state, { payload }) {
      return { ...state, isMailing: payload };
    },
    addShopCartCondition(state, { payload }) {
      return { ...state, condition: payload };
    },
    addShopCartTotalPriceSum(state, { payload }) {
      state.userShopCart.totalPriceSum = payload;
    },
    addShopCartPaymentMethod(state, { payload }) {
      state.userShopCart.paymentMethod = payload;
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
  addShopCartAddressDepartment,
  addShopCartAddressPoshtomat,
  addShopCartStreet,
  addShopCartFirstName,
  addShopCartLastName,
  addShopCartPhone,
  addShopCartIsMailing,
  addShopCartCondition,
  addShopCartNumberHouse,
  addShopCartNumberHoll,
  addShopCartFlat,
  addShopCartComments,
  addShopCartEmail,
  addShopCartTotalPriceSum,
  addShopCartPaymentMethod,
} = userShopCartSlice.actions;
export const userShopCartReducer = userShopCartSlice.reducer;
