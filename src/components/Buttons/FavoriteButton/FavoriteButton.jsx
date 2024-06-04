import useMediaQuery from "../../../hooks/useMediaQuery";
import { ReactComponent as LogoLover_sm } from "../../../assets/svg/heart_sm.svg";
import { ReactComponent as LogoLoverRed_sm } from "../../../assets/svg/heart_sm_red.svg";
import { ReactComponent as LogoLover_lg } from "../../../assets/svg/heart_lg.svg";
import { ReactComponent as LogoLoverRed_lg } from "../../../assets/svg/heart_lg_red.svg";
import { FavoriteBtn } from "./FavoriteButton.styled";

function FavoriteButton(props) {
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  return (
    <FavoriteBtn
      $sales={props.$sales}
      $new={props.$new}
      type={"button"}
      onClick={props.onClick}
    >
      {!isDesktop && props.isFavorite && <LogoLoverRed_sm />}
      {!isDesktop && !props.isFavorite && <LogoLover_sm />}
      {isDesktop && props.isFavorite && <LogoLoverRed_lg />}
      {isDesktop && !props.isFavorite && <LogoLover_lg />}
    </FavoriteBtn>
  );
}

export default FavoriteButton;
