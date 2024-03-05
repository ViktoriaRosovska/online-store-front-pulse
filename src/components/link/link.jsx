function Link(props) {
    return (
        <a className={props.className} href={props.href}>{props.linkText || props.children}</a>
    )
}

export default Link;
