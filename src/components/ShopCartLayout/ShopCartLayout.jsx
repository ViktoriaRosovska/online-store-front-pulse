import { Container, PageSection } from "../../main.styled";
import { Outlet, useLocation } from "react-router-dom";
import {
  StyledNavLink,
  StyledNavigationWrapper,
} from "./ShopCartLayout.styled";

const ShopCartLayout = () => {
  const pathname = useLocation().pathname;
  const isActive = () =>
    ["/shopcart", "/shopcart/delivery", "/shopcart/payment"].includes(pathname);

  return (
    <>
      <PageSection>
        <Container>
          <StyledNavigationWrapper>
            <StyledNavLink to="/">Головна</StyledNavLink>/
            <StyledNavLink end to="/shopcart" $isActive={isActive}>
              Кошик
            </StyledNavLink>
            {(pathname === "/shopcart/delivery" ||
              pathname === "/shopcart/payment") && (
              <>
                <span>/</span>
                <StyledNavLink to="/shopcart/delivery" $isActive={isActive}>
                  Доставка
                </StyledNavLink>
              </>
            )}
            {pathname === "/shopcart/payment" && (
              <>
                <span>/</span>
                <StyledNavLink to="/shopcart/payment" $isActive={isActive}>
                  Оплата
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
