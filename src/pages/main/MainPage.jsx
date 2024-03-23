import "./main.css";
import Banner from "../../components/Banner/Banner.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import SladerSale from "../../components/slider_sale/SladerSale.jsx";
import { useContext, useEffect } from "react";
import { host } from "../../http/index.jsx";
import { Context } from "../../main.jsx";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { ReactComponent as SaleIcon } from "../../assets/svg/saleIcon.svg";
import {
  BoxHero,
  BoxHeroTitle,
  BoxTitle,
  MainContent,
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
    <MainContent>
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
        <Link to="/malecatalog">
          <ManBox>
            <BoxTitle>
              <h3>Для нього</h3>
            </BoxTitle>
          </ManBox>
        </Link>
        <Link to="/femalecatalog">
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
      </SectionSale>
      <section className="marquee-centered">
        <div className="marquee marquee-rotate-right">
          <div className="track">
            <div className="marquee-content">
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
            </div>
          </div>
        </div>
        <div className="marquee marquee-rotate-left">
          <div className="track">
            <div className="marquee-content">
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
              <SaleIcon />
            </div>
          </div>
        </div>
      </section>
    </MainContent>
  );
});

export default Main;
