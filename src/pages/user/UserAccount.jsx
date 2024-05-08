import UserEditForm from "components/form/UserAccountForm/UserEditForm";
import UserInfoCard from "components/UserAccount/UserInfoCard/UserInfoCard";

const UserAccount = () => {
  return (
    <>
      <div>
        <UserInfoCard />
        <UserEditForm />
      </div>
    </>
  );
};

export default UserAccount;
