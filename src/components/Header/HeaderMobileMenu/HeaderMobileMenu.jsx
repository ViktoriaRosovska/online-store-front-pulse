import { useState } from "react";
import ProfileMenu from "../../../components/UserAccount/ProfileMenu/ProfileMenu";
import Menu from "../../HeaderMenu/HeaderMenu.jsx";
import { Button, FooterMenuList, Wrapper } from "./HeaderMobileMenu.styled";
import { ReactComponent as UpSvg } from "../../../assets/svg/up.svg";
import { ReactComponent as DownSvg } from "../../../assets/svg/down.svg";
import mobileFooterMenu from "../../../data/mobileFooterMenu.json";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../../redux/auth";
import CommonModal from "components/Modals/CommonModal";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import ModalAuth from "components/Modals/ModalAuth/ModalAuth";

const HeaderMobileMenu = ({ onClose }) => {
  const isLoggedIn = useSelector(selectUserToken);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const arrowSvg = isProfileMenuOpen ? <UpSvg /> : <DownSvg />;
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  return (
    <Wrapper>
      <Menu onClose={onClose} />
      <Button type="button" onClick={isLoggedIn ? toggleProfileMenu : handleOpenLoginModal}>
        Профіль {isLoggedIn && <span>{arrowSvg}</span>}
      </Button>
      {isProfileMenuOpen && isLoggedIn ? (
        <ProfileMenu onClose={onClose} isProfile />
      ) : (
        <Portal isOpen={isLoginModalOpen}>
          <CommonModal
            onClose={handleCloseLoginModal}
            padding="68px 164px"
            top="68px"
          >
            <ModalAuth onClose={handleCloseLoginModal} />
          </CommonModal>
        </Portal>
      )}
      <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#7A7C7F",
          marginTop: isProfileMenuOpen ? "0" : "16px",
        }}
      />
      <nav>
        <FooterMenuList>
          {mobileFooterMenu.map((item, itemIndex) => (
            <li key={itemIndex} onClick={onClose}>
              <Link to={item.href}>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </FooterMenuList>
      </nav>
    </Wrapper>
  );
};

export default HeaderMobileMenu;
