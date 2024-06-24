import { createSelector } from "reselect";

export const selectUserShopCartState = state => state.userShopCart.userShopCart;

export const selectUserShopCart = createSelector(
  [selectUserShopCartState],
  userShopCart => ({
    products: userShopCart.products,
    promocode: userShopCart.promocode,
    priceSum: userShopCart.priceSum,
    countQuantity: userShopCart.countQuantity,
    city: userShopCart.city,
    address: userShopCart.address,
    lastName: userShopCart.lastName,
    firstName: userShopCart.firstName,
    phone: userShopCart.phone,
    email: userShopCart.email,
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
    userId: userShopCart.userId,
    deliveryAddress: userShopCart.deliveryAddress,
    orderDate: userShopCart.orderDate,
    paymentMethod: userShopCart.paymentMethod,
    totalPriceSum: userShopCart.totalPriceSum,
    discount: userShopCart.discount,
  })
);
