import { createSlice } from "@reduxjs/toolkit";

export const PromoValid = "valid";
export const PromoInvalid = "invalid";
export const PromoExpired = "expired";

export const promoCodeSlice = createSlice({
  name: "promoCode",
  initialState: {
    promoCode: "",
    status: "unknown",
    discount: 0,
  },
  reducers: {
    setPromoCode(state, action) {
      return { ...state, promoCode: action.payload };
    },
    setPromoStatus(state, action) {
      return { ...state, status: action.payload };
    },
    setPromoCodeDiscount(state, action) {
      return { ...state, discount: Number(action.payload) };
    },
  },
});
export const { setPromoCode, setPromoStatus, setPromoCodeDiscount } =
  promoCodeSlice.actions;
export const promoCodeReducer = promoCodeSlice.reducer;
