import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext } from "react";
import App from "./App.jsx";
import "./index.css";
import ProductStore from "./store/ProductStore.js";
import ManCatalog from "./layout/manCatalog/ManCatalog.jsx";
import Header from "./layout/header/header.jsx";
import ProductPage from "./components/pages/productPage/ProductPage.jsx";
import Footer from "./layout/footer/footer.jsx";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider
        value={{
          store: new ProductStore(),
        }}
      >
        <Header />
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/man"} element={<ManCatalog />} />
          <Route path={"/man/:id"} element={<ProductPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
