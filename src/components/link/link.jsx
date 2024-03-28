import { Link } from "react-router-dom";

function Links(props) {
  return (
    <Link className={props.className} to={props.href}>
      {props.linkText || props.children}
    </Link>
  );
}

export default Links;
