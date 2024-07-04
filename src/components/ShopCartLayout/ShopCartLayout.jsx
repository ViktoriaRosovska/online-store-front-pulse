import { Container, PageSection } from "../../main.styled";
import { Outlet, useLocation } from "react-router-dom";
import {
  StyledNavLink,
  StyledNavigationWrapper,
} from "./ShopCartLayout.styled";
import { Helmet } from "react-helmet";

const ShopCartLayout = () => {
  const pathname = useLocation().pathname;
  // console.log(pathname);
  const isActive = () =>
    [
      "/shopcart",
      "/shopcart/delivery",
      "/shopcart/payment",
      "/shopcart/successfull",
    ].includes(pathname);

  return (
    <>
      <Helmet>
        <title>PulseRun ShopCart</title>
      </Helmet>
      <PageSection>
        <Container>
          <StyledNavigationWrapper>
            <StyledNavLink to="/">Головна</StyledNavLink>/
            <StyledNavLink end to="/shopcart" $isActive={isActive}>
              Кошик
            </StyledNavLink>
            {(pathname === "/shopcart/delivery" ||
              pathname === "/shopcart/payment" ||
              pathname === "/shopcart/successfull") && (
              <>
                <span>/</span>
                <StyledNavLink to="/shopcart/delivery" $isActive={isActive}>
                  Доставка
                </StyledNavLink>
              </>
            )}
            {(pathname === "/shopcart/payment" ||
              pathname === "/shopcart/successfull") && (
              <>
                <span>/</span>
                <StyledNavLink to="/shopcart/payment" $isActive={isActive}>
                  Оплата
                </StyledNavLink>
              </>
            )}
            {pathname === "/shopcart/successfull" && (
              <>
                <span>/</span>
                <StyledNavLink to="/shopcart/successfull" $isActive={isActive}>
                  Замовлення оформлено
                </StyledNavLink>
              </>
            )}
          </StyledNavigationWrapper>
          <Outlet />
        </Container>
      </PageSection>
    </>
  );
};

export default ShopCartLayout;
