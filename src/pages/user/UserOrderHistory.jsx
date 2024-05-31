import { Title } from "components/Typography/Typography.styled";
import UserOrderHistoryList from "components/UserAccount/UserOrderHistoryList/UserOrderHistoryList";

const UserOrderHistory = () => {
  return (
    <>
      <Title style={{ textAlign: "left" }}>Історія замовлень</Title>
      <UserOrderHistoryList />
    </>
  );
};

export default UserOrderHistory;
