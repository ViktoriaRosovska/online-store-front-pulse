import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { MainWrapper, SharedLayoutContainer } from "./SharedLayout.styled";
import ModalHelp from "../Modals/modalHelp/ModalHelp.jsx";
import ModalAuth from "../Modals/ModalAuth/ModalAuth.jsx";
import { useState } from "react";
import { ScrollToTop } from "../ScrollToTop.js";
import Footer from "../Footer/Footer";

function SharedLayout({ modalOn, modal }) {
  const [seeMail, setSeeMail] = useState(false);
  const [onModalHelp, setOnModalHelp] = useState(false);
  const seeOnMail = () => {
    setSeeMail((e) => !e);
    setOnModalHelp((e) => !e);
    modalOn();
  };
  const seeOfModalHelp = () => {
    setSeeMail((e) => !e);
    setOnModalHelp((e) => !e);
  };

  return (
    <SharedLayoutContainer>
      <ScrollToTop />
      <Header modalOn={modalOn} />

      {onModalHelp ? (
        <ModalHelp seeMail={seeMail} seeOnMail={seeOnMail} onModalHelp={onModalHelp} off={seeOfModalHelp} />
      ) : (
        ""
      )}
      {modal ? <ModalAuth modalOn={modalOn} modal={modal} seeOnMail={seeOnMail} /> : ""}
      <MainWrapper>
        <Outlet />
      </MainWrapper>

      <Footer />
    </SharedLayoutContainer>
  );
}

export default SharedLayout;
