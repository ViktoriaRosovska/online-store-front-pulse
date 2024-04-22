import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLazyFetchCurrentUserQuery } from "../userAuthApi";
import { setCredentials, removeCredentials } from "../auth";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../utils/routes";

export const useHandleCurrentUser = () => {
  const dispatch = useDispatch();

  const [fetchCurrentUser, { data, isError, error }] =
    useLazyFetchCurrentUserQuery();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchCurrentUser();
        dispatch(setCredentials(userData));
      } catch (error) {
        if (error.code === 401) {
          localStorage.removeItem("token");
          dispatch(removeCredentials());
        }

        console.log(`Ups, error: ${error}`);
      }
    };

    fetchUser();
  }, []);

  return { data, isError, error };
};

export const useHandleLoginSuccess = (isSuccess, data) => {
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
