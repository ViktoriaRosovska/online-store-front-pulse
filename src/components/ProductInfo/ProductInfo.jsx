import {
  AddToCartButton,
  ButtonWrapper,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrapper,
  FavoriteButton,
  Meta,
  PriceWrapper,
  ProductDataWrapper,
  SizeGridButton,
} from "./ProductInfo.styled";
import { useState } from "react";
import { ReactComponent as LogoLover } from "../../assets/svg/favorites-icon.svg";
import { useGetProductByIdQuery } from "../../redux/products/productsApi";
import { useParams, useSearchParams } from "react-router-dom";
import ProductImageList from "./ProductImageList";
import ProductHeading from "./ProductHeading";
import ProductPrice from "./ProductPrice";
import ProductSizeList from "./ProductSizeList";
import ProductFeatureList from "./ProductFeatureList";
import ProductCommonInfo from "./ProductCommonInfo";
import DetailsToggler from "components/UIKit/DetailsToggler";
// import BasicModal from "components/modal/Modal";
import Breadcrumbs from "components/Breadcrumbs";
import { AnimatePresence } from "framer-motion";
import ReusableModal from "components/Modals/ReusableModal";
import useScrollLock from "components/Modals/helpersForModal/useScrollLock";
import { ModalSizeList } from "../../components/Modals/ModalSizeList/ModalSizeList";
import { ModalShopCart } from "components/Modals/ModalShopCart/ModalShopCart";

const ProductInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLocked, setIsLocked] = useScrollLock(false);
  const [isVisibleCart, setIsVisibleCart] = useState(false);

  const toggleVisibility = type => {
    setIsLocked(prev => !prev);
    if (type == "size") {
      setIsVisible(prev => !prev);
    }
    if (type == "cart") {
      setIsVisibleCart(prev => !prev);
    }
  };
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const [searchParams] = useSearchParams();
  const [sizeValue, setSizeValue] = useState(() =>
    Number(searchParams.get("size")?.split(",")[0] || undefined)
  );
  const { id } = useParams();

  const onSizeSelect = e => {
    setSizeValue(Number(e.target.value));
  };

  const { data, isError, isFetching } = useGetProductByIdQuery(id);

  if (isFetching) return <div>Loading...</div>;
  if (!data) return null;
  if (isError || !data.name) return <div>Error Component</div>;

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

  // console.log(sizeValue);

  return (
    <>
      <h1 hidden> {name}</h1>

      <Breadcrumbs current={name} />

      <ProductHeading device="mobile" article={article} title={name} />

      <ProductDataWrapper>
        <ProductImageList images={imgGallery} alt={name} />

        <Meta>
          <ProductHeading device="desktop" article={article} title={name} />

          <PriceWrapper>
            <ProductPrice sale={sale} basePrice={basePrice} price={price} />
          </PriceWrapper>

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
              onClick={() => toggleVisibility("cart")}
            >
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

      {/* <BasicModal
        openModal={isModalOpen}
        closeModal={closeModal}
        productData={data}
        sizeValue={sizeValue}
      /> */}
      <AnimatePresence>
        {isVisible && (
          <ReusableModal
            locked={isLocked}
            onClose={() => toggleVisibility("size")}
          >
            <ModalSizeList
              onClose={() => toggleVisibility("size")}
              isVisible={isVisible}
            />
          </ReusableModal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisibleCart && (
          <ReusableModal
            locked={isLocked}
            onClose={() => toggleVisibility("cart")}
          >
            <ModalShopCart
              onClose={() => toggleVisibility("cart")}
              // isVisibleCart={isVisibleCart}
              productData={data}
              sizeValue={sizeValue}
            />
          </ReusableModal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductInfo;
