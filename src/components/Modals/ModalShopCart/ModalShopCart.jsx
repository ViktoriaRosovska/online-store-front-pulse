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
import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import {
  StyledChangeCountBtn,
  StyledChangeCountWrapper,
  StyledProductName,
  StyledShopCartItemCount,
} from "components/ShopCart/ShopCart/ShopCart.styled";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";

export const ModalShopCart = ({ productData, sizeValue, onClose }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { countQuantity, priceSum, products } = useSelector(selectUserShopCart);

  if (!productData) return null;

  const { name, price, categories, imgGallery, _id } = productData;
  console.log(products);
  const productItem = products.find(el => el._id === _id);
  console.log(productItem);
  console.log(_id);
  console.log(categories);
  return (
    <StyledModalShopCartWrapper>
      <ModalShopCartTitle>Додано в кошик</ModalShopCartTitle>
      <StyledShopCartContainer>
        <StyledShopCartInfo>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <StyledShopCartImage src={imgGallery[0]} alt={name} />
            <StyledShopCartDescription>
              <StyledProductTitle>{name}</StyledProductTitle>
              <StyledProductTitle>{price} грн</StyledProductTitle>
              <p>
                Колір:&nbsp;
                {categories.color.map(el => el.name)?.join(" / ")}
              </p>
              <p>Розмір:&nbsp;{sizeValue} </p>
            </StyledShopCartDescription>
          </div>
          <StyledChangeCountWrapper>
            <StyledChangeCountBtn
              onClick={() => dispatch(decrementQuantity(productItem))}
            >
              <FiMinus />
            </StyledChangeCountBtn>
            <StyledShopCartItemCount>
              <StyledProductName>{productItem.quantity}</StyledProductName>
            </StyledShopCartItemCount>

            <StyledChangeCountBtn
              onClick={() => dispatch(incrementQuantity(productItem))}
            >
              <FiPlus />
            </StyledChangeCountBtn>
          </StyledChangeCountWrapper>
        </StyledShopCartInfo>
        <StyledShopCartRegistration>
          <div>
            <StyledProductTitle>Кошик</StyledProductTitle>
            <StyledShopCartTip>
              <span>Усього товарів: </span>
              <span>{countQuantity}</span>
            </StyledShopCartTip>
            <StyledShopCartTip>
              <span>Вартість:</span>
              <span>{priceSum}&nbsp;грн</span>
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
