import { formatPrice } from "../../../utils/formatPrice";
import { calculateTotalPrice } from "../../../utils/calculateTotalPrice";
import UserOrderHistoryDetailsItem from "../UserOrderHistoryDetailsItem/UserOrderHistoryDetailsItem";
import {
  Address,
  List,
  SumUpBox,
  TotalPrice,
  Wrapper,
} from "./UserOrderHistoryDetailsList.styled";

const UserOrderHistoryDetailsList = ({ item }) => {
 console.log("UserOrderHistoryDetailsList  item", item)
 
  return (
    <Wrapper>
      <List>
        {item?.products.map(product => (
          <UserOrderHistoryDetailsItem key={product.productId._id} product={product} />
        ))}
      </List>

      <SumUpBox>
        <div>
          <p>Підсумок</p>
          <p>{formatPrice(calculateTotalPrice(item?.products))} грн.</p>
        </div>
        <div>
          <p>Доставка</p>
          <p>0 грн.</p>
        </div>
        <TotalPrice>
          <p>Разом</p>
          <p>{formatPrice(calculateTotalPrice(item?.products) + 0)} грн.</p>
        </TotalPrice>
      </SumUpBox>

      <Address>
        <p>{item?.name}</p>
        <p>тел. {item?.phone}</p>
        <p>{item?.deliveryAddress}</p>
        <p>Відділення №2: вул. Бережанська, 9</p>
      </Address>
    </Wrapper>
  );
};

export default UserOrderHistoryDetailsList;
