import menuArray from "./../../data/menu.json";
import { MenuList } from "./HeaderMenu.styled.jsx";
import MenuItem from "./HeaderMenuItem/HeaderMenuItem";

function HeaderMenu({ onClose }) {
  return (
    <MenuList>
      {menuArray.map((item, index) => (
        <MenuItem
          onClose={onClose}
          key={index}
          href={item.category.href}
          menuItemText={item.category.name}
        />
      ))}
    </MenuList>
  );
}

export default HeaderMenu;
