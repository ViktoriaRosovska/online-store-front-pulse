import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetchCurrentUserQuery } from "../redux/auth/userAuthApi";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { data, isLoading, isError, error } = token
    ? useFetchCurrentUserQuery()
    : { data: null, isError: false, isLoading: false };

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      setFavoriteProducts(data.favoriteProducts);
    }

    //поміняти консоль лог
    if (isError) {
      console.log(`Тут має бути алерт але поки: ${error}`);
    }

    //поміняти консоль лог
    if (isLoading) {
      console.log(`тут має бути спіннер`);
    }
  }, [data, isError, isLoading, error]);

  const login = (userData, authToken, userFavorites) => {
    setUser(userData);
    localStorage.setItem("token", authToken);
    setToken(authToken);
    setFavoriteProducts(userFavorites);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    setToken("");
    setFavoriteProducts([]);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, favoriteProducts, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
