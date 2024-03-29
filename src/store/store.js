import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../slices/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // ignore PERSIST action
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

export default store;
