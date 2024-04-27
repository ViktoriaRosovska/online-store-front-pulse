import { Container } from "src/main.styled";
import ProductInfo from "components/ProductInfo";
import { LastView } from "components/LastView/LastView";
import { PageSection } from "../../main.styled";

const ProductPage = () => {
  return (
    <PageSection>
      <Container>
        <ProductInfo />
      </Container>
      <LastView />
    </PageSection>
  );
};

export default ProductPage;
