import {
  useLogoutUserMutation,
  useHandleLogoutSuccess,
  useHandleAuthErrors,
} from "../../redux/auth";

const UserAccount = () => {
  const [loginUser, { isLoading, isSuccess, isError, error }] =
    useLogoutUserMutation();

  const logout = () => {
    loginUser();
  };

  useHandleLogoutSuccess(isSuccess);

  useHandleAuthErrors(isError, error);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div>
        <p>Hey! I am your account!</p>
        <button type="button" onClick={logout}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default UserAccount;
