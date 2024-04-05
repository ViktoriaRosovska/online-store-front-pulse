import {
  AddToCartButton,
  ButtonWrapper,
  CurrentBreadcrumb,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrapper,
  DesktopHeading,
  FavoriteButton,
  ImageWraper,
  ImagesGrid,
  Meta,
  MobileHeading,
  PackageInfoItem,
  PackageInfoList,
  PriceDiscount,
  PriceNew,
  PriceOld,
  PriceWrapper,
  ProductArticle,
  ProductDataWrapper,
  ProductInfoItem,
  ProductInfoList,
  ProductTitle,
  SizeGridButton,
  SizeSelectorItem,
  SizeSelectorLabel,
  SizeSelectorList,
  StyledBreadcrumbs,
} from "./ProductInfo.styled";
import { useState } from "react";
import { ReactComponent as LogoLover } from "/public/icons/favorites-icon.svg";
import { ReactComponent as ConditionsIcon } from "/public/icons/product-page-icons/conditions.svg";
import { ReactComponent as DeliveryIcon } from "/public/icons/product-page-icons/delivery.svg";
import { ReactComponent as ExchangeIcon } from "/public/icons/product-page-icons/exchange.svg";
import { ReactComponent as OriginalIcon } from "/public/icons/product-page-icons/original.svg";
import { useGetProductByIdQuery } from "../../redux/products/productsApi";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const [sizeValue, setSizeValue] = useState();
  const { id } = useParams();

  const onChangeHandler = e => {
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

  const gallery = imgGallery.filter((_, i) => i < 4);
  const isDiscounted = sale === 0;

  const sizes = categories.size.reduce(
    (acc, item) =>
      !acc.some(({ _id }) => item._id === _id) ? [...acc, item] : acc,
    []
  );

  return (
    <>
      <h1 hidden> Кроссівки Nike Tech Hera Brown Geode Teal </h1>
      <StyledBreadcrumbs>
        Головна / Чоловіче взуття /
        <CurrentBreadcrumb> Nike Tech Hera Brown Geode Teal</CurrentBreadcrumb>
      </StyledBreadcrumbs>

      <MobileHeading>
        <ProductTitle>{name}</ProductTitle>
        <ProductArticle>
          <span>Артикул:</span> {article}
        </ProductArticle>
      </MobileHeading>

      <ProductDataWrapper>
        <ImagesGrid>
          {gallery.map(url => (
            <ImageWraper key={url}>
              <img src={url} alt="" />
            </ImageWraper>
          ))}
        </ImagesGrid>

        <Meta>
          <DesktopHeading>
            <ProductTitle>{name}</ProductTitle>
            <ProductArticle>
              <span>Артикул:</span> {article}
            </ProductArticle>
          </DesktopHeading>

          <PriceWrapper>
            <span>
              {!isDiscounted && <PriceOld>{basePrice} грн</PriceOld>}
              <PriceNew $sale={!isDiscounted}>{price} грн.</PriceNew>
            </span>
            {!isDiscounted && <PriceDiscount>-{sale}%</PriceDiscount>}
          </PriceWrapper>

          <SizeGridButton type="button">Розмірна сітка </SizeGridButton>

          <SizeSelectorList>
            {sizes.map(({ _id, value }) => (
              <SizeSelectorItem key={_id}>
                <SizeSelectorLabel $selected={sizeValue === value}>
                  {value}
                  <input
                    hidden
                    type="radio"
                    name="size"
                    value={value}
                    onChange={onChangeHandler}
                  />
                </SizeSelectorLabel>
              </SizeSelectorItem>
            ))}
          </SizeSelectorList>

          <ButtonWrapper>
            <AddToCartButton type="button" disabled={!sizeValue}>
              Додати в кошик
            </AddToCartButton>
            <FavoriteButton type="button">
              <LogoLover />
            </FavoriteButton>
          </ButtonWrapper>

          <PackageInfoList>
            <PackageInfoItem>
              <OriginalIcon /> Тільки оригінал
            </PackageInfoItem>

            <PackageInfoItem>
              <DeliveryIcon /> Доставка 1-2 дні
            </PackageInfoItem>

            <PackageInfoItem>
              <ExchangeIcon /> Легкий обмін та повернення
            </PackageInfoItem>

            <PackageInfoItem>
              <ConditionsIcon /> Умови оплати, доставки та повернення
            </PackageInfoItem>
          </PackageInfoList>
        </Meta>
      </ProductDataWrapper>

      <DescriptionWrapper>
        <DescriptionTitle>Опис</DescriptionTitle>
        <DescriptionText>{description}</DescriptionText>

        <DescriptionTitle>Характеристики</DescriptionTitle>

        <ProductInfoList>
          {features.map(feature => (
            <ProductInfoItem key={feature}>
              <span>{feature}</span>
            </ProductInfoItem>
          ))}
        </ProductInfoList>
      </DescriptionWrapper>
    </>
  );
};

export default ProductInfo;
