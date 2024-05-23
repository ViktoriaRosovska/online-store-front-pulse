import { useEffect } from "react";
import {
  useDispatch,
  // useSelector
} from "react-redux";
import { useLazyFetchCurrentUserQuery } from "../userAuthApi";
import { setCredentials, removeCredentials } from "../auth";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../utils/routes";
// import { selectUserToken } from "../selectors";

export const useHandleCurrentUser = () => {
  const dispatch = useDispatch();

  // const token = useSelector(selectUserToken);

  const [fetchCurrentUser, { data, isError, error }] =
    useLazyFetchCurrentUserQuery();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const persistedData = localStorage.getItem("persist:userToken");
        console.log("fetchUser  persistedData", persistedData);
        const token = persistedData
          ? JSON.parse(persistedData).token?.replace(/"/g, "")
          : "";
        if (token) {
          await fetchCurrentUser()
            .unwrap()
            .then(res => {
               console.log("fetchUser  res", res)
              dispatch(setCredentials(res));
              return res;
            })
            .catch(error => {
              console.log("fetchUser  error", error);
              if (error.status === 401)
                localStorage.removeItem("persist:userToken");
              dispatch(removeCredentials());
            });
        }
      } catch (error) {
        console.log("fetchUser  error", error);
        // if (error.code === 401) {
        //   localStorage.removeItem("persist:userToken");
        //   dispatch(removeCredentials());
        // }
      }
    };

    fetchUser();
  }, []);
           

  return { data, isError, error };
};

export const useHandleLoginSuccess = (isSuccess, data) => {
  console.log("useHandleLoginSuccess  data", data);
  console.log("useHandleLoginSuccess  isSuccess", isSuccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("token", data.token);
      dispatch(setCredentials(data));
      navigate(ROUTES.ACCOUNT);
    }
  }, [isSuccess, data]);
};

export const useHandleLogoutSuccess = isSuccess => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("token");
      dispatch(removeCredentials());
      navigate(ROUTES.CATALOG);
    }
  }, [isSuccess]);
};

export const useHandleAuthErrors = (isError, error) => {
  useEffect(() => {
    if (isError && error.code === 400) {
      console.log("Bad Request");
    }

    if (isError && error.code === 404) {
      console.log("Please sign up");
    }

    if (isError && error.code === 409) {
      console.log("User already exists");
    }
  }, [isError, error]);
};
