import Footer from "../../layout/footer/footer";
import Header from "../../layout/header/header";
import { Outlet } from "react-router-dom";
import { SharedLayoutContainer } from "./SharedLayout.styled";
import ModalHelp from "../../layout/modals/modalHelp/ModalHelp.jsx";
import ModalAuth from "../../layout/modals/ModalAuth.jsx";
import { useState } from "react";

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
      <Header modalOn={modalOn} />

      {onModalHelp ? (
        <ModalHelp seeMail={seeMail} seeOnMail={seeOnMail} onModalHelp={onModalHelp} off={seeOfModalHelp} />
      ) : (
        ""
      )}
      {modal ? <ModalAuth modalOn={modalOn} modal={modal} seeOnMail={seeOnMail} /> : ""}

      <Outlet />
      <Footer />
    </SharedLayoutContainer>
  );
}

export default SharedLayout;
