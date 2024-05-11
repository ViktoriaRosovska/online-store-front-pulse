import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeCredentials,
  useFetchCurrentUserQuery,
  useLogoutUserMutation,
} from "../../../redux/auth";
import { ReactComponent as Favorites } from '../../../assets/svg/profile-menu/favorites.svg';
import { ReactComponent as Exit } from '../../../assets/svg/profile-menu/exit.svg';
import { ReactComponent as Support } from '../../../assets/svg/profile-menu/support.svg';
import { ReactComponent as Wallet } from '../../../assets/svg/profile-menu/wallet.svg';
import { ReactComponent as Profile } from '../../../assets/svg/profile-menu/profile.svg';
import { ReactComponent as OrderHistory } from "../../../assets/svg/profile-menu/order-history.svg";
import {
  Avatar,
  ListItem,
  NavList,
  UserCard,
  StyledNavLink,
  Button,
  Box,
} from "./ProfileMenu.styled";

function ProfileMenu({ onClose, isProfile }) {
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();
  const { data, isLoading } = useFetchCurrentUserQuery();
  const user = data?.user;

  const basePath = isProfile ? "profile/" : "";

  const onLogoutClick = () => {
    logoutUser()
      .unwrap()
      .then(() => {
        dispatch(removeCredentials());

        redirect("/");
      })
      .catch(e => console.log("Error logout", e))
      .finally(onClose());
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      {!isProfile && <UserCard>
        <Avatar>
          <img src="" alt="" />
        </Avatar>
        <div>
          <p>
            {user?.firstNane} {user?.lastName}
          </p>
          <p>{user?.email}</p>
        </div>
      </UserCard>}
      <nav>
        <NavList $isModal={isProfile}>
          <ListItem>
            <StyledNavLink to={`${basePath}account`} onClick={onClose}>
              {/* <svg width={24} height={24}>
                <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-profile"></use>
              </svg> */}
              <Profile/>
              <p>Особисті дані</p>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={`${basePath}orderhistory`} onClick={onClose}>
              {/* <svg width={24} height={24}>
                <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-history"></use>
              </svg> */}
               <OrderHistory/>
              <p>Історія замовлень</p>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={`${basePath}favorites`} onClick={onClose}>
              {/* <svg width={24} height={24}>
                <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-favorites"></use>
              </svg> */}
              <Favorites/>
              <p>Улюблене</p>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={`${basePath}wallet`} onClick={onClose}>
              {/* <svg width={24} height={24}>
                <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-wallet"></use>
              </svg> */}
              <Wallet/>
              <p>Гаманець</p>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={`${basePath}support`} onClick={onClose}>
              {/* <svg width={24} height={24}>
                <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-support"></use>
              </svg> */}
              <Support/>
              <p>Підтримка</p>
            </StyledNavLink>
          </ListItem>
        </NavList>
      </nav>

      <Button type="button" onClick={onLogoutClick} >
        {/* <svg width={24} height={24}>
          <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-exit"></use>
        </svg> */}
        <Exit/>
        <p>Вихід</p>
      </Button>
    </Box>
  );
}

export default ProfileMenu;
