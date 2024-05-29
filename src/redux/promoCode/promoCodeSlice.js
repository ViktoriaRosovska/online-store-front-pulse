import { createSlice } from "@reduxjs/toolkit";

export const PromoValid = "valid";
export const PromoInvalid = "invalid";
export const PromoExpired = "expired";

export const promoCodeSlice = createSlice({
  name: "promoCode",
  initialState: {
    promoCode: "",
    status: "unknown",
  },
  reducers: {
    setPromoCode(state, action) {
      return { ...state, promoCode: action.payload };
    },
    setPromoStatus(state, action) {
      return { ...state, status: action.payload };
    },
  },
});
export const { setPromoCode, setPromoStatus } = promoCodeSlice.actions;
export const promoCodeReducer = promoCodeSlice.reducer;
