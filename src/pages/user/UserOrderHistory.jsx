import { Title } from "components/Typography/Typography.styled";
import UserOrderHistoryList from "components/UserAccount/UserOrderHistoryList/UserOrderHistoryList";
import { useGetUserOrdersQuery } from "../../redux/auth/userAuthApi";

const UserOrderHistory = () => {
  const { data } = useGetUserOrdersQuery();

  let newOrder = [];
  if (data?.buyHistory) {
    newOrder = [...data.buyHistory];
  }
  newOrder.sort(function (a, b) {
    const c = new Date(a.orderDate);
    const d = new Date(b.orderDate);
    return d - c;
  });

  return (
    <>
      <Title style={{ textAlign: "left" }}>Історія замовлень</Title>
      <UserOrderHistoryList orders={newOrder} />
    </>
  );
};

export default UserOrderHistory;
