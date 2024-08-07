import { createSlice } from "@reduxjs/toolkit";

export const PromoValid = "valid";
export const PromoInvalid = "invalid";
export const PromoExpired = "expired";
export const PromoUnknown = "unknown";

const initialState = {
  promoCode: "",
  status: PromoUnknown,
  discount: 0,
};

export const promoCodeSlice = createSlice({
  name: "promoCode",
  initialState: {
    promoCode: "",
    status: PromoUnknown,
    discount: 0,
  },
  reducers: {
    setPromoCode(state, action) {
      return { ...state, promoCode: action.payload, status: PromoUnknown };
    },
    setPromoStatus(state, action) {
      return { ...state, status: action.payload };
    },
    setPromoCodeDiscount(state, action) {
      return { ...state, discount: Number(action.payload) };
    },
    clearPromoCode() {
      return { ...initialState };
    },
  },
});
export const {
  setPromoCode,
  setPromoStatus,
  setPromoCodeDiscount,
  clearPromoCode,
} = promoCodeSlice.actions;
export const promoCodeReducer = promoCodeSlice.reducer;
