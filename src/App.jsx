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
import { ROUTES } from "./utils/routes";

const App = () => {
  return (
    <BrowserRouter basename="online-store-front-pulse">
      <Routes>
        <Route path={ROUTES.HOME} element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path={":id"} element={<ProductPage />} />
          <Route path={ROUTES.MALE} element={<MaleCatalog />} />
          <Route path={ROUTES.FEMALE} element={<FemaleCatalog />} />
          <Route path={ROUTES.BRANDS} element={<Brands />} />
          <Route path={ROUTES.CATALOG} element={<Catalog />} />
          <Route path={ROUTES.NEWBRANDS} element={<NewBrands />} />
          <Route path={ROUTES.SALES} element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
