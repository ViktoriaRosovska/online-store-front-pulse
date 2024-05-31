import { PromoExpired, PromoInvalid, PromoValid } from "./promoCodeSlice";

export const selectPromoCode = state => state.promoCode.promoCode;
export const selectPromoValid = state => state.promoCode.status === PromoValid;
export const selectPromoInvalid = state =>
  state.promoCode.status === PromoInvalid;
export const selectPromoExpired = state =>
  state.promoCode.status === PromoExpired;
export const selectPromoCodeDiscount = state => state.promoCode.discount;
