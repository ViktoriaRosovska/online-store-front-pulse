import { Navigate } from "react-router-dom";
import {
  selectUserToken,
  // useFetchCurrentUserQuery
} from "../../redux/auth";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  // const { data } = useFetchCurrentUserQuery();

  // const isLoggedIn = data ? true : false
  const isLoggedIn = useSelector(selectUserToken);

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute