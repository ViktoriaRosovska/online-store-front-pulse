import { clearShopCart } from "../../redux/user/userShopCart/userShopCartSlice";
import { deselectCard } from "../paymentCard/paymentCardSlice";

export const logoutMiddleware = store => next => action => {
  if (action.type === "usersAuth/removeCredentials") {
    const result = next(action);
    store.dispatch(deselectCard());
    return result;
  }
  return next(action);
};

export const resetShopCartMiddleware = store => next => action => {
  if (action.type === "userShopCart/clearShopCart") {
    const result = next(action);
    store.dispatch(clearShopCart());
    return result;
  }
  return next(action);
};
