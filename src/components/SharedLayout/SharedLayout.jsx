import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { MainWrapper, SharedLayoutContainer } from "./SharedLayout.styled";
import { ScrollToTop } from "../ScrollToTop.js";
import Footer from "../Footer/Footer";

function SharedLayout() {
  return (
    <SharedLayoutContainer>
      <ScrollToTop />
      <Header />

      <MainWrapper>
        <Outlet />
      </MainWrapper>

      <Footer />
    </SharedLayoutContainer>
  );
}

export default SharedLayout;
