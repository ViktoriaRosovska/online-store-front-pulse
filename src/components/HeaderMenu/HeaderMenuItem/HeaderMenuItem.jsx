import Links from "../../link/Link";
import {  StyledLi } from "./HeaderMenuItem.styled";

function MenuItem(props) {
  return (
    <StyledLi onClick={props.onClose}>
      <Links
        href={props.href}
        linkText={props.menuItemText}
        state={{ from: location }}
      />
    </StyledLi>
  );
}

export default MenuItem;
