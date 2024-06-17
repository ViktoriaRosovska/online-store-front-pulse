import {
  StyledShopCartButton,
  StyledShopCartWhiteButton,
} from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import {
  ModalShopCartTitle,
  StyledModalShopCartWrapper,
  StyledProductTitle,
  StyledShopCartContainer,
  StyledShopCartDescription,
  StyledShopCartImage,
  StyledShopCartInfo,
  StyledShopCartRegistration,
  StyledShopCartTip,
} from "./ModalShopCart.styled";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

export const ModalShopCart = ({ productData, sizeValue, onClose }) => {
  const location = useLocation();
  // const alink = () => {
  //   navigate(`${ROUTES.SHOPCART}`, { state: { from: location } });
  // };

  if (!productData) return null;

  const { name, price, categories, imgGallery } = productData;
  return (
    <StyledModalShopCartWrapper>
      <ModalShopCartTitle>Додано в кошик</ModalShopCartTitle>
      <StyledShopCartContainer>
        <StyledShopCartInfo>
          <StyledShopCartImage src={imgGallery[0]} alt={name} />
          <StyledShopCartDescription>
            <StyledProductTitle>{name}</StyledProductTitle>
            <StyledProductTitle>{price} грн</StyledProductTitle>

            <p>
              Колір:&nbsp;{categories.color.forEach(el => el.name)?.join(" / ")}
            </p>
            <p>Розмір:&nbsp;{sizeValue} </p>
            <p>Кількість:&nbsp;1</p>
          </StyledShopCartDescription>
        </StyledShopCartInfo>
        <StyledShopCartRegistration>
          <div>
            <StyledProductTitle>Кошик</StyledProductTitle>
            <StyledShopCartTip>
              <span>Усього товарів: </span>
              <span>1</span>
            </StyledShopCartTip>
            <StyledShopCartTip>
              <span>Вартість:</span>
              <span>{price}&nbsp;грн</span>
            </StyledShopCartTip>
          </div>

          <StyledShopCartButton
            text={"Оформити"}
            route={ROUTES.SHOPCART}
            state={{ from: location }}
          />
          <StyledShopCartWhiteButton
            onClick={onClose}
            text={"Продовжити покупки"}
          />
        </StyledShopCartRegistration>
      </StyledShopCartContainer>
    </StyledModalShopCartWrapper>
  );
};
