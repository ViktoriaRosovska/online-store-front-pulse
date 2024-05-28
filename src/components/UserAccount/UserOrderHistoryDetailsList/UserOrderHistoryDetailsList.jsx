import { calculateTotalPrice } from "../../../utils/calculateTotalPrice";
import UserOrderHistoryDetailsItem from "../UserOrderHistoryDetailsItem/UserOrderHistoryDetailsItem";
import { List, SumUpBox, TotalPrice } from "./UserOrderHistoryDetailsList.styled";

const UserOrderHistoryDetailsList = ({ item }) => {
  return (
    <div>
      <List>
        {item?.products.map(product => (
          <UserOrderHistoryDetailsItem key={item._id} product={product} />
        ))}
      </List>

      <SumUpBox>
        <div>
          <p>Підсумок</p>
          <p>{calculateTotalPrice(item?.products)} грн.</p>
        </div>
        <div>
          <p>Доставка</p>
          <p>0 грн.</p>
        </div>
        <TotalPrice>
          <p>Разом</p>
          <p>{calculateTotalPrice(item?.products) + 0} грн.</p>
        </TotalPrice>
      </SumUpBox>
    </div>
  );
};

export default UserOrderHistoryDetailsList;
