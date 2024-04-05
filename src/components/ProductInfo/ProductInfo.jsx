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
  ProductSubtitle,
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

const sizes = [41, 41.5, 42, 42.5, 43, 43.5, 44, 45];

const ProductInfo = () => {
  const [sizeValue, setSizeValue] = useState(41);

  const onChangeHandler = e => {
    setSizeValue(Number(e.target.value));
  };

  return (
    <>
      <h1 hidden> Кроссівки Nike Tech Hera Brown Geode Teal </h1>
      <StyledBreadcrumbs>
        Головна / Чоловіче взуття /
        <CurrentBreadcrumb> Nike Tech Hera Brown Geode Teal</CurrentBreadcrumb>
      </StyledBreadcrumbs>

      <MobileHeading>
        <ProductTitle>Nike Tech Hera Brown</ProductTitle>
        <ProductSubtitle>Geode Teal</ProductSubtitle>
        <ProductArticle>
          <span>Артикул:</span> FJ9532
        </ProductArticle>
      </MobileHeading>

      <ProductDataWrapper>
        <ImagesGrid>
          <ImageWraper>Image</ImageWraper>
          <ImageWraper>Image</ImageWraper>
          <ImageWraper>Image</ImageWraper>
          <ImageWraper>Image</ImageWraper>
        </ImagesGrid>

        <Meta>
          <DesktopHeading>
            <ProductTitle>Nike Tech Hera Brown</ProductTitle>
            <ProductSubtitle>Geode Teal</ProductSubtitle>
            <ProductArticle>Артикул: FJ9532</ProductArticle>
          </DesktopHeading>

          <PriceWrapper>
            <span>
              <PriceOld>4 990 грн</PriceOld>
              <PriceNew $sale={true}>4 490 грн.</PriceNew>
            </span>
            <PriceDiscount>-10%</PriceDiscount>
          </PriceWrapper>

          <SizeGridButton type="button">Розмірна сітка </SizeGridButton>

          <SizeSelectorList>
            {sizes.map(size => (
              <SizeSelectorItem key={size}>
                <SizeSelectorLabel $selected={sizeValue === size}>
                  {size}
                  <input
                    hidden
                    type="radio"
                    name="size"
                    value={size}
                    onChange={onChangeHandler}
                  />
                </SizeSelectorLabel>
              </SizeSelectorItem>
            ))}
          </SizeSelectorList>

          <ButtonWrapper>
            <AddToCartButton type="button">Додати в кошик</AddToCartButton>
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
        <DescriptionText>
          Кросівки виготовлені з високоякісних матеріалів, які забезпечують
          довговічність і зручність протягом тривалого часу. Підошва забезпечує
          відмінне відшаровування і амортизацію кожного кроку, забезпечуючи вам
          стабільність та комфорт під час будь-яких активностей. Крім того, їх
          ергономічний дизайн дозволяє кросівкам ідеально підійти до вашої ноги,
          надаючи вам найкращий можливий комфорт.
        </DescriptionText>

        <DescriptionTitle>Характеристики</DescriptionTitle>

        <ProductInfoList>
          <ProductInfoItem>
            <span>Круглий, прогумований носок.</span>
          </ProductInfoItem>

          <ProductInfoItem>
            <span> Гумова підошва міцна і стійка до пошкоджень.</span>
          </ProductInfoItem>

          <ProductInfoItem>
            <span>
              Жорстка п&lsquo;ятка стабілізує каблук і утримує ногу у взутті,
              щоб вона не вислизала під час руху.
            </span>
          </ProductInfoItem>
        </ProductInfoList>
      </DescriptionWrapper>
    </>
  );
};

export default ProductInfo;
