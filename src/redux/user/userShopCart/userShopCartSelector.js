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
    lastName: userShopCart.surname,
    firstName: userShopCart.name,
    phone: userShopCart.phone,
    deliveryType: userShopCart.deliveryType,
    addressDepartment: userShopCart.addressDepartment,
    addressPoshtomat: userShopCart.addressPoshtomat,
    numberHouse: userShopCart.numberHouse,
    numberHoll: userShopCart.numberHoll,
    flat: userShopCart.flat,
    isMailing: userShopCart.isMailing,
    condition: userShopCart.condition,
    street: userShopCart.street,
    comments: userShopCart.comments,
  })
);
