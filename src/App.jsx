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
  UserSupport,
  UserWallet,
  FooterSupport,
  FooterConditions,
  FooterGuarantee,
  FooterPrivacyPolicy,
  FooterDelivery,
  FooterAboutUs,
  UserShopCart,
  UserShopCartDelivery,
  UserShopCartPayment,
} from "./pages/index";

import ShopCartLayout from "components/ShopCartLayout/ShopCartLayout.jsx";
import ProfileLayout from "components/ProfileLayout/ProfileLayout.jsx";
import PrivateRoute from "components/routs/PrivateRout.jsx";

const App = () => {
  return (
    <BrowserRouter basename="/online-store-front-pulse">
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
            <Route path={ROUTES.SHOPCARTLAYOUT} element={<ShopCartLayout />}>
              <Route index element={<UserShopCart />} />
              <Route
                path={ROUTES.SHOPCARTDELIVERY}
                element={<UserShopCartDelivery />}
              />
              <Route
                path={ROUTES.SHOPCARTPAYMENT}
                element={<UserShopCartPayment />}
              />
            </Route>
            <Route path={ROUTES.SUPPORT} element={<FooterSupport />} />
            <Route path={ROUTES.CONDITIONS} element={<FooterConditions />} />
            <Route path={ROUTES.GUARANTEE} element={<FooterGuarantee />} />
            <Route path={ROUTES.POLICY} element={<FooterPrivacyPolicy />} />
            <Route path={ROUTES.DELIVERY} element={<FooterDelivery />} />
            <Route path={ROUTES.ABOUTUS} element={<FooterAboutUs />} />
            <Route path={ROUTES.PROFILE} element={<PrivateRoute><ProfileLayout /></PrivateRoute>}>
              <Route path={ROUTES.ACCOUNT} element={<UserAccount />} />
              <Route
                path={ROUTES.ORDERHISTORY}
                element={<UserOrderHistory />}
              />
              <Route path={ROUTES.FAVORITES} element={<UserFavorites />} />
              <Route path={ROUTES.WALLET} element={<UserWallet />} />
              <Route path={ROUTES.SUPPORT} element={<UserSupport />} />
            </Route>
          </Route>
        </Routes>
      </PersistedAuth>
    </BrowserRouter>
  );
};

export default App;
