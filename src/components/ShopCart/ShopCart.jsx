import Breadcrumbs from "components/Breadcrumbs";
import { Container, PageSection } from "../../main.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUserShopCart } from "../../redux/user/userShopCart/userShopCartSelector";
import { deleteUserShopCartItem } from "../../redux/user/userShopCart/userShopCartSlice";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";

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

  console.log(arr);
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
                    <li key={el._id}>
                      <div>
                        <img src={el.imgGallery[0]} alt={el.name} />
                        <div>
                          <div>
                            <p>{el.name}</p>
                            <p>{el.price}</p>
                          </div>
                          <p>
                            Колір: <span>{el.categories.color[0].name}</span>
                          </p>
                          <p>
                            Розмір: <span>Розмір</span>
                          </p>
                          <div>Кількість: 1</div>
                        </div>
                        <button
                          onClick={() =>
                            dispatch(deleteUserShopCartItem(el._id))
                          }
                        >
                          X
                        </button>
                      </div>
                    </li>
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
