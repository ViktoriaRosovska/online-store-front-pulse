export const selectUserToken = state => state.userAuthReducer.token;

export const selectUserData = state => state.userAuthReducer.user;

export const selectUserFavorites = state =>
  state.userAuthReducer.favoriteProducts;
