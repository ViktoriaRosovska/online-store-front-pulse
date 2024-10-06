import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { MainWrapper, SharedLayoutContainer } from "./SharedLayout.styled";
import { ScrollToTop } from "../ScrollToTop.js";
import Footer from "../Footer/Footer";
import { Suspense } from "react";
import { Preloader } from "components/Preloader/Preloader";

function SharedLayout() {
  return (
    <Suspense fallback={<Preloader />}>
      <SharedLayoutContainer>
        <ScrollToTop />
        <Header />

        <MainWrapper>
          <Outlet />
        </MainWrapper>
        <Preloader />
        <Footer />
      </SharedLayoutContainer>
    </Suspense>
  );
}

export default SharedLayout;
