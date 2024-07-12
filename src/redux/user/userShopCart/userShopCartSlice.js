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

const initialState = {
  userShopCart: {
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
};

const userShopCartSlice = createSlice({
  name: "userShopCart",
  initialState: {
    userShopCart: {
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

    addDeliveryType(state, { payload }) {
      state.userShopCart.deliveryType = payload;
    },

    addShopCartAddressDepartment(state, { payload }) {
      state.userShopCart.addressDepartment = payload;
    },
    addShopCartAddressPoshtomat(state, { payload }) {
      state.userShopCart.addressPoshtomat = payload;
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
      for (const [key, value] of Object.entries(payload)) {
        state.userShopCart.address[key] = value;
      }
    },
    clearShopCart(state) {
      state.userShopCart = { ...initialState };
    },
  },
});

export const {
  addShopCartItem,
  deleteUserShopCartItem,
  incrementQuantity,
  decrementQuantity,
  addShopCartPromoCode,
  // addShopCartCity,
  addDeliveryType,
  addShopCartPriceSum,

  addShopCartAddressDepartment,
  addShopCartAddressPoshtomat,
  // addShopCartStreet,
  addShopCartFirstName,
  addShopCartLastName,
  addShopCartPhone,
  addShopCartIsMailing,
  addShopCartCondition,
  // addShopCartNumberHouse,
  // addShopCartNumberHoll,
  // addShopCartFlat,
  // addShopCartComments,
  addShopCartEmail,
  addShopCartTotalPriceSum,
  addShopCartPaymentMethod,
  addShopCartDiscount,
  addShopCartAddress,
  clearShopCart,
} = userShopCartSlice.actions;
export const userShopCartReducer = userShopCartSlice.reducer;
