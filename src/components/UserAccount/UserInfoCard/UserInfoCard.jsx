import { useRef, useState } from "react";
import { useFetchCurrentUserQuery } from "../../../redux/auth";
import { Box, Button, Image, Wrapper } from "./UserInfoCard.styled";

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
            <img src={URL.createObjectURL(selectedFile)} />
          ) : (
            <img src={user?.avatar || ""} alt="" />
          )}
        </Image>
        <Button type="button" onClick={handleFileClick}>
          <svg width={24} height={24}>
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
        {user?.firstName} {user?.lastName}
      </h2>
    </Wrapper>
  );
};

export default UserInfoCard;
