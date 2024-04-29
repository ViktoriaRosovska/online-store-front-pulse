import Links from "../../link/link";

function HeaderMenuItem(props) {
  return (
    <li className={props.classNameLi}>
      <Links
        className={props.classNameLink}
        href={props.href}
        linkText={props.menuItemText}
        state={{ from: location }}
      />
    </li>
  );
}

export default HeaderMenuItem;
