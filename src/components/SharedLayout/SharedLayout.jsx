import Footer from "../../layout/footer/footer";
import Header from "../../layout/header/header";
import { Outlet } from "react-router-dom";

function SharedLayout({ modalOn }) {
  return (
    <>
      <Header modalOn={modalOn} />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
