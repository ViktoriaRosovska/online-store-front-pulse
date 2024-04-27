import { createSlice } from "@reduxjs/toolkit";

const userShopCartSlice = createSlice({
  name: "userShopCart",
  initialState: {
    userShopCart: [],
    isLoading: true,
    isLoggedIn: false,

    error: null,

    // extraReducers: builder => {
    //   builder
    //     .addCase(addShopCartItem.fulfield,(state, { payload }) => {
    //       state.userShopCart = [payload, ...state];
    //       state.isLoading = false;
    //       state.error = null;
    //     })

    //     .addMatcher(
    //       action => action.type.endsWith("/rejected"),
    //       (state, action) => {
    //         state.error = action.payload;
    //         state.isLoading = false;
    //         state.isLoggedIn = false;
    //       }
    //     )
    //     .addMatcher(
    //       action => action.type.endsWith("/pending"),
    //       state => {
    //         state.isLoading = true;
    //       }
    //     );
    // },
  },
  reducers: {
    addShopCartItem(state, { payload }) {
      state.userShopCart = [payload, ...state.userShopCart];
    },
    deleteUserShopCartItem(state, { payload }) {
      state.userShopCart = state.userShopCart.filter(el => el._id !== payload);
    },
  },
});

export const { addShopCartItem, deleteUserShopCartItem } =
  userShopCartSlice.actions;
export const userShopCartReducer = userShopCartSlice.reducer;
