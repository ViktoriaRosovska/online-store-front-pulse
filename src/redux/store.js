import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products/productsApi";
import { userAuthApi } from "./auth/userAuthApi";
import { promoCodeReducer } from "./promoCode/promoCodeSlice";
import { authReducer } from "./auth/auth";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userShopCartReducer } from "./user/userShopCart/userShopCartSlice";
import { userApi } from "./user/userSlice/userApi";
import { novaPoshtaAPI } from "./novaPoshta/novaPoshtaAPI";

import paymentCardReducer from "./paymentCard/paymentCardSlice";
import {
  logoutMiddleware,
  resetShopCartMiddleware,
} from "./middlewares/logoutMiddleware";

const persistConfig = {
  key: "userToken",
  storage,
  whitelist: ["token"],
};

const promoCodeConfig = {
  key: "promo",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userShopCart"],
};

const cardPersistConfig = {
  key: "card",
  storage,
};

const persistedPromoCode = persistReducer(promoCodeConfig, promoCodeReducer);

const persistedUserShopCart = persistReducer(
  userPersistConfig,
  userShopCartReducer
);

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [novaPoshtaAPI.reducerPath]: novaPoshtaAPI.reducer,
    promoCode: persistedPromoCode,
    userShopCart: persistedUserShopCart,
    userAuthReducer: persistReducer(persistConfig, authReducer),
    paymentCard: persistReducer(cardPersistConfig, paymentCardReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      productsApi.middleware,
      userAuthApi.middleware,
      userApi.middleware,
      novaPoshtaAPI.middleware,
      logoutMiddleware,
      resetShopCartMiddleware
    );
  },
});

export const persistor = persistStore(store);
