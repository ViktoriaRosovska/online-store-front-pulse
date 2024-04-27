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
    filterQuery: filterQueryReducer,
    userShopCart: persistedUserShopCart,
    userAuthReducer: persistReducer(persistConfig, authReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware, userAuthApi.middleware);
  },
});

export const persistor = persistStore(store);
