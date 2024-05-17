import { Title } from "components/Typography/Typography.styled";
import UserSupportContacts from "components/UserAccount/UserSupportContacts/UserSupportContacts";
import UserSupportForm from "components/form/UserSupportForm/UserSupportForm";
import { selectUserData, useFetchCurrentUserQuery } from "../../redux/auth";
import { useSelector } from "react-redux";

const UserSupport = () => {
    const userSelect = useSelector(selectUserData)
    console.log("UserSupport  userSelect", userSelect)
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
