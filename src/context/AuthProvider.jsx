import React, { createContext, useContext, useEffect, useState } from "react";
import { useLazyFetchCurrentUserQuery } from "../redux/auth/userAuthApi";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const currentToken = localStorage.getItem("token") || "";

  const [fetchCurrentUser, { data, isLoading }] =
    useLazyFetchCurrentUserQuery();

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      setFavoriteProducts(data.favoriteProducts);
    } else if (currentToken) {
      fetchCurrentUser();
    } else {
      setUser(null);
      setToken("");
      localStorage.removeItem("token");
      setFavoriteProducts([]);
    }
  }, []);

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
