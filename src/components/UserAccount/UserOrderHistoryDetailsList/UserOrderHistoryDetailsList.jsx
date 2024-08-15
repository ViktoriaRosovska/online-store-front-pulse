import { formatPrice } from "../../../utils/formatPrice";
import { calculateTotalPrice } from "../../../utils/calculateTotalPrice";
import UserOrderHistoryDetailsItem from "./UserOrderHistoryDetailsItem/UserOrderHistoryDetailsItem";
import {
  Address,
  List,
  SumUpBox,
  TotalPrice,
  Wrapper,
} from "./UserOrderHistoryDetailsList.styled";
import { deliveryPrice } from "../../.././utils/deliveryPrice";

const UserOrderHistoryDetailsList = ({ item }) => {
  return (
    <Wrapper>
      <List>
        {item?.products.map(product => (
          <UserOrderHistoryDetailsItem
            key={product.productId._id}
            product={product}
          />
        ))}
      </List>

      <SumUpBox>
        <div>
          <p>Разом</p>
          <p>{formatPrice(calculateTotalPrice(item?.products))}</p>
        </div>
        <div>
          <p>Знижка</p>
          <p>{item?.discount}%</p>
        </div>
        <div>
          <p>Доставка</p>
          <p>{deliveryPrice(item?.priceSum)}</p>
        </div>
        <TotalPrice>
          <p>Підсумок</p>

          <p>{formatPrice(item?.priceSum)}</p>
        </TotalPrice>
      </SumUpBox>

      <Address>
        <p>{item?.name}</p>
        <p>тел. {item?.phone}</p>
        <p>{item?.deliveryAddress}</p>
      </Address>
    </Wrapper>
  );
};

export default UserOrderHistoryDetailsList;
