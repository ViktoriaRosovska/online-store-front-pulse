import Breadcrumbs from "components/Breadcrumbs";
import { Container, PageSection } from "../../main.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import { deleteUserShopCartItem } from "../../redux/user/userShopCart/userShopCartSlice";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import {
  StyledCard,
  StyledProductName,
  StyledShopCartCardWrapper,
  StyledShopCartImage,
  StyledShopCartInfo,
  StyledShopCartListItem,
} from "./ShopCart.styled";

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
  //   console.log(userShopCartItems);
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
        <div>
          <ul>
            {userShopCartItems && userShopCartItems.length > 0
              ? userShopCartItems.map(el => {
                  return (
                    <StyledShopCartListItem key={el._id}>
                      <StyledShopCartCardWrapper>
                        <StyledCard>
                          <StyledShopCartImage
                            src={el.imgGallery[0]}
                            alt={el.name}
                          />
                          <StyledShopCartInfo>
                            <StyledProductName>{el.name}</StyledProductName>
                            <p>
                              Колір: <span>{el.categories.color[0].name}</span>
                            </p>
                            <p>
                              Розмір: <span>Розмір</span>
                            </p>
                            <div>Кількість: 1</div>
                          </StyledShopCartInfo>
                        </StyledCard>

                        <div>Count</div>
                        <p>{el.price}</p>
                        <button
                          style={{
                            position: "absolute",
                            right: "16px",
                            top: "10px",
                          }}
                          onClick={() =>
                            dispatch(deleteUserShopCartItem(el._id))
                          }
                        >
                          X
                        </button>
                      </StyledShopCartCardWrapper>
                    </StyledShopCartListItem>
                  );
                })
              : null}
          </ul>
          <div>
            <h3>Твоє замовлення</h3>
            <div>
              <span>{userShopCartItems.length || 0} товар/товарів</span>
              <span>Ціна</span>
            </div>
            <div>
              <div>
                <span>Усього</span>
                <span>Включно з ПДВ</span>
              </div>
              <span>Ціна: {countPrice}</span>
            </div>
            <button>Оформити</button>
          </div>
        </div>
      </Container>
    </PageSection>
  );
};
