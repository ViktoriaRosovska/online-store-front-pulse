import "./main.css";
import Banner from "../../components/Banner/Banner.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import SladerSale from "../../components/slider_sale/SladerSale.jsx";
import { useContext, useEffect } from "react";
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
  SectionNews,
  SectionSale,
  SliderBox,
  VectorBox,
  WomenBox,
} from "./MainPage.styled.js";

const Main = observer(() => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const navFunc = () => {
    navigate("/catalog");
  };

  useEffect(() => {
    host.get("/products").then((res) => store.setProducts(res));
  }, []);

  return (
    <main>
      <SectionHero>
        <div className="container">
          <BoxHero>
            <BoxHeroTitle>
              <h1>ОБИРАЙ КОМФОРТ ТА СВОБОДУ</h1>
            </BoxHeroTitle>
            <button type="button" onClick={navFunc}>
              Каталог
            </button>
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
      <SectionNews>
        <VectorBox>
          <img src="../../../image/Vector%202.png" alt="vector" />
        </VectorBox>
        <SliderBox>
          <h2>НОВИНКИ</h2>
          <Slider />
        </SliderBox>
      </SectionNews>
      <Banner />
      <SectionSale>
        <h2>РОЗПРОДАЖ</h2>
        <SladerSale />
        <div className="sale_img_line" id="animal">
          <img className="sale_line animal_line van" src="public/icons/Property 1=Default.png" />

          <img className="sale_line_1 move-right" src="public/icons/Property 1=Default.png" />
        </div>
      </SectionSale>
    </main>
  );
});

export default Main;