import { useNavigate, useLocation } from "react-router";
import "./UserActions.css";
import MediaQuery from "react-responsive";
import { useEffect, useState } from "react";
import {
  selectUserToken,
  useFetchCurrentUserQuery,
} from "../../../../../redux/auth";
import { ROUTES } from "../../../../../utils/routes";
import { useSelector } from "react-redux";
import { ReactComponent as BasketIcon } from "../../../../../assets/svg/basket_icon.svg";
import { ReactComponent as ProfileIcon } from "../../../../../assets/svg/profile_icon.svg";
import { ReactComponent as FavoriteIcon } from "../../../../../assets/svg/heart_lg.svg";
import ParenModalForAuth from "components/Modals/ParentModalForAuth/ParentModalForAuth";
import { StyledShopCountComponent } from "components/StyledShopCountComponent/StyledShopCountComponent";
import { StyledBasketWrapper } from "components/Header/Header.styled";
import { selectUserShopCart } from "../../../../../redux/user/userShopCart/userShopCartSelector";
import { generateAvatarFromName } from "../../../../../utils/generateAvatarFromName";
import {
  StyledHeaderGeneratedAvatar,
  StyledHeaderUserAvatar,
} from "components/StyledHeaderGeneratedAvatar/StyledHeaderGeneratedAvatar.styled";

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

  function makeRandomColor() {
    const brightness = 0;
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness * 51, brightness * 51, brightness * 51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(
      function (x) {
        return Math.round(x / 2.0);
      }
    );
    return "rgb(" + mixedrgb.join(",") + ")";
  }

  console.log(makeRandomColor());

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
      <MediaQuery minWidth={1440}>
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
          <FavoriteIcon />
        </button>
      </MediaQuery>
      <StyledBasketWrapper>
        <button
          className={`user__actions-cart user__actions-icon ${
            props.isFixed || !props.location ? "fixed" : ""
          }`}
          onClick={navigateToShopCart}
        >
          <BasketIcon />
          {countQuantity > 0 ? <StyledShopCountComponent /> : null}
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
