import { createSelector } from "reselect";

export const selectUserShopCartState = state => state.userShopCart.userShopCart;

export const selectUserShopCart = createSelector(
  [selectUserShopCartState],
  userShopCart => ({
    products: userShopCart.products,
    code: userShopCart.code,
    priceSum: userShopCart.priceSum,
    countQuantity: userShopCart.countQuantity,
    city: userShopCart.city,
    address: userShopCart.address,
    surname: userShopCart.surname,
    name: userShopCart.name,
    phone: userShopCart.phone,
    deliveryType: userShopCart.deliveryType,
    addressDepartment: userShopCart.addressDepartment,
    addressPoshtomat: userShopCart.addressPoshtomat,
  })
);
