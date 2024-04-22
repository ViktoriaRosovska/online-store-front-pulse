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

const persistConfig = {
  key: "persistedUserData",
  storage,
};

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    filterQuery: filterQueryReducer,
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
