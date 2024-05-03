import {
  StyledShopCartButton,
  StyledShopCartWhiteButton,
} from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import {
  ModalShopCartTitle,
  StyledCloseBtnShopCart,
  StyledModalShopCartWrapper,
  StyledProductTitle,
  StyledShopCartContainer,
  StyledShopCartDescription,
  StyledShopCartImage,
  StyledShopCartInfo,
  StyledShopCartRegistration,
  StyledShopCartTip,
} from "./ModalShopCart.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import { ReactComponent as ModalCloseBtnIcon } from "../../../assets/svg/modalCloseBtn.svg";

export const ModalShopCart = ({ productData, sizeValue, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const alink = () => {
    navigate(`${ROUTES.SHOPCART}`, { state: { from: location } });
  };
  // const handleAddToCart = () => {
  //   // Создаем объект с данными о продукте
  //   const product = {
  //     id: productData.id, // Уникальный идентификатор продукта
  //     name: name,
  //     price: price,
  //     color: categories.color[0].name,
  //     size: sizeValue,
  //     quantity: 1, // Количество, в данном случае 1
  //     imageUrl: imgGallery[0], // URL изображения
  //   };

  if (!productData) return null;

  const { name, price, categories, imgGallery } = productData;
  return (
    <StyledModalShopCartWrapper>
      <StyledCloseBtnShopCart type="button" onClick={onClose}>
        <ModalCloseBtnIcon />
      </StyledCloseBtnShopCart>
      <ModalShopCartTitle>Додано в кошик</ModalShopCartTitle>
      <StyledShopCartContainer>
        <StyledShopCartInfo>
          <StyledShopCartImage src={imgGallery[0]} alt={name} />
          <StyledShopCartDescription>
            <StyledProductTitle>{name}</StyledProductTitle>
            <StyledProductTitle>{price} грн</StyledProductTitle>

            <p>Колір:&nbsp;{categories.color[0].name}</p>
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

          <StyledShopCartButton text={"Оформити"} click={alink} />
          <StyledShopCartWhiteButton
            click={onClose}
            text={"Продовжити покупки"}
          />
        </StyledShopCartRegistration>
      </StyledShopCartContainer>
    </StyledModalShopCartWrapper>
  );
};
