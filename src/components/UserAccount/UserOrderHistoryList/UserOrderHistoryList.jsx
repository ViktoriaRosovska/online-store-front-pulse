import UserOrderHistoryItem from "./UserOrderHistoryItem/UserOrderHistoryItem";
import { List } from "./UserOrderHistoryList.styled";

const UserOrderHistoryList = ({orders}) => {
  return (
    <List>
      {orders?.map(item => (
        <UserOrderHistoryItem key={item._id} item={item} />
      ))}
    </List>
  );
};

export default UserOrderHistoryList;
