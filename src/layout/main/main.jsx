import "./main.css";

import Banner from "./Banner/Banner.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import SladerSale from "../../components/slider_sale/SladerSale.jsx";
import ModalAuth from "../modals/ModalAuth.jsx";
import ModalHelp from "../modals/modalHelp/ModalHelp.jsx";
import { useContext, useEffect, useState } from "react";
import { host } from "../../http/index.jsx";
import { Context } from "../../main.jsx";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import lineIcons from "../../../public/icons/Property 1=Default.png";
import { Container } from "../../main.styled.js";

const Main = observer(({ modal, modalOn }) => {
  const [seeMail, setSeeMail] = useState(false);
  const [onModalHelp, setOnModalHelp] = useState(false);

  const { store } = useContext(Context);
  const navigate = useNavigate();

  const click = () => {
    navigate("/catalog");
  };

  useEffect(() => {
    host.get("/products").then((res) => store.setProducts(res));
  }, []);

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
    <main>
      <Container>
        <div className="main">
          <div className="main_block">
            <div className="main_block_text">
              <h1>ОБИРАЙ КОМФОРТ ТА СВОБОДУ</h1>
            </div>
            <button className="button_catalog" onClick={click}>
              Каталог
            </button>
          </div>
        </div>
        <div className="main_man_woomen">
          <div className="main_man_block">
            <div className="main_man_block_text">
              Для нього
              <div className="line"></div>
            </div>
          </div>
          <div className="main_woomen_block">
            <div className="main_man_block_text">
              Для неї
              <div className="line_1"></div>
            </div>
          </div>
        </div>
        <div className="main_vector">
          <img src="../../../image/Vector%202.png" alt={"vector"} />
        </div>
        <div className="main_block_new">
          <h1>НОВИНКИ</h1>
          <Slider />
        </div>
        <Banner />
        <h1 className="slider_sale">РОЗПРОДАЖ</h1>

        <div className="slider_sale_sale">
          <SladerSale />
        </div>

        <div className="sale_img_line" id="animal">
          <img className="sale_line animal_line van" src={lineIcons} />

          <img className="sale_line_1 move-right" src={lineIcons} />
        </div>
        {onModalHelp ? (
          <ModalHelp seeMail={seeMail} seeOnMail={seeOnMail} onModalHelp={seeOnMail} off={seeOfModalHelp} />
        ) : (
          ""
        )}
        {modal ? <ModalAuth modalOn={modalOn} modal={modal} seeOnMail={seeOnMail} /> : ""}
      </Container>
    </main>
  );
});

export default Main;
