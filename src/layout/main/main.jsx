import "./main.css";
import Banner from "./Banner/Banner.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import SladerSale from "../../components/slider_sale/SladerSale.jsx";
import ModalAuth from "../modals/ModalAuth.jsx";
import ModalHelp from "../modals/modalHelp/ModalHelp.jsx";
import { useContext, useEffect, useState } from "react";
import { host } from "../../http/index.jsx";
import { Context } from "../../main.jsx";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  BoxHero,
  BoxHeroTitle,
  BoxTitle,
  ManBox,
  SectionHero,
  SectionManWomen,
  WomenBox,
} from "./main.styled.js";

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
      <SectionHero>
        <div className="container">
          <BoxHero>
            <BoxHeroTitle>
              <h1>ОБИРАЙ КОМФОРТ ТА СВОБОДУ</h1>
            </BoxHeroTitle>
            <button onClick={click}>Каталог</button>
          </BoxHero>
        </div>
      </SectionHero>
      <SectionManWomen className="container">
        <Link to="/man">
          <ManBox>
            <BoxTitle>
              <h3>Для нього</h3>
            </BoxTitle>
          </ManBox>
        </Link>
        <Link to="/woomans">
          <WomenBox>
            <BoxTitle>
              <h3>Для неї</h3>
            </BoxTitle>
          </WomenBox>
        </Link>
      </SectionManWomen>

      <div className="main_vector">
        <img src="../../../image/Vector%202.png" alt={"vector"} />
      </div>
      <div className="main_block_new">
        <h1>НОВИНКИ</h1>
        <Slider />
      </div>
      <Banner />

      <section className="slider_sale_sale">
        <h1 className="slider_sale">РОЗПРОДАЖ</h1>
        <SladerSale />
        <div className="sale_img_line" id="animal">
          <img
            className="sale_line animal_line van"
            src="public/icons/Property 1=Default.png"
          />

          <img
            className="sale_line_1 move-right"
            src="public/icons/Property 1=Default.png"
          />
        </div>
      </section>

      {onModalHelp ? (
        <ModalHelp
          seeMail={seeMail}
          seeOnMail={seeOnMail}
          onModalHelp={seeOnMail}
          off={seeOfModalHelp}
        />
      ) : (
        ""
      )}
      {modal ? (
        <ModalAuth modalOn={modalOn} modal={modal} seeOnMail={seeOnMail} />
      ) : (
        ""
      )}
    </main>
  );
});

export default Main;
