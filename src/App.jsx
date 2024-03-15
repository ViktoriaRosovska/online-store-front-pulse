import "./App.css";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { brand } from "./http/ProductsApi.jsx";
import { Context } from "./main.jsx";

import Main from "./pages/main/MainPage";
import MaleCatalog from "./pages/maleCatalog/MaleCatalog.jsx";
import FemaleCatalog from "./pages/femaleCatalog/FemaleCatalog.jsx";
import ProductPage from "./pages/productPage/ProductPage.jsx";
import Brands from "./pages/brands/Brands.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import NewBrands from "./pages/newBrands/NewBrands.jsx";
import Sales from "./pages/sales/Sales.jsx";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";

const App = observer(() => {
  const [modal, setModal] = useState(false);
  const { store } = useContext(Context);

  useEffect(() => {
    brand().then((res) => store.setProducts(res));
  }, []);

  const modalOn = () => {
    setModal((e) => !e);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout modalOn={modalOn} />}>
          <Route index element={<Main modal={modal} modalOn={modalOn} />} />
          <Route path={"/man"} element={<MaleCatalog />} />
          <Route path={"/man/:id"} element={<ProductPage />} />
          <Route path={"/woomans"} element={<FemaleCatalog />} />

          <Route path={"/brands"} element={<Brands />} />
          <Route path={"/catalog"} element={<Catalog />} />
          <Route path={"newBrands"} element={<NewBrands />} />
          <Route path={"/sales"} element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});

export default App;
