import { useLocation } from "react-router-dom";
import { StyledLink } from "./Link.styled";

function Links(props) {
  const location = useLocation();
  return (
    <StyledLink
      
      to={props.href}
      state={{ from: location }}
    >
      {props.linkText || props.children}
    </StyledLink>
  );
}

export default Links;
