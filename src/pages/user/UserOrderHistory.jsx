import { Title } from "components/Typography/Typography.styled";
import UserOrderHistoryList from "components/UserAccount/UserOrderHistoryList/UserOrderHistoryList";
import { useGetUserOrdersQuery } from "../../redux/auth/userAuthApi";

const UserOrderHistory = () => {
  const { data } = useGetUserOrdersQuery();

  return (
    <>
      <Title style={{ textAlign: "left" }}>Історія замовлень</Title>
      <UserOrderHistoryList orders={data?.buyHistory} />
    </>
  );
};

export default UserOrderHistory;
