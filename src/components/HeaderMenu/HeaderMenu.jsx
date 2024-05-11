import MenuItem from "./HeaderMenuItem/HeaderMenuItem";
import menuArray from "./../../data/menu.json";
// import "./HeaderMenu.styled.jsx";
import { MenuList } from "./HeaderMenu.styled.jsx";

function HeaderMenu() {
  return (
    <MenuList >
      {menuArray.map((item, index) => (
        <MenuItem
          key={index}
          href={item.category.href}
          menuItemText={item.category.name}
        />
      ))}
    </MenuList>
  );
}

export default HeaderMenu;
