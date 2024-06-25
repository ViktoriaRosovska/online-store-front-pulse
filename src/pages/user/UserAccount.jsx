import UserEditForm from "components/form/UserAccountForm/UserEditForm";
import UserInfoCard from "components/UserAccount/UserInfoCard/UserInfoCard";
import { useState } from "react";

const UserAccount = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <>
      <div>
        <UserInfoCard onFileSelect={setSelectedFile} />
        <UserEditForm selectedFile={selectedFile} />
      </div>
    </>
  );
};

export default UserAccount;
