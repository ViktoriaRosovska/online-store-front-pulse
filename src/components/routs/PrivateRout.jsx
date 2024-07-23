import { Navigate } from "react-router-dom";
import { selectUserToken } from "../../redux/auth";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectUserToken);

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
