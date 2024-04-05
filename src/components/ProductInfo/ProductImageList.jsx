import { ImageWraper, ImagesGrid } from "./ProductInfo.styled";

const IMAGE_MAX_COUNT = 4;

const ProductImageList = ({ images, alt }) => {
  const fixedCountImageList = images.filter((_, i) => i < IMAGE_MAX_COUNT);

  return (
    <ImagesGrid>
      {fixedCountImageList.map((url, i) => (
        <ImageWraper key={url}>
          <img src={url} alt={`${alt}, малюнок ${i + 1}`} />
        </ImageWraper>
      ))}
    </ImagesGrid>
  );
};

export default ProductImageList;
