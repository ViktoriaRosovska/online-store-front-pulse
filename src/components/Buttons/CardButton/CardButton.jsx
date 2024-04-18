import { useLocation } from "react-router-dom";
import { CardButtonWrapper } from "./CardButton.styled";

const CardButton = ({ text, style, route }) => {
  const location = useLocation().pathname;

  return (
    <CardButtonWrapper style={style} to={route} state={{ from: location }}>
      {text}
    </CardButtonWrapper>
  );
};

export default CardButton;
