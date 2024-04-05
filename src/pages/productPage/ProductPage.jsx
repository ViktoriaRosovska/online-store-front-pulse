import { Container } from "src/main.styled";
import { PageWrapper } from "./ProductPage.styled";
import ProductInfo from "components/ProductInfo";

const ProductPage = () => {
  return (
    <PageWrapper>
      <Container>
        <ProductInfo />
      </Container>
    </PageWrapper>
  );
};

export default ProductPage;
