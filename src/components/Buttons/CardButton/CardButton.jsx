import { CardButtonWrapper } from "./CardButton.styled";

// import "./Button.css";
const CardButton = ({ text, click, style }) => {
  return (
    <CardButtonWrapper style={style} onClick={click}>
      {text}
    </CardButtonWrapper>
  );
};

export default CardButton;
