import {
  decrementQuantity,
  deleteUserShopCartItem,
  incrementQuantity,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import {
  StyledCard,
  StyledChangeCountBtn,
  StyledChangeCountWrapper,
  StyledChangeCountWrapperDesktop,
  StyledCloseBtnCard,
  StyledCountANDPriceWrapper,
  StyledInfoWrapper,
  StyledProductName,
  StyledProductText,
  StyledProductValue,
  StyledShopCartCardWrapper,
  StyledShopCartImage,
  StyledShopCartInfo,
  StyledShopCartItemCount,
  StyledShopCartListItem,
} from "../ShopCart/ShopCart.styled";
import { useDispatch } from "react-redux";
import { ReactComponent as CloseBtnSmall } from "../../../assets/svg/closeBtnSmall.svg";
import { FiMinus, FiPlus } from "react-icons/fi";

export const ShopCard = ({ el, showCloseBtn, showDeliveryPrice, device }) => {
  const mergeColor = arr => {
    const newArr = [];

    for (let el of arr) {
      newArr.push(el.name);
    }

    return newArr.join(" / ");
  };
  const dispatch = useDispatch();
  return (
    <StyledShopCartListItem $device={device}>
      <StyledShopCartCardWrapper
        $showDeliveryPrice={showDeliveryPrice}
        $device={device}
      >
        {showCloseBtn && (
          <StyledCloseBtnCard
            onClick={() => dispatch(deleteUserShopCartItem(el))}
          >
            <CloseBtnSmall />
          </StyledCloseBtnCard>
        )}

        <StyledCard>
          <StyledShopCartImage src={el.data.imgGallery[0]} alt={el.data.name} />
          <StyledShopCartInfo>
            <StyledInfoWrapper>
              <StyledProductName>{el.data.name}</StyledProductName>
              <StyledProductText>
                Колір:
                <StyledProductValue>
                  &nbsp;
                  {mergeColor(el.data.categories.color)}
                </StyledProductValue>
              </StyledProductText>
              <StyledProductText>
                Розмір:&nbsp;
                <StyledProductValue>{el.size}</StyledProductValue>
              </StyledProductText>
              {device === "mobile" && (
                <StyledProductText>
                  Кількість:&nbsp;
                  <StyledProductValue>{el.quantity}</StyledProductValue>
                </StyledProductText>
              )}
              {showCloseBtn && (
                <StyledChangeCountWrapperDesktop>
                  <StyledChangeCountBtn
                    onClick={() => dispatch(decrementQuantity(el))}
                  >
                    <FiMinus />
                  </StyledChangeCountBtn>
                  <StyledShopCartItemCount>
                    {el.quantity}
                  </StyledShopCartItemCount>

                  <StyledChangeCountBtn
                    onClick={() => dispatch(incrementQuantity(el))}
                  >
                    <FiPlus />
                  </StyledChangeCountBtn>
                </StyledChangeCountWrapperDesktop>
              )}
              {showDeliveryPrice && (
                <>
                  <StyledProductText>
                    Ціна:&nbsp;
                    <StyledProductValue>{el.price}&nbsp;грн</StyledProductValue>
                  </StyledProductText>
                  <StyledProductText>
                    Кількість:&nbsp;
                    <StyledProductValue>{el.quantity}</StyledProductValue>
                  </StyledProductText>
                </>
              )}
            </StyledInfoWrapper>
          </StyledShopCartInfo>
        </StyledCard>

        <StyledCountANDPriceWrapper $showCloseBtn={showCloseBtn}>
          {showCloseBtn && device === "mobile" && (
            <StyledChangeCountWrapper>
              <StyledChangeCountBtn
                onClick={() => dispatch(decrementQuantity(el))}
              >
                <FiMinus />
              </StyledChangeCountBtn>
              <StyledShopCartItemCount>
                <StyledProductName>{el.quantity}</StyledProductName>
              </StyledShopCartItemCount>

              <StyledChangeCountBtn
                onClick={() => dispatch(incrementQuantity(el))}
              >
                <FiPlus />
              </StyledChangeCountBtn>
            </StyledChangeCountWrapper>
          )}
          {!showDeliveryPrice && (
            <StyledProductName>{el.price}&nbsp;грн</StyledProductName>
          )}
        </StyledCountANDPriceWrapper>
      </StyledShopCartCardWrapper>
    </StyledShopCartListItem>
  );
};
