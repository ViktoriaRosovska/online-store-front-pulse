import List from "./../../components/list/list";
import MenuItem from "./menu-item/menu-item";
import menuArray from "./../../data/menu.json";
import './menu.css'

function Menu() {

    

    return (
        <List className="menu__list">
            {
                menuArray.map((item, index) => (
                        <MenuItem 
                            key={index}
                            classNameLi="menu__list-item"
                            classNameLink="menu__list-link"
                            href="#"
                            menuItemText={item}
                        />
                    ))
            }
        </List>
    )


}

export default Menu;
