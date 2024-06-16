import { createSelector } from "reselect"

const selectUserShopCartState = state => state.userShopCart

export const selectUserShopCart = createSelector(
    [selectUserShopCartState],
    userShopCart => ({
        products: userShopCart.products,
        priceSum: userShopCart.priceSum,
        countQuantity: userShopCart.countQuantity,
        city: userShopCart.city,
        address: userShopCart.address,
        surname: userShopCart.surname,
        name: userShopCart.name,
        phone: userShopCart.phone,
        deliveryType: userShopCart.deliveryType,
    })
)
