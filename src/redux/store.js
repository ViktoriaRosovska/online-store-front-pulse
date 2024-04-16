import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { productsApi } from "./products/productsApi";
import { userAuthApi } from "./auth/userAuthApi";

// import storage from 'redux-persist/lib/storage';

//Persisting token from auth slice to localStorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware, userAuthApi.middleware);
  },
});

export const persistor = persistStore(store);
