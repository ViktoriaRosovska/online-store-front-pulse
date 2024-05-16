import { Navigate } from "react-router-dom";
import { useFetchCurrentUserQuery } from "../../redux/auth";

const PrivateRoute = ({ children }) => {
  const { data } = useFetchCurrentUserQuery();

  const isLoggedIn = data ? true : false

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute