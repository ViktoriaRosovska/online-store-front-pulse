// import { useLocation } from "react-router-dom";
import { Container, PageSection } from "../../main.styled";
import // useLogoutUserMutation,
// useHandleLogoutSuccess,
// useHandleAuthErrors,
"../../redux/auth";
import UserInfoCard from "components/UserAccount/UserInfoCard/UserInfoCard";

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
      </Container>
    </PageSection>
  );
};

export default UserAccount;
