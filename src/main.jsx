import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext } from "react";
import App from "./App.jsx";
import "./index.css";
import ProductStore from "./store/ProductStore.js";
import ManCatalog from "./layout/manCatalog/ManCatalog.jsx";
import Header from "./layout/header/header.jsx";
import ProductPage from "./components/pages/productPage/ProductPage.jsx";
import Brands from "./pages/brands/Brands.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import NewBrands from "./pages/newBrands/NewBrands.jsx";
import Woomans from "./pages/woomans/Woomans.jsx";
import Sales from "./pages/sales/Sales.jsx";
import Footer from "./layout/footer/footer";

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
          <Route path={"/brands"} element={<Brands />} />
          <Route path={"/catalog"} element={<Catalog />} />
          <Route path={"newBrands"} element={<NewBrands />} />
          <Route path={"/sales"} element={<Sales />} />
          <Route path={"/woomans"} element={<Woomans />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
