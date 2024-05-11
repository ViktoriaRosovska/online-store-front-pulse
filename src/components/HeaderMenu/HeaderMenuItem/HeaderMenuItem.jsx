import Links from "../../link/Link";
import { MenuItem } from "./HeaderMenuItem.styled";

function HeaderMenuItem(props) {
  return (
    <MenuItem>
      <Links
        href={props.href}
        linkText={props.menuItemText}
        state={{ from: location }}
      />
    </MenuItem>
  );
}

export default HeaderMenuItem;
