import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AddToCartButton,
  ButtonWrapper,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrapper,
  FavoriteWrapper,
  Meta,
  PriceWrapper,
  ProductCategory,
  ProductCategoryName,
  ProductCategoryValue,
  ProductDataWrapper,
  SizeGridButton,
  StyledProductInfoWrapper,
} from "./ProductInfo.styled";
import { useGetProductByIdQuery } from "../../redux/products/productsApi";
import ProductImageList from "./ProductImageList";
import ProductHeading from "./ProductHeading";
import ProductPrice from "./ProductPrice";
import ProductSizeList from "./ProductSizeList";
import ProductFeatureList from "./ProductFeatureList";
import ProductCommonInfo from "./ProductCommonInfo";
import DetailsToggler from "components/UIKit/DetailsToggler";
import Breadcrumbs from "components/Breadcrumbs";
import { ModalSizeList } from "../../components/Modals/ModalSizeList/ModalSizeList";
import { ModalShopCart } from "components/Modals/ModalShopCart/ModalShopCart";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { addShopCartItem } from "../../redux/user/userShopCart/userShopCartSlice";
import { BREADCRUMBS } from "../../utils/breadcrumbsVocabulary";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import CommonModal from "components/Modals/CommonModal";
import FavoriteButton from "components/Buttons/FavoriteButton/FavoriteButton";
import { Container } from "../../main.styled";
import { LastView } from "components/LastView/LastView";
import { StyledLoaderPosition } from "components/Loader/Loader.styled";
import { Loader } from "components/Loader/Loader";

const ProductInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  const [lastView, setLastView] = useLocalStorage("lastView", []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleVisibility = type => {
    if (type == "size") {
      setIsVisible(prev => !prev);
    }
    if (type == "cart") {
      setIsVisibleCart(prev => !prev);
    }
  };

  const [searchParams] = useSearchParams();
  const [sizeValue, setSizeValue] = useState(() =>
    Number(searchParams.get("size")?.split(",")[0] || undefined)
  );
  const { id } = useParams();

  const onSizeSelect = e => {
    setSizeValue(Number(e.target.value));
  };

  const { data, isError, isFetching } = useGetProductByIdQuery(id);
  // console.log(data, isError);

  let location = useLocation()?.state?.from;
  const arr = [];
  arr.push(location?.pathname);
  while (location !== undefined) {
    location = location?.state?.from;
    if (location !== undefined) {
      arr.push(location);
    } else if (location == undefined) {
      break;
    }
  }
  useEffect(() => {
    if (isError) navigate("/404");
  }, [isError, navigate]);

  if (isFetching)
    return (
      <StyledLoaderPosition>
        <Loader />
      </StyledLoaderPosition>
    );
  if (!data) return null;
  if (isError || !data.name) return <div>Error Component</div>;

  const {
    name,
    sale,
    article,
    basePrice,
    description,
    categories,
    features,
    imgGallery,
  } = data;

  const shopCartProduct = {
    _id: data._id,
    data: data,
    quantity: 1,
    size: sizeValue,
    sizeId: data?.categories?.size?.find(el => el.value === sizeValue)?._id,
    price: Math.ceil(data.price),
  };
  if (lastView.findIndex(e => e._id === data._id) < 0) {
    setLastView(prev => [data, ...prev]);
  }
  const lastViewData = JSON.parse(localStorage.getItem("lastView"));
  return (
    <>
      <Container>
        <StyledProductInfoWrapper>
          <h1 hidden> {name}</h1>
          <Breadcrumbs current={name} BREADCRUMBS={BREADCRUMBS} />
          <ProductHeading
            device="mobile"
            article={article}
            title={name}
            categories={categories}
          />
          <ProductDataWrapper>
            <ProductImageList images={imgGallery} alt={name} />

            <Meta>
              <ProductHeading device="desktop" article={article} title={name} />

              <PriceWrapper>
                <ProductPrice
                  sale={sale}
                  basePrice={basePrice}
                  price={Math.ceil(data.price)}
                />
              </PriceWrapper>
              <div>
                <ProductCategory>
                  <ProductCategoryName>Категорія:</ProductCategoryName>&nbsp;
                  <ProductCategoryValue>
                    {categories?.sex == "Жінка"
                      ? "Жіноче взуття"
                      : "Чоловіче взуття"}
                  </ProductCategoryValue>
                </ProductCategory>
                <ProductCategory>
                  <ProductCategoryName>Сезон:</ProductCategoryName>&nbsp;
                  <ProductCategoryValue>
                    {categories?.season}
                  </ProductCategoryValue>
                </ProductCategory>
              </div>
              <SizeGridButton
                type="button"
                onClick={() => toggleVisibility("size")}
              >
                Розмірна сітка
              </SizeGridButton>

              {categories && (
                <ProductSizeList
                  sizes={categories.size}
                  currentValue={sizeValue}
                  onSizeSelect={onSizeSelect}
                />
              )}

              <ButtonWrapper>
                <AddToCartButton
                  type="button"
                  disabled={!sizeValue}
                  onClick={() => {
                    dispatch(addShopCartItem(shopCartProduct));
                    toggleVisibility("cart");
                  }}
                >
                  Додати в кошик
                </AddToCartButton>
                <FavoriteWrapper>
                  <FavoriteButton productId={data._id} productInfo={true} />
                </FavoriteWrapper>
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

          <Portal isOpen={isVisible}>
            <CommonModal
              onClose={() => toggleVisibility("size")}
              isSizeModal={true}
              padding="80px 55px"
              top="80px"
            >
              <ModalSizeList isVisible={isVisible} />
            </CommonModal>
          </Portal>

          <Portal isOpen={isVisibleCart}>
            <CommonModal
              onClose={() => toggleVisibility("cart")}
              padding="68px 48px 66px"
              top="68px"
            >
              <ModalShopCart
                onClose={() => toggleVisibility("cart")}
                productData={data}
                sizeValue={sizeValue}
              />
            </CommonModal>
          </Portal>
        </StyledProductInfoWrapper>
      </Container>
      {lastViewData.length > 0 ? (
        <LastView lastViewData={lastViewData} />
      ) : null}
    </>
  );
};

export default ProductInfo;
