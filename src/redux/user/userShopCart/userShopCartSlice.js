import { createSlice } from "@reduxjs/toolkit";
import { DELIVERY } from "../../../utils/DELIVERY";

function updatePriceQuantity(cart) {
  cart.priceSum = cart.products
    .map(i => i.price * i.quantity)
    .reduce((p, q) => p + q, 0);
  cart.countQuantity = cart.products
    .map(i => i.quantity)
    .reduce((p, q) => p + q, 0);
}

const userShopCartSlice = createSlice({
  name: "userShopCart",
  initialState: {
    userShopCart: {
      products: [],
      promocode: "",
      city: {},
      addressDepartment: {},
      addressPoshtomat: {},
      address: "",
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
      deliveryAddress: "",
      discount: 0,
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
      updatePriceQuantity(state.userShopCart);
    },
    deleteUserShopCartItem(state, { payload }) {
      state.userShopCart.products = state.userShopCart.products.filter(
        el => el._id !== payload._id || el.size !== payload.size
      );
      updatePriceQuantity(state.userShopCart);
    },
    incrementQuantity(state, { payload }) {
      const item = state.userShopCart.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item) ++item.quantity;
      updatePriceQuantity(state.userShopCart);
    },
    decrementQuantity(state, { payload }) {
      const item = state.userShopCart.products.find(
        el => el._id === payload._id && el.size === payload.size
      );
      if (item && item.quantity > 1) {
        --item.quantity;
        updatePriceQuantity(state.userShopCart);
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
    addShopCartLastName(state, { payload }) {
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
    addShopCartDiscount(state, { payload }) {
      state.userShopCart.discount = payload;
    },
    addShopCartAddress(state, { payload }) {
      // if (state.userShopCart.deliveryType === DELIVERY.department) {
      state.userShopCart.address = payload;
      // }
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
  addShopCartDiscount,
  addShopCartAddress,
} = userShopCartSlice.actions;
export const userShopCartReducer = userShopCartSlice.reducer;
