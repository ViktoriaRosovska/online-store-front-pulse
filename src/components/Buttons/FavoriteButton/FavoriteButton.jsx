import { ReactComponent as LogoLover } from "../../../assets/svg/favorites-icon.svg";
import { ReactComponent as LogoLoverRed } from "../../../assets/svg/favorite-red.svg";
import { FavoriteBtn } from "./FavoriteButton.styled";

function FavoriteButton(props) {
  return (
    <FavoriteBtn $sales={props.$sales} $new={props.$new} type={"button"} onClick={props.onClick} >
      {props.isFavorite ? <LogoLoverRed/> : <LogoLover /> }
    </FavoriteBtn>
  );
}

export default FavoriteButton;
