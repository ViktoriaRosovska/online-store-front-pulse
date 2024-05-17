import { useFetchCurrentUserQuery } from "../../../redux/auth";
import { Box, Button, Image, Wrapper } from "./UserInfoCard.styled";

const UserInfoCard = () => {
  const { data, isLoading } = useFetchCurrentUserQuery();
  const user = data?.user;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Box>
        <Image>
          <img src="" alt="" />
        </Image>
        <Button type="button">
          <svg width={24} height={24}>
            <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-edit"></use>
          </svg>
        </Button>
      </Box>
      <h2>
        {user?.firstName} {user?.lastName}
      </h2>
    </Wrapper>
  );
};

export default UserInfoCard;
