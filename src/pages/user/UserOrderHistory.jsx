import { Title } from "components/Typography/Typography.styled";
import UserOrderHistoryList from "components/UserAccount/UserOrderHistoryList/UserOrderHistoryList";
import { useGetUserOrdersQuery } from "../../redux/auth/userAuthApi";

const UserOrderHistory = () => {
  const {data} = useGetUserOrdersQuery()
  console.log("UserOrderHistory  data", data)

  return (
    <>
      <Title style={{ textAlign: "left" }}>Історія замовлень</Title>
      <UserOrderHistoryList />
    </>
  );
};

export default UserOrderHistory;
