import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { MainWrapper, SharedLayoutContainer } from "./SharedLayout.styled";
import { ScrollToTop } from "../ScrollToTop.js";
import Footer from "../Footer/Footer";
import { Suspense } from "react";

function SharedLayout() {
  return (
    <SharedLayoutContainer>
      <ScrollToTop />
      <Header />

      <MainWrapper>
        <Suspense>
          <Outlet />
        </Suspense>
      </MainWrapper>

      <Footer />
    </SharedLayoutContainer>
  );
}

export default SharedLayout;
