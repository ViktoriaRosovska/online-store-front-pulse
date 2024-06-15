import { Link, useLocation, useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import instagramIcon from "/public/icons/social-media-icons/instagram-icon.svg";
import facebookIcon from "/public/icons/social-media-icons/facebook-icon.svg";
import mailIcon from "/public/icons/social-media-icons/mail-icon.svg";
import phoneIcon from "/public/icons/social-media-icons/phone-icon.svg";
import menuArrayFooter from "./../../../../data/footerMenu.json";
import {
  DesktopList,
  FooterBox,
  FooterLinksList,
  MobileSocialMediaList,
} from "./FooterGlassInfo.styled";
import ParenModalForAuth from "components/Modals/ParentModalForAuth/ParentModalForAuth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../../../redux/auth";

function FooterGlassInfo() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);

  const isLoggedIn = useSelector(selectUserToken);

  const navigate = useNavigate();
  const location = useLocation();
  const iconsArray = [instagramIcon, facebookIcon, mailIcon, phoneIcon];

  const handleOpenLoginModal = () => {
    
    // setRedirectPath(redirectPath);
    setIsLoginModalOpen(true);
    console.log("FooterGlassInfo  isLoginModalOpen", isLoginModalOpen)
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

  const handleLinkClick = (e, href) => {
    if (location.pathname === href) {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  const footerNavbarItems = [
    iconsArray,
    menuArrayFooter[0],
    menuArrayFooter[1],
    menuArrayFooter[2],
  ];

  return (
    <>
      <FooterBox>
        <nav>
          <MediaQuery maxWidth={1439.98}>
            <MobileSocialMediaList>
              {iconsArray.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href="#">
                    <img src={item} alt={`Icon ${itemIndex + 1}`} />
                  </a>
                </li>
              ))}
            </MobileSocialMediaList>
          </MediaQuery>

          <MediaQuery minWidth={1440}>
            <DesktopList>
              <li>
                <MobileSocialMediaList>
                  {iconsArray.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#">
                        <img src={item} alt={`Icon ${itemIndex + 1}`} />
                      </a>
                    </li>
                  ))}
                </MobileSocialMediaList>
              </li>
              <li>
                <FooterLinksList>
                  {footerNavbarItems[1].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        onClick={e => handleLinkClick(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </FooterLinksList>
              </li>
              <li>
                <FooterLinksList>
                  {footerNavbarItems[2].map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        if (item.name === "Профіль") {
                          return isLoggedIn
                            ? navigateToCabinet()
                            : handleOpenLoginModal();
                        }
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={e => handleLinkClick(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </FooterLinksList>
              </li>
              <li>
                <FooterLinksList>
                  {footerNavbarItems[3].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        onClick={e => handleLinkClick(e, item.href)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </FooterLinksList>
              </li>
            </DesktopList>
          </MediaQuery>
        </nav>
      </FooterBox>

      <ParenModalForAuth
        isAuthModalOpen={isLoginModalOpen}
        closeAuthModal={handleCloseLoginModal}
        openForgotPasswordModal={openForgotPasswordModal}
        closeForgotPasswordModal={closeForgotPasswordModal}
        isForgotPasswordModalOpen={isForgotPasswordModalOpen}
        redirectPath={"/profile/account"}
      />
    </>
  );
}

export default FooterGlassInfo;
