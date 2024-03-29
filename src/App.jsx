import "./App.css";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  // const { store } = useContext(Context);

  // useEffect(() => {
  //   brand().then((res) => store.setProducts(res));
  // }, []);

  const modalOn = () => {
    setModal((e) => !e);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout modalOn={modalOn} modal={modal} />}>
          <Route index element={<Main />} />
          <Route path={"/malecatalog"} element={<MaleCatalog />} />
          <Route path={"/:id"} element={<ProductPage />} />
          <Route path={"/femalecatalog"} element={<FemaleCatalog />} />
          <Route path={"/brands"} element={<Brands />} />
          <Route path={"/catalog"} element={<Catalog />} />
          <Route path={"/newbrands"} element={<NewBrands />} />
          <Route path={"/sales"} element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});

export default App;
