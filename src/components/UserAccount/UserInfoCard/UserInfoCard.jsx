import { useRef, useState } from "react";
import { useFetchCurrentUserQuery } from "../../../redux/auth";
import {
  Box,
  Button,
  GeneratedAvatar,
  Image,
  Wrapper,
} from "./UserInfoCard.styled";
import { generateAvatarFromName } from "../../../utils/generateAvatarFromName";

const UserInfoCard = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { data, isLoading } = useFetchCurrentUserQuery();
  const user = data?.user;

  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    onFileSelect(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Box>
        <Image>
          {selectedFile ? (
            <img src={URL.createObjectURL(selectedFile)} alt="user avatar" />
          ) : user?.avatar ? (
            <img src={user?.avatar || ""} alt="user avatar" />
          ) : (
            <GeneratedAvatar>
              {generateAvatarFromName(user?.firstName, user?.lastName)}
            </GeneratedAvatar>
          )}
        </Image>
        <Button type="button" onClick={handleFileClick}>
          <svg>
            <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-edit"></use>
          </svg>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </Button>
      </Box>
      <h2>
        {user?.firstName}{' '}{user?.lastName}
      </h2>
    </Wrapper>
  );
};

export default UserInfoCard;
