import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetchCurrentUserQuery } from "../redux/auth/userAuthApi";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { data, isError, isLoading } = useFetchCurrentUserQuery();

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      setFavoriteProducts(data.favoriteProducts);
    }
  }, [data]);

  //тут може бути лоадер
  if (isLoading) {
    return <div>Loading...</div>;
  }

  //тут має бути not found
  if (isError) {
    return <div>Error fetching user data</div>;
  }

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
