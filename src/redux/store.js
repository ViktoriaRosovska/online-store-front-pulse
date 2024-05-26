import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products/productsApi";
import { userAuthApi } from "./auth/userAuthApi";
import { filterQueryReducer } from "./filterQuery/filterQuerySlice";
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
import paymentCardReducer, { deselectCard } from './paymentCard/paymentCardSlice'

const persistConfig = {
  key: "userToken",
  storage,
  whitelist: ["token"],
};
const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userShopCart"],
};

const cardPersistConfig = {
  key: 'card',
  storage,
}

const persistedUserShopCart = persistReducer(
  userPersistConfig,
  userShopCartReducer
);

const logoutMiddleware = store => next => action => {
  if (action.type === 'usersAuth/removeCredentials') {
    const result = next(action)
    store.dispatch(deselectCard())
    return result
  }
  return next(action)
}

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [novaPoshtaAPI.reducerPath]: novaPoshtaAPI.reducer,
    filterQuery: filterQueryReducer,
    userShopCart: persistedUserShopCart,
    userAuthReducer: persistReducer(persistConfig, authReducer),
    paymentCard: persistReducer(cardPersistConfig,paymentCardReducer),
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
      logoutMiddleware
    );
  },
});

export const persistor = persistStore(store);
