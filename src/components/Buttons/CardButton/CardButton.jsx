import { CardButtonWrapper } from "./CardButton.styled";

const CardButton = ({
  text,
  style,
  route,
  state,
  $bannerWidth,
  onClick,
  $disabled,
}) => {
  return (
    <CardButtonWrapper
      style={style}
      to={route}
      state={state}
      $bannerWidth={$bannerWidth}
      $disabled={$disabled}
      onClick={onClick}
      role="button"
    >
      {text}
    </CardButtonWrapper>
  );
};

export default CardButton;
