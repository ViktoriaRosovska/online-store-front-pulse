import { Container, PageSection } from "../../main.styled";
import { BREADCRUMBS_SHOPCART } from "../../utils/breadcrumbsVocabulary";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../utils/routes";
import { useLocation } from "react-router-dom";
import BreadcrumbsCart from "components/Breadcrumbs/BreadcrumbsCart";

export const ShopCartDelivery = props => {
  const location = useLocation().pathname;
  return (
    <PageSection>
      <Container>
        <BreadcrumbsCart
          current={props.title}
          BREADCRUMBS={BREADCRUMBS_SHOPCART}
        />
        <h2>{props.title}</h2>
        <div>Hello</div>
        <StyledShopCartButton
          text={"Продовжити оформлення"}
          route={ROUTES.SHOPCARTPAYMENT}
          state={{ from: location }}
        />
      </Container>
    </PageSection>
  );
};
