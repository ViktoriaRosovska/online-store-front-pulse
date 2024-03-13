import Links from "./../../../components/link/link";

function MenuItem(props) {

    return (
        <li className={props.classNameLi}>
            <Links className={props.classNameLink} href={props.href} linkText={props.menuItemText}/>
        </li>
    )
}

export default MenuItem;
