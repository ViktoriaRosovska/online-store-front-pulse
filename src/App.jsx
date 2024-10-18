import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "./utils/routes";
import { PersistedAuth } from "./HOCs";
// import { GoogleOAuthProvider } from "@react-oauth/google";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import ShopCartLayout from "components/ShopCartLayout/ShopCartLayout.jsx";
import ProfileLayout from "components/ProfileLayout/ProfileLayout.jsx";
import PrivateRoute from "components/routs/PrivateRout.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const Brands = lazy(() => import("./pages/brands/Brands"));
const Catalog = lazy(() => import("./pages/catalog/Catalog"));
const FemaleCatalog = lazy(() => import("./pages/femaleCatalog/FemaleCatalog"));
const Main = lazy(() => import("./pages/main/MainPage"));
const MaleCatalog = lazy(() => import("./pages/maleCatalog/MaleCatalog"));
const NewBrands = lazy(() => import("./pages/newBrands/NewBrands"));
const ProductPage = lazy(() => import("./pages/productPage/ProductPage"));
const Sales = lazy(() => import("./pages/sales/Sales"));
const UserAccount = lazy(() => import("./pages/user/UserAccount"));
const UserFavorites = lazy(() => import("./pages/user/UserFavorites"));
const UserOrderHistory = lazy(() => import("./pages/user/UserOrderHistory"));
const UserSupport = lazy(() => import("./pages/user/UserSupport"));
const UserWallet = lazy(() => import("./pages/user/UserWallet"));
const FooterSupport = lazy(() => import("./pages/footer/FooterSupport"));
const FooterConditions = lazy(() => import("./pages/footer/FooterConditions"));
const FooterGuarantee = lazy(() => import("./pages/footer/FooterGuarantee"));
const FooterPrivacyPolicy = lazy(() =>
  import("./pages/footer/FooterPrivacyPolicy")
);
const FooterDelivery = lazy(() => import("./pages/footer/FooterDelivery"));
const FooterAboutUs = lazy(() => import("./pages/footer/FooterAboutUs"));
const UserShopCart = lazy(() =>
  import("./pages/user/UserShopCart/UserShopCart")
);
const UserShopCartDelivery = lazy(() =>
  import("./pages/user/UserShopCart/UserShopCartDelivery")
);
const UserShopCartPayment = lazy(() =>
  import("./pages/user/UserShopCart/UserShopCartPayment")
);
const SearchPage = lazy(() => import("./pages/search/SearchPage"));
const UserShopCartSuccessful = lazy(() =>
  import("./pages/user/UserShopCart/UserShopCartSuccessful")
);

// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
// console.log(import.meta.env.GOOGLE_CLIENT_ID);
const App = () => {
  return (
    <BrowserRouter basename="/online-store-front-pulse">
      <PersistedAuth>
        {/* <GoogleOAuthProvider clientId="714053760620-gj9l120ntnpie22q76ap8ouklk42mfc9.apps.googleusercontent.com"> */}
        <Routes>
          <Route path={ROUTES.HOME} element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path="/reset-password" element={<Main />} />
            <Route path={":id"} element={<ProductPage />} />
            <Route path={ROUTES.MALE} element={<MaleCatalog />} />
            <Route path={ROUTES.FEMALE} element={<FemaleCatalog />} />
            <Route path={ROUTES.BRANDS} element={<Brands />} />
            <Route path={ROUTES.CATALOG} element={<Catalog />} />
            <Route path={ROUTES.NEWBRANDS} element={<NewBrands />} />
            <Route path={ROUTES.SALES} element={<Sales />} />
            <Route path={ROUTES.SEARCH} element={<SearchPage />} />
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
              <Route
                path={ROUTES.SHOPCARTSUCCESSFUL}
                element={<UserShopCartSuccessful />}
              />
            </Route>
            <Route path={ROUTES.SUPPORT} element={<FooterSupport />} />
            <Route path={ROUTES.CONDITIONS} element={<FooterConditions />} />
            <Route path={ROUTES.GUARANTEE} element={<FooterGuarantee />} />
            <Route path={ROUTES.POLICY} element={<FooterPrivacyPolicy />} />
            <Route path={ROUTES.DELIVERY} element={<FooterDelivery />} />
            <Route path={ROUTES.ABOUTUS} element={<FooterAboutUs />} />
            <Route
              path={ROUTES.PROFILE}
              element={
                <PrivateRoute>
                  <ProfileLayout />
                </PrivateRoute>
              }
            >
              <Route path={ROUTES.ACCOUNT} element={<UserAccount />} />
              <Route
                path={ROUTES.ORDERHISTORY}
                element={<UserOrderHistory />}
              />
              <Route path={ROUTES.FAVORITES} element={<UserFavorites />} />
              <Route path={ROUTES.WALLET} element={<UserWallet />} />
              <Route path={ROUTES.SUPPORT} element={<UserSupport />} />
            </Route>
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Route>
        </Routes>
        {/* </GoogleOAuthProvider> */}
      </PersistedAuth>
    </BrowserRouter>
  );
};

export default App;
