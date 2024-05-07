import {
  Avatar,
  ListItem,
  NavList,
  UserCard,
  StyledNavLink,
  Button,
} from "./ProfileMenu.styled";

function ProfileMenu(onClose) {
  return (
    <>
      <UserCard>
        <Avatar>
          <img src="" alt="" />
        </Avatar>
        <div>
          <p>Юлія Пономаренко</p>
          <p>ponomarenko@gmail.com</p>
        </div>
      </UserCard>
      <nav>
        <NavList>
          <ListItem>
            <StyledNavLink to="/account" onClick={onClose}>
              <svg width={24} height={24}>
                <use xlinkHref="./icons/profile-icons/profile-icons-sprite.svg#icon-profile"></use>
              </svg>
              <p>Особисті дані</p>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/orderhistory" onClick={onClose}>
              <svg width={24} height={24}>
                <use xlinkHref="./icons/profile-icons/profile-icons-sprite.svg#icon-history"></use>
              </svg>
              <p>Історія замовлень</p>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/favorites" onClick={onClose}>
              <svg width={24} height={24}>
                <use xlinkHref="./icons/profile-icons/profile-icons-sprite.svg#icon-favorites"></use>
              </svg>
              <p>Улюблене</p>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/wallet" onClick={onClose}>
              <svg width={24} height={24}>
                <use xlinkHref="./icons/profile-icons/profile-icons-sprite.svg#icon-wallet"></use>
              </svg>
              <p>Гаманець</p>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/support" onClick={onClose}>
              <svg width={24} height={24}>
                <use xlinkHref="./icons/profile-icons/profile-icons-sprite.svg#icon-support"></use>
              </svg>
              <p>Підтримка</p>
            </StyledNavLink>
          </ListItem>
        </NavList>
      </nav>

      <Button type="button">
        <svg width={24} height={24}>
          <use xlinkHref="./icons/profile-icons/profile-icons-sprite.svg#icon-exit"></use>
        </svg>
        <p>Вихід</p>
      </Button>
    </>
  );
}

export default ProfileMenu;
