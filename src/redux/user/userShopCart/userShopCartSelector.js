import { createSelector } from "reselect";

export const selectUserShopCartState = state => state.userShopCart.userShopCart;

export const selectUserShopCart = createSelector(
  [selectUserShopCartState],
  userShopCart => ({
    products: userShopCart.products,
    promocode: userShopCart.promocode,
    priceSum: userShopCart.priceSum,
    countQuantity: userShopCart.countQuantity,
    address: userShopCart.address,
    lastName: userShopCart.lastName,
    firstName: userShopCart.firstName,
    phone: userShopCart.phone,
    email: userShopCart.email,
    deliveryType: userShopCart.deliveryType,
    addressDepartment: userShopCart.addressDepartment,
    addressPoshtomat: userShopCart.addressPoshtomat,
    isMailing: userShopCart.isMailing,
    condition: userShopCart.condition,
    userId: userShopCart.userId,
    deliveryAddress: userShopCart.deliveryAddress,
    orderDate: userShopCart.orderDate,
    paymentMethod: userShopCart.paymentMethod,
    totalPriceSum: userShopCart.totalPriceSum,
    discount: userShopCart.discount,
  })
);

export const selectCopyUserShopCart = state =>
  state.userCopyShopCart.userCopyShopCart;

export const selectCopyShopCart = createSelector(
  [selectCopyUserShopCart],
  userCopyShopCart => ({
    products: userCopyShopCart.products,
    promocode: userCopyShopCart.promocode,
    priceSum: userCopyShopCart.priceSum,
    countQuantity: userCopyShopCart.countQuantity,
    address: userCopyShopCart.address,
    lastName: userCopyShopCart.lastName,
    firstName: userCopyShopCart.firstName,
    phone: userCopyShopCart.phone,
    email: userCopyShopCart.email,
    deliveryType: userCopyShopCart.deliveryType,
    addressDepartment: userCopyShopCart.addressDepartment,
    addressPoshtomat: userCopyShopCart.addressPoshtomat,
    isMailing: userCopyShopCart.isMailing,
    condition: userCopyShopCart.condition,
    userId: userCopyShopCart.userId,
    deliveryAddress: userCopyShopCart.deliveryAddress,
    orderDate: userCopyShopCart.orderDate,
    paymentMethod: userCopyShopCart.paymentMethod,
    totalPriceSum: userCopyShopCart.totalPriceSum,
    discount: userCopyShopCart.discount,
  })
);
