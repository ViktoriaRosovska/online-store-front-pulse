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

export const FavoriteCountComponent = ({ favoriteCount }) => {
  return (
    <StyledFavoriteCountWrapper>{favoriteCount}</StyledFavoriteCountWrapper>
  );
};
