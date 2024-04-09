import { ReactComponent as LogoLover } from "/public/icons/favorites-icon.svg";
import { FavoriteBtn } from "./FavoriteButton.styled";
import "./favorite-button.css";

function FavoriteButton(props) {
  return (
    <FavoriteBtn $sales={props.$sales} $new={props.$new}>
      <LogoLover />
    </FavoriteBtn>
  );
}

export default FavoriteButton;
