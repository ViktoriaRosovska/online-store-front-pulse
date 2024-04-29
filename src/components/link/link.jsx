import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Links(props) {
  const location = useLocation();
  return (
    <Link
      className={props.className}
      to={props.href}
      state={{ from: location }}
    >
      {props.linkText || props.children}
    </Link>
  );
}

export default Links;
