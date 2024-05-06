import { Box, Button, Image, Wrapper } from "./UserInfoCard.styled";

const UserInfoCard = () => {
  return (
    <Wrapper>
      <Box>
        <Image>
          <img src="" alt="" />
        </Image>
        <Button type="button">
          <svg width={24} height={24}>
            <use xlinkHref="./icons/profile-icons/profile-icons-sprite.svg#icon-edit"></use>
          </svg>
        </Button>
      </Box>
      <h2>Юлія Пономаренко</h2>
    </Wrapper>
  );
};

export default UserInfoCard;
