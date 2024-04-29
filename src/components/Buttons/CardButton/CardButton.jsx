// import { useLocation } from "react-router-dom";
import { CardButtonWrapper } from "./CardButton.styled";

const CardButton = ({ text, style, route, state }) => {
  // const location = useLocation().pathname;

  return (
    <CardButtonWrapper style={style} to={route} state={state}>
      {text}
    </CardButtonWrapper>
  );
};

export default CardButton;
