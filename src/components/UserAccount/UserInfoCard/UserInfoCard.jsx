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
import { ReactComponent as EditImage } from "../../../assets/svg/edit.svg";

const UserInfoCard = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { data } = useFetchCurrentUserQuery();
  const user = data?.user;
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    onFileSelect(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

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
          <EditImage />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </Button>
      </Box>
      <h2 style={{ wordBreak: "break-word" }}>
        {user?.firstName} {user?.lastName}
      </h2>
    </Wrapper>
  );
};

export default UserInfoCard;
