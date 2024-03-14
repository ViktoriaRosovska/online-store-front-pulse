import Footer from "../../layout/footer/footer";
import Header from "../../layout/header/header";
import { Outlet } from "react-router-dom";
import { SharedLayoutContainer } from "./SharedLayout.stuled";

function SharedLayout({ modalOn }) {
  return (
    <SharedLayoutContainer>
      <Header modalOn={modalOn} />
      <Outlet />
      <Footer />
    </SharedLayoutContainer>
  );
}

export default SharedLayout;
