import UserWalletList from "../../components/UserAccount/UserWalletList/UserWalletList";
import { Title } from "../../components/Typography/Typography.styled";

const UserWallet = () => {
  return (
    <>
      <Title style={{ textAlign: "left" }}>Гаманець</Title>
      <UserWalletList />
    </>
  );
};

export default UserWallet;
