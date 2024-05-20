import "./main.css";
import Banner from "../../components/Banner/Banner.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SaleIconsMarquee from "../../components/SaleIconsMarquee/SaleIconsMarquee";
import {
  BoxHero,
  BoxHeroTitleWrapper,
  BoxTitle,
  HeroButton,
  ManBox,
  SectionHero,
  SectionManWomen,
  SectionNews,
  SectionSale,
  VectorBox,
  WomenBox,
} from "./MainPage.styled.js";
// import OneSlider from "../../components/Slider/OneSlider.jsx";
import ProductSlider from "../../components/Slider/ProductSlider.jsx";

import { useEffect, useState } from "react";
import { brandNew, brandSales } from "../../http/ProductsApi";
import { Container } from "../../main.styled";
import { StyledSliderTitle } from "components/Typography/Typography.styled";

const Main = () => {
  const [sales, setSales] = useState([]);
  const [newBrands, setNewBrands] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(sales.products);
  const navFunc = () => {
    navigate("/catalog", {
      state: { from: location.pathname },
    });
  };

  useEffect(() => {
    brandNew().then(res => setNewBrands(res));
    brandSales().then(res => setSales(res));
  }, []);

  return (
    <>
      <SectionHero>
        <Container>
          <BoxHero>
            <BoxHeroTitleWrapper>
              <h1>ОБИРАЙ КОМФОРТ ТА СВОБОДУ</h1>
            </BoxHeroTitleWrapper>
            <HeroButton btnType="button" click={navFunc}>
              Каталог
            </HeroButton>
          </BoxHero>
        </Container>
      </SectionHero>
      <SectionManWomen className="container">
        <Link to="/malecatalog" state={{ from: location }}>
          <ManBox>
            <BoxTitle>
              <h3>Для нього</h3>
            </BoxTitle>
          </ManBox>
        </Link>
        <Link to="/femalecatalog" state={{ from: location }}>
          <WomenBox>
            <BoxTitle>
              <h3>Для неї</h3>
            </BoxTitle>
          </WomenBox>
        </Link>
      </SectionManWomen>
      <VectorBox>{/* <img src={vector2} alt="vector" /> */}</VectorBox>
      <SectionNews>
        <Container>
          <StyledSliderTitle>Новинки</StyledSliderTitle>
          <ProductSlider
            products={newBrands.products}
            cardfeature={"newbrands"}
          />
        </Container>
      </SectionNews>
      <Banner />
      <SectionSale>
        <Container>
          <StyledSliderTitle>Розпродаж</StyledSliderTitle>
          <ProductSlider products={sales.products} cardfeature={"sales"} />
        </Container>
      </SectionSale>
      <section className="marquee-centered">
        <div className="marquee marquee-rotate-right">
          <div className="track">
            <SaleIconsMarquee count={50} />
          </div>
        </div>
        <div className="marquee marquee-rotate-left">
          <div className="track">
            <SaleIconsMarquee count={50} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
