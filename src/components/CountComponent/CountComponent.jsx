import { useGetFavoritesQuery } from "../../redux/user/userSlice/userApi";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import {
  StyledCountWrapper,
  StyledFavoriteCountWrapper,
} from "./CountComponent.styled";
import { useSelector } from "react-redux";

export const ShopCountComponent = () => {
  const { countQuantity } = useSelector(selectUserShopCart);
  return <StyledCountWrapper>{countQuantity}</StyledCountWrapper>;
};

export const FavoriteCountComponent = () => {
  const { data } = useGetFavoritesQuery();

  const favoriteCount = data?.length;

  return (
    <StyledFavoriteCountWrapper>{favoriteCount}</StyledFavoriteCountWrapper>
  );
};
