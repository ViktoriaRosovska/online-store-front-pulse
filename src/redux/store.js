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
// import storage from 'redux-persist/lib/storage';
// import { noticesApi } from './notices/noticesApi';

//Persisting token from auth slice to localStorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    // [noticesApi.reducerPath]: noticesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware);
    //   .concat(userPetsApi.middleware);
  },
});

export const persistor = persistStore(store);
