import { ReactComponent as LogoLover } from "../../../assets/svg/favorites-icon.svg";
import { FavoriteBtn } from "./FavoriteButton.styled";

function FavoriteButton(props) {
  return (
    <FavoriteBtn $sales={props.$sales} $new={props.$new} type={"button"} onClick={props.onClick}>
      <LogoLover />
    </FavoriteBtn>
  );
}

export default FavoriteButton;
