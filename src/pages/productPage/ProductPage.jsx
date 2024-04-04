import ProductInfo from "src/components/ProductInfo";
import { Container } from "src/main.styled";
import { PageWrapper } from "./ProductPage.styled";

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
