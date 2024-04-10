import {
  AddToCartButton,
  ButtonWrapper,
  CurrentBreadcrumb,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrapper,
  FavoriteButton,
  Meta,
  PriceWrapper,
  ProductDataWrapper,
  SizeGridButton,
  StyledBreadcrumbs,
} from "./ProductInfo.styled";
import { useState } from "react";
import { ReactComponent as LogoLover } from "/public/icons/favorites-icon.svg";
import { useGetProductByIdQuery } from "../../redux/products/productsApi";
import { useParams } from "react-router-dom";
import ProductImageList from "./ProductImageList";
import ProductHeading from "./ProductHeading";
import ProductPrice from "./ProductPrice";
import ProductSizeList from "./ProductSizeList";
import ProductFeatureList from "./ProductFeatureList";
import ProductCommonInfo from "./ProductCommonInfo";
import DetailsToggler from "components/UIKit/DetailsToggler";

const ProductInfo = () => {
  const [sizeValue, setSizeValue] = useState();
  const { id } = useParams();

  const onSizeSelect = e => {
    setSizeValue(Number(e.target.value));
  };

  const { data, isError, isFetching } = useGetProductByIdQuery(id);

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error Component</div>;
  if (!data) return null;

  console.log(data);

  const {
    name,
    price,
    sale,
    article,
    basePrice,
    
    description,
    categories,
    features,
    imgGallery,
  } = data;

  return (
    <>
      <h1 hidden> Кроссівки Nike Tech Hera Brown Geode Teal </h1>
      <StyledBreadcrumbs>
        Головна / Чоловіче взуття /
        <CurrentBreadcrumb> Nike Tech Hera Brown Geode Teal</CurrentBreadcrumb>
      </StyledBreadcrumbs>

      <ProductHeading device="mobile" article={article} title={name} />

      <ProductDataWrapper>
        <ProductImageList images={imgGallery} alt={name} />

        <Meta>
          <ProductHeading device="desktop" article={article} title={name} />

          <PriceWrapper>
            <ProductPrice sale={sale} basePrice={basePrice} price={price} />
          </PriceWrapper>

          <SizeGridButton type="button">Розмірна сітка </SizeGridButton>

          {categories && (
            <ProductSizeList
              sizes={categories.size}
              currentValue={sizeValue}
              onSizeSelect={onSizeSelect}
            />
          )}

          <ButtonWrapper>
            <AddToCartButton type="button" disabled={!sizeValue}>
              Додати в кошик
            </AddToCartButton>

            <FavoriteButton type="button">
              <LogoLover />
            </FavoriteButton>
          </ButtonWrapper>

          <ProductCommonInfo />
        </Meta>
      </ProductDataWrapper>

      <DescriptionWrapper>
        <DetailsToggler summary={<DescriptionTitle>Опис</DescriptionTitle>}>
          <DescriptionText>{description}</DescriptionText>
        </DetailsToggler>

        <DetailsToggler
          summary={<DescriptionTitle>Характеристики</DescriptionTitle>}
        >
          <ProductFeatureList features={features} />
        </DetailsToggler>
      </DescriptionWrapper>
    </>
  );
};

export default ProductInfo;
