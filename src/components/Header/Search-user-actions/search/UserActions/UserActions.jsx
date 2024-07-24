import { useNavigate, useLocation } from "react-router";
import "./UserActions.css";
// import MediaQuery from "react-responsive";
import { useEffect, useState } from "react";
import {
  selectUserFavorites,
  selectUserToken,
  useFetchCurrentUserQuery,
} from "../../../../../redux/auth";
import { ROUTES } from "../../../../../utils/routes";
import { useSelector } from "react-redux";
import { ReactComponent as BasketIcon } from "../../../../../assets/svg/basket_icon.svg";
import { ReactComponent as ProfileIcon } from "../../../../../assets/svg/profile_icon.svg";
import { ReactComponent as FavoriteIcon } from "../../../../../assets/svg/heart_lg.svg";
import ParenModalForAuth from "components/Modals/ParentModalForAuth/ParentModalForAuth";
import {
  FavoriteCountComponent,
  ShopCountComponent,
} from "components/CountComponent/CountComponent";
import { StyledBasketWrapper } from "components/Header/Header.styled";
import { selectUserShopCart } from "../../../../../redux/user/userShopCart/userShopCartSelector";
import { generateAvatarFromName } from "../../../../../utils/generateAvatarFromName";
import {
  StyledHeaderGeneratedAvatar,
  StyledHeaderUserAvatar,
} from "components/StyledHeaderGeneratedAvatar/StyledHeaderGeneratedAvatar.styled";
import { makeRandomColor } from "../../../../../utils/makeRandomcolor";
import { useGetFavoritesQuery } from "../../../../../redux/user/userSlice/userApi";

function UserActions(props) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);
  const location = useLocation();

  const [redirectPath, setRedirectPath] = useState("/profile/account");
  const { countQuantity } = useSelector(selectUserShopCart);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const isLoggedIn = useSelector(selectUserToken);

  const { data, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const { data: favoriteData } = useGetFavoritesQuery();

  const userFavorites = useSelector(selectUserFavorites);

  useEffect(() => {
    if (isLoggedIn) {
      refetch();
      setUser(data?.user);
    } else {
      setUser(null);
    }
  }, [refetch, isLoggedIn, data]);

  const handleOpenLoginModal = redirectPath => {
    setRedirectPath(redirectPath);
    setIsLoginModalOpen(true);
    setIsForgotPasswordModalOpen(false);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const navigateToCabinet = () => {
    navigate("/profile/account");
  };

  const navigateToFavorites = () => {
    navigate("/profile/favorites");
  };

  const navigateToShopCart = () => {
    navigate(ROUTES.SHOPCARTLAYOUT, { state: { from: location } });
  };

  return (
    <div className="user__actions">
      <button
        className={`user__actions-profile user__actions-icon ${
          props.isFixed || !props.location ? "fixed" : ""
        }`}
        onClick={
          isLoggedIn
            ? navigateToCabinet
            : () => handleOpenLoginModal("/profile/account")
        }
      >
        {isLoggedIn ? (
          user?.avatar ? (
            <StyledHeaderUserAvatar $color={makeRandomColor()}>
              <img src={user?.avatar || ""} alt="user avatar" />
            </StyledHeaderUserAvatar>
          ) : (
            <StyledHeaderGeneratedAvatar $color={makeRandomColor()}>
              {generateAvatarFromName(user?.firstName, user?.lastName)}
            </StyledHeaderGeneratedAvatar>
          )
        ) : (
          <ProfileIcon />
        )}
      </button>
      {/* <MediaQuery minWidth={1440}> */}
      <button
        className={`user__actions-favorites user__actions-icon ${
          props.isFixed || !props.location ? "fixed" : ""
        }`}
        onClick={
          isLoggedIn
            ? navigateToFavorites
            : () => handleOpenLoginModal("/profile/favorites")
        }
      >
        <div style={{ position: "relative" }}>
          <FavoriteIcon />
          {(userFavorites.length > 0 || favoriteData.length > 0) && (
            <FavoriteCountComponent
              favoriteCount={favoriteData.length || userFavorites.length}
            />
          )}
        </div>
      </button>
      {/* </MediaQuery> */}
      <StyledBasketWrapper>
        <button
          className={`user__actions-cart user__actions-icon ${
            props.isFixed || !props.location ? "fixed" : ""
          }`}
          onClick={navigateToShopCart}
        >
          <BasketIcon />
          {countQuantity > 0 ? <ShopCountComponent /> : null}
        </button>
      </StyledBasketWrapper>

      <ParenModalForAuth
        isAuthModalOpen={isLoginModalOpen}
        closeAuthModal={handleCloseLoginModal}
        openForgotPasswordModal={openForgotPasswordModal}
        closeForgotPasswordModal={closeForgotPasswordModal}
        isForgotPasswordModalOpen={isForgotPasswordModalOpen}
        redirectPath={redirectPath}
      />
    </div>
  );
}
export default UserActions;
