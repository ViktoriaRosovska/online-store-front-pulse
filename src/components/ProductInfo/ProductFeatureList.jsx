import { ProductInfoItem, ProductInfoList } from "./ProductInfo.styled";

const ProductFeatureList = ({ features }) => {
  return (
    <ProductInfoList>
      {features.map(feature => (
        <ProductInfoItem key={feature}>
          <span>{feature}</span>
        </ProductInfoItem>
      ))}
    </ProductInfoList>
  );
};

export default ProductFeatureList;
