import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import { StyledCountWrapper } from "./StyledShopCountComponent.styled";
import { useSelector } from "react-redux";

export const StyledShopCountComponent = () => {
  const { countQuantity } = useSelector(selectUserShopCart);
  return <StyledCountWrapper>{countQuantity}</StyledCountWrapper>;
};
