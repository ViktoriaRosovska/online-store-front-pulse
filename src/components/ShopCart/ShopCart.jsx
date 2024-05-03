import Breadcrumbs from "components/Breadcrumbs";
import { Container, PageSection } from "../../main.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import { deleteUserShopCartItem } from "../../redux/user/userShopCart/userShopCartSlice";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import { ReactComponent as CloseBtnSmall } from "../../assets/svg/closeBtnSmall.svg";
import {
  StyledCard,
  StyledCloseBtnCard,
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
  StyledShopCartListItem,
} from "./ShopCart.styled";
import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";

export const ShopCart = props => {
  let location = useLocation()?.state?.from;
  const arr = [];
  arr.push(location?.pathname);
  while (location !== undefined) {
    location = location?.state?.from;
    if (location !== undefined) {
      arr.push(location);
    }
  }

  // console.log(arr);
  const userShopCartItems = useSelector(selectUserShopCart);
  const dispatch = useDispatch();
  console.log(userShopCartItems);
  const countPrice = userShopCartItems.reduce((acc, el) => {
    acc += el.price;
    return acc;
  }, 0);
  //   console.log(countPrice);
  return (
    <PageSection>
      <Container>
        <Breadcrumbs current={props.title} />
        <Title>{props.title}</Title>
        <StyledPageWrapper>
          <ul>
            {userShopCartItems && userShopCartItems.length > 0
              ? userShopCartItems.map((el, idx) => {
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
                            <StyledProductName>
                              {el.data.name}
                            </StyledProductName>
                            <StyledProductText>
                              Колір:
                              <StyledProductValue>
                                &nbsp;
                                {el.data.categories.color[0].name}
                              </StyledProductValue>
                            </StyledProductText>
                            <StyledProductText>
                              Розмір:&nbsp;
                              <StyledProductValue>{el.size}</StyledProductValue>
                            </StyledProductText>
                            <div>Кількість: &nbsp;{el.quantity}</div>
                          </StyledShopCartInfo>
                        </StyledCard>

                        {/* <div>Count</div> */}
                        <StyledProductName>{el.price} </StyledProductName>
                      </StyledShopCartCardWrapper>
                    </StyledShopCartListItem>
                  );
                })
              : null}
          </ul>
          <StyledOrderWrapper>
            <StyledOrderTitle>Твоє замовлення</StyledOrderTitle>
            <StyledOrderPriceTextWrapper>
              <StyledOrderText>
                <span>{userShopCartItems.length || 0} товар/товарів</span>
                <span>{countPrice}</span>
              </StyledOrderText>

              <StyledOrderText>
                <div>
                  <p>Усього</p>
                  <StyledPDVText>Включно з ПДВ</StyledPDVText>
                </div>
                <span>{countPrice}</span>
              </StyledOrderText>
            </StyledOrderPriceTextWrapper>

            <form>
              <input placeholder="Ввести промокод" />
            </form>
            <StyledShopCartButton
              text={"Оформити"}
              // route={ROUTES.SHOPCART}
              state={{ from: location }}
            />
          </StyledOrderWrapper>
        </StyledPageWrapper>
      </Container>
    </PageSection>
  );
};
