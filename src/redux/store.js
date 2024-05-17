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

const persistConfig = {
  key: "persistedUserData",
  storage,
};
const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userShopCart"],
};

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
    filterQuery: filterQueryReducer,
    userShopCart: persistedUserShopCart,
    userAuthReducer: persistReducer(persistConfig, authReducer),
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
      novaPoshtaAPI.middleware
    );
  },
});

export const persistor = persistStore(store);
