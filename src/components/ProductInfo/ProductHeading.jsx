import {
  DesktopHeading,
  MobileHeading,
  ProductArticle,
  ProductTitle,
} from "./ProductInfo.styled";

const MOBILE = "mobile";
const DESKTOP = "desktop";

const ProductHeading = ({ device, title, article }) => {
  if (device !== MOBILE && device !== DESKTOP)
    throw new Error("device prop must be 'mobile' or 'desktop' ");

  const Wrapper = device === MOBILE ? MobileHeading : DesktopHeading;

  return (
    <Wrapper>
      <ProductTitle>{title}</ProductTitle>
      <ProductArticle>
        <span>Артикул:</span> {article}
      </ProductArticle>
    </Wrapper>
  );
};

export default ProductHeading;
