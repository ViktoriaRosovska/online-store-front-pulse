import Link from "./../../../components/link/link";

function MenuItem(props) {
    return (
        <li className={props.classNameLi}>
            <Link className={props.classNameLink} href={props.href} linkText={props.menuItemText}/>
        </li>
    )
}

export default MenuItem;
