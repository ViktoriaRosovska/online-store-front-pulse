import { BrowserRouter, Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import { ROUTES } from "./utils/routes";
import { PersistedAuth } from "./HOCs";
import {
  Brands,
  Catalog,
  FemaleCatalog,
  Main,
  MaleCatalog,
  NewBrands,
  ProductPage,
  Sales,
  UserAccount,
  UserFavorites,
  UserOrderHistory,
  UserShopCart,
  UserSupport,
  UserWallet,
} from "./pages/index";

const App = () => {
  return (
    <BrowserRouter basename="online-store-front-pulse">
      <PersistedAuth>
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
            <Route path={ROUTES.SHOPCART} element={<UserShopCart />} />
            <Route path={ROUTES.ACCOUNT} element={<UserAccount />}/>
            <Route path={ROUTES.ORDERHISTORY} element={<UserOrderHistory />} />
            <Route path={ROUTES.FAVORITES} element={<UserFavorites />} />
            <Route path={ROUTES.WALLET} element={<UserWallet />} />
            <Route path={ROUTES.SUPPORT} element={<UserSupport />} />
          </Route>
        </Routes>
      </PersistedAuth>
    </BrowserRouter>
  );
};

export default App;
