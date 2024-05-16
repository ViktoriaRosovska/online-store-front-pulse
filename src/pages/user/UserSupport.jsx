import { Title } from "components/Typography/Typography.styled";
import UserSupportContacts from "components/UserAccount/UserSupportContacts/UserSupportContacts";
import UserSupportForm from "components/form/UserSupportForm/UserSupportForm";
import { useFetchCurrentUserQuery } from "../../redux/auth";

const UserSupport = () => {
  const { data } = useFetchCurrentUserQuery();
  const user = data?.user;

  return (
    <>
      <Title style={{ textAlign: "left" }}>Підтримка</Title>
      <UserSupportContacts />
      <UserSupportForm user={user} />
    </>
  );
};

export default UserSupport;
