import { Container } from "src/main.styled";
import { PageWrapper } from "./ProductPage.styled";
import ProductInfo from "components/ProductInfo";
import { LastView } from "components/LastView/LastView";

const ProductPage = () => {
  return (
    <PageWrapper>
      <Container>
        <ProductInfo />
      </Container>
      <LastView />
    </PageWrapper>
  );
};

export default ProductPage;
