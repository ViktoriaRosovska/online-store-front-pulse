import "./App.css";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { brand } from "./http/ProductsApi.jsx";
import { Context } from "./main.jsx";
import Main from "./pages/main/MainPage.jsx";
import ManCatalog from "./pages/manCatalog/ManCatalog";
import ProductPage from "./pages/productPage/ProductPage.jsx";
import Brands from "./pages/brands/Brands.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import NewBrands from "./pages/newBrands/NewBrands.jsx";
import Sales from "./pages/sales/Sales.jsx";
import Woomans from "./pages/woomans/Woomans.jsx";
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
        <Route path="/" element={<SharedLayout modalOn={modalOn} modal={modal}/>}>
          <Route index element={<Main  />} />
          <Route path={"/man"} element={<ManCatalog />} />
          <Route path={"/man/:id"} element={<ProductPage />} />
          <Route path={"/brands"} element={<Brands />} />
          <Route path={"/catalog"} element={<Catalog />} />
          <Route path={"newBrands"} element={<NewBrands />} />
          <Route path={"/sales"} element={<Sales />} />
          <Route path={"/woomans"} element={<Woomans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});

export default App;
