import { CardButtonWrapper } from "./CardButton.styled";

// import "./Button.css";
const CardButton = ({ text, click }) => {
  return <CardButtonWrapper onClick={click}>{text}</CardButtonWrapper>;
};

export default CardButton;
