import MenuItem from "./HeaderMenu-Item/HeaderMenu-Item";
import menuArray from "./../../data/menu.json";
import "./HeaderMenu.css";

function HeaderMenu() {
  return (
    <ul className="menu__list">
      {menuArray.map((item, index) => (
        <MenuItem
          key={index}
          classNameLi="menu__list-item"
          classNameLink="menu__list-link"
          href={item.category.href}
          menuItemText={item.category.name}
        />
      ))}
    </ul>
  );
}

export default HeaderMenu;
