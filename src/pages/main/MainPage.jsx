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

import ProductSlider from "../../components/Slider/ProductSlider.jsx";

import { useEffect, useState } from "react";

import { Container } from "../../main.styled";
import { StyledSliderTitle } from "components/Typography/Typography.styled";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import CommonModal from "components/Modals/CommonModal";
import ModalAuth from "components/Modals/ModalAuth/ModalAuth";
import {
  useLazyGetNewestQuery,
  useLazyGetSalesQuery,
} from "../../redux/products/productsApi";
import { DEFAULT_QUERY_LIMIT, DEFAULT_QUERY_PAGE } from "../../http/config";
import { ROUTES } from "../../utils/routes";

const Main = () => {
  const [getNewest, { data, isError, isFetching }] = useLazyGetNewestQuery();
  const [
    getSales,
    { data: saleData, isError: isSaleError, isFetching: isSaleFetching },
  ] = useLazyGetSalesQuery();
  const [newProducts, setNewProducts] = useState([]);
  const [sales, setSales] = useState([]);
  useEffect(() => {
    getNewest({ page: DEFAULT_QUERY_PAGE, limit: DEFAULT_QUERY_LIMIT });
    getSales({ page: DEFAULT_QUERY_PAGE, limit: DEFAULT_QUERY_LIMIT });
    setNewProducts(data?.products?.filter(el => el?.isNewProduct));
    setSales(saleData?.products);
  }, [getNewest, getSales, data, saleData]);

  const navigate = useNavigate();
  const location = useLocation();

  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleCloseResetPasswordModal = () => {
    setIsResetPasswordModalOpen(false);
    navigate("/");
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const navFunc = () => {
    navigate("/catalog", {
      state: { from: location.pathname },
    });
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const resetToken = query.get("resetToken");

    if (resetToken) {
      setIsResetPasswordModalOpen(true);
    }
  }, [location]);

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
            <BoxTitle>Для нього</BoxTitle>
          </ManBox>
        </Link>
        <Link to="/femalecatalog" state={{ from: location }}>
          <WomenBox>
            <BoxTitle>Для неї</BoxTitle>
          </WomenBox>
        </Link>
      </SectionManWomen>
      <VectorBox>{/* <img src={vector2} alt="vector" /> */}</VectorBox>
      <SectionNews>
        <Container>
          <StyledSliderTitle>Новинки</StyledSliderTitle>
          <ProductSlider
            products={newProducts}
            cardfeature={"newbrands"}
            to={ROUTES.NEWBRANDS}
            showLastSlide={true}
            loop={false}
          />
        </Container>
      </SectionNews>
      <Banner />
      <SectionSale>
        <Container>
          <StyledSliderTitle>Розпродаж</StyledSliderTitle>
          <ProductSlider
            products={sales}
            cardfeature={"sales"}
            showLastSlide={true}
            to={ROUTES.SALES}
            loop={false}
          />
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

      <Portal isOpen={isResetPasswordModalOpen}>
        <CommonModal
          onClose={handleCloseResetPasswordModal}
          padding="68px 164px"
          top="68px"
        >
          <ModalAuth
            onClose={handleCloseResetPasswordModal}
            resetPassword={true}
          />
        </CommonModal>
      </Portal>

      <Portal isOpen={isLoginModalOpen}>
        <CommonModal
          onClose={handleCloseLoginModal}
          padding="68px 164px"
          top="68px"
        >
          <ModalAuth onClose={handleCloseLoginModal} />
        </CommonModal>
      </Portal>
    </>
  );
};

export default Main;
