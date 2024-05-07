// import { useLocation } from "react-router-dom";
import UserEditForm from "components/form/UserAccountForm/UserEditForm";
import { Container, PageSection } from "../../main.styled";
// import // useLogoutUserMutation,
// // useHandleLogoutSuccess,
// // useHandleAuthErrors,
// // "../../redux/auth";
import UserInfoCard from "components/UserAccount/UserInfoCard/UserInfoCard";
import UserLogOutButton from "components/UserAccount/UserLogOutButton/UserLogOutButton";

const UserAccount = () => {
  // const location = useLocation()

  // const [loginUser, {
  //   // isLoading,
  //   isSuccess, isError, error }] =
  //   useLogoutUserMutation();

  // const logout = () => {
  //   loginUser();
  // };

  // useHandleLogoutSuccess(isSuccess);

  // useHandleAuthErrors(isError, error);

  return (
    <PageSection>
      <Container>
        <UserInfoCard />
        <UserEditForm />
        <UserLogOutButton/>
      </Container>
    </PageSection>
  );
};

export default UserAccount;
