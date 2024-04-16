import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetchCurrentUserQuery } from "../redux/auth/userAuthApi";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const { data } = useFetchCurrentUserQuery();

  useEffect(() => {
    setUser(data?.user);
    setToken(data?.token);
    localStorage.setItem("token", token);
    setFavoriteProducts(data?.favoriteProducts);
  }, [data]);

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
