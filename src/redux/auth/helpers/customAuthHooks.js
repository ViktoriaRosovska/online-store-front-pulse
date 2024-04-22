import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLazyFetchCurrentUserQuery } from "../userAuthApi";
import { setCredentials, removeCredentials } from "../auth";

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

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("token", data.token);
      dispatch(setCredentials(data));
    }
  }, [isSuccess, data]);
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
