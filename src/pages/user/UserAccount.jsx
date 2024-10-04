import UserEditForm from "components/form/UserAccountForm/UserEditForm";
import UserInfoCard from "components/UserAccount/UserInfoCard/UserInfoCard";
import { useState } from "react";
import { StyledAccountWrapper } from "components/UserAccount/UserInfoCard/UserInfoCard.styled";

const UserAccount = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <StyledAccountWrapper>
      <UserInfoCard onFileSelect={setSelectedFile} />
      <UserEditForm selectedFile={selectedFile} />
    </StyledAccountWrapper>
  );
};

export default UserAccount;
