import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import { deleteUserShopCartItem } from "../../redux/user/userShopCart/userShopCartSlice";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import { ReactComponent as CloseBtnSmall } from "../../assets/svg/closeBtnSmall.svg";
import {
  StyledCard,
  StyledChangeCountBtn,
  StyledChangeCountWrapper,
  StyledChangeCountWrapperDesctop,
  StyledCloseBtnCard,
  StyledCountANDPriceWrapper,
  StyledInfoWrapper,
  StyledNotificationWrapper,
  StyledOrderPriceTextWrapper,
  StyledOrderText,
  StyledOrderTitle,
  StyledOrderWrapper,
  StyledPDVText,
  StyledPageWrapper,
  StyledProductName,
  StyledProductText,
  StyledProductValue,
  StyledShopCartCardWrapper,
  StyledShopCartImage,
  StyledShopCartInfo,
  StyledShopCartItemCount,
  StyledShopCartListItem,
} from "./ShopCart.styled";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ROUTES } from "../../utils/routes";
import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { Formik } from "formik";

export const ShopCart = props => {
  const userShopCartItems = useSelector(selectUserShopCart);
  const [items, setItems] = useState(userShopCartItems);
  console.log(items);
  let location = useLocation();

  const initialValues = {
    code: "",
  };

  const onSubmit = async values => {
    console.log("send promocode", values);
  };

  const onQuantityDecrement = idx => {
    const newItems = [...items];

    newItems.map((el, index) => {
      if (idx === index && el.quantity !== 1) {
        el.quantity -= 1;
      }
    });

    setItems(newItems);
  };
  const onQuantityIncrement = idx => {
    const newItems = [...items];

    newItems.map((el, index) => {
      if (idx === index) {
        el.quantity += 1;
      }
    });

    setItems(newItems);
  };

  const normalize_count_form = (number, words_arr) => {
    number = Math.abs(number);
    if (Number.isInteger(number)) {
      let options = [2, 0, 1, 1, 1, 2];
      return words_arr[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : options[number % 10 < 5 ? number % 10 : 5]
      ];
    }
    return words_arr[1];
  };

  // console.log(arr);

  const dispatch = useDispatch();
  // console.log(userShopCartItems);
  let countQuantity = 0;
  const countPrice = items?.reduce((acc, el) => {
    if (el) {
      acc += el.price * el.quantity;
      countQuantity += el.quantity;
    }

    return acc;
  }, 0);

  const mergeColor = arr => {
    const newArr = [];

    for (let el of arr) {
      newArr.push(el.name);
    }

    return newArr.join(" / ");
  };
  //   console.log(countPrice);
  return (
    <>
      <Title>{props.title}</Title>
      <StyledPageWrapper>
        {items && items.length > 0 ? (
          <>
            <ul>
              {items.map((el, idx) => {
                return (
                  <StyledShopCartListItem key={el._id + "#" + idx}>
                    <StyledShopCartCardWrapper>
                      <StyledCloseBtnCard
                        onClick={() => dispatch(deleteUserShopCartItem(el))}
                      >
                        <CloseBtnSmall />
                      </StyledCloseBtnCard>

                      <StyledCard>
                        <StyledShopCartImage
                          src={el.data.imgGallery[0]}
                          alt={el.data.name}
                        />
                        <StyledShopCartInfo>
                          <StyledInfoWrapper>
                            <StyledProductName>
                              {el.data.name}
                            </StyledProductName>
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
                          </StyledInfoWrapper>
                          <StyledChangeCountWrapperDesctop>
                            <StyledChangeCountBtn
                              onClick={() => onQuantityDecrement(idx)}
                            >
                              <FiMinus />
                            </StyledChangeCountBtn>
                            <StyledShopCartItemCount>
                              {el.quantity}
                            </StyledShopCartItemCount>

                            <StyledChangeCountBtn
                              onClick={() => onQuantityIncrement(idx)}
                            >
                              <FiPlus />
                            </StyledChangeCountBtn>
                          </StyledChangeCountWrapperDesctop>
                        </StyledShopCartInfo>
                      </StyledCard>

                      <StyledCountANDPriceWrapper>
                        <StyledChangeCountWrapper>
                          <StyledChangeCountBtn
                            onClick={() => onQuantityDecrement(idx)}
                          >
                            <FiMinus />
                          </StyledChangeCountBtn>
                          <StyledShopCartItemCount>
                            {el.quantity}
                          </StyledShopCartItemCount>

                          <StyledChangeCountBtn
                            onClick={() => onQuantityIncrement(idx)}
                          >
                            <FiPlus />
                          </StyledChangeCountBtn>
                        </StyledChangeCountWrapper>
                        <StyledProductName>
                          {el.price}&nbsp;грн
                        </StyledProductName>
                      </StyledCountANDPriceWrapper>
                    </StyledShopCartCardWrapper>
                  </StyledShopCartListItem>
                );
              })}
            </ul>
            <StyledOrderWrapper>
              <StyledOrderTitle>Твоє замовлення</StyledOrderTitle>
              <StyledOrderPriceTextWrapper>
                <StyledOrderText>
                  <span>
                    {countQuantity}&nbsp;
                    {normalize_count_form(countQuantity, [
                      "товар",
                      "товари",
                      "товарів",
                    ])}
                  </span>
                  <span>{countPrice}&nbsp;грн</span>
                </StyledOrderText>

                <StyledOrderText>
                  <div>
                    <p>Усього</p>
                    <StyledPDVText>Включно з ПДВ</StyledPDVText>
                  </div>
                  <span>{countPrice}&nbsp;грн</span>
                </StyledOrderText>
              </StyledOrderPriceTextWrapper>

              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {() => (
                  <form>
                    <CustomInput
                      placeholder="Ввести промокод"
                      type="text"
                      name="code"
                      label=""
                    />
                  </form>
                )}
              </Formik>
              <StyledShopCartButton
                text={"Оформити"}
                route={ROUTES.SHOPCARTDELIVERY}
                state={{ from: location }}
              />
            </StyledOrderWrapper>
          </>
        ) : (
          <StyledNotificationWrapper>
            У вашому кошику ще немає товарів
          </StyledNotificationWrapper>
        )}
      </StyledPageWrapper>
    </>
  );
};
