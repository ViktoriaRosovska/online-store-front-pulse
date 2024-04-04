import {
  AddToCartButton,
  ButtonWrapper,
  CurrentBreadcrumb,
  DescriptionText,
  DescriptionTitle,
  DesktopHeading,
  FavoriteButton,
  ImageWraper,
  ImagesGrid,
  Meta,
  MobileHeading,
  PackageInfoItem,
  PackageInfoList,
  Price,
  ProductDataWrapper,
  ProductInfoItem,
  ProductInfoList,
  SizeGridButton,
  SizeSelectorItem,
  SizeSelectorList,
  StyledBreadcrumbs,
} from "./ProductInfo.styled";

const sizes = [41, 41.5, 42, 42.5, 43, 43.5, 44, 45];

const ProductInfo = () => {
  return (
    <>
      <h1 hidden> Кроссівки Nike Tech Hera Brown Geode Teal </h1>
      <StyledBreadcrumbs>
        Головна / Чоловіче взуття /
        <CurrentBreadcrumb> Nike Tech Hera Brown Geode Teal</CurrentBreadcrumb>
      </StyledBreadcrumbs>

      <MobileHeading>
        <h2>Nike Tech Hera Brown</h2>
        <p>Geode Teal</p>
        <p>Артикул: FJ9532</p>
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
            <h2>Nike Tech Hera Brown</h2>
            <p>Geode Teal</p>
            <p>Артикул: FJ9532</p>
          </DesktopHeading>

          <Price>
            <span>4 990 грн</span>
            <span>4 490 грн.</span>
            <span>-10%</span>
          </Price>

          <SizeGridButton type="button">Розмірна сітка </SizeGridButton>

          <SizeSelectorList>
            {sizes.map(size => (
              <SizeSelectorItem key={size}>
                <label>
                  {size}
                  <input
                    hidden
                    type="radio"
                    name="size"
                    value={size}
                  />
                </label>
              </SizeSelectorItem>
            ))}
          </SizeSelectorList>

          <ButtonWrapper>
            <AddToCartButton type="button">Додати в кошик</AddToCartButton>
            <FavoriteButton type="button">heart icon</FavoriteButton>
          </ButtonWrapper>

          <PackageInfoList>
            <PackageInfoItem>icon Тільки оригінал</PackageInfoItem>
            <PackageInfoItem>icon Доставка 1-2 дні</PackageInfoItem>
            <PackageInfoItem>icon Легкий обмін та повернення</PackageInfoItem>
            <PackageInfoItem>
              icon Умови оплати, доставки та повернення
            </PackageInfoItem>
          </PackageInfoList>
        </Meta>
      </ProductDataWrapper>

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
        <ProductInfoItem>Круглий, прогумований носок.</ProductInfoItem>
        <ProductInfoItem>
          Гумова підошва міцна і стійка до пошкоджень.
        </ProductInfoItem>
        <ProductInfoItem>
          Жорстка п&lsquo;ятка стабілізує каблук і утримує ногу у взутті, щоб
          вона не вислизала під час руху.
        </ProductInfoItem>
      </ProductInfoList>
    </>
  );
};

export default ProductInfo;
