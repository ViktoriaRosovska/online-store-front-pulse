import { Container, PageSection } from "../../main.styled";
import { Outlet, useLocation } from "react-router-dom";
import {
  StyledNavLink,
  StyledNavigationWrapper,
} from "./ShopCartLayout.styled";

const ShopCartLayout = () => {
  const pathname = useLocation().pathname;
  return (
    <>
      <PageSection>
        <Container>
          <StyledNavigationWrapper>
            <StyledNavLink to="/">Головна</StyledNavLink>/
            <StyledNavLink
              end
              to="/shopcart"
              $isActive={() =>
                [
                  "/shopcart",
                  "/shopcart/delivery",
                  "/shopcart/payment",
                ].includes(pathname)
              }
            >
              Кошик
            </StyledNavLink>
            <span>/</span>
            <StyledNavLink
              to="/shopcart/delivery"
              $isActive={() =>
                [
                  "/shopcart",
                  "/shopcart/delivery",
                  "/shopcart/payment",
                ].includes(pathname)
              }
            >
              Доставка
            </StyledNavLink>
            <span>/</span>
            <StyledNavLink
              to="/shopcart/payment"
              $isActive={() =>
                [
                  "/shopcart",
                  "/shopcart/delivery",
                  "/shopcart/payment",
                ].includes(pathname)
              }
            >
              Оплата
            </StyledNavLink>
          </StyledNavigationWrapper>
          <Outlet />
        </Container>
      </PageSection>
    </>
  );
};

export default ShopCartLayout;
