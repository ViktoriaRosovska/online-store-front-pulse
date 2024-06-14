import { Link, useLocation } from "react-router-dom";
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

function FooterGlassInfo() {
  const location = useLocation();
  const iconsArray = [instagramIcon, facebookIcon, mailIcon, phoneIcon];

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
  );
}

export default FooterGlassInfo;
