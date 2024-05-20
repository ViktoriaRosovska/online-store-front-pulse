import "./FooterGlassInfo.css";
import MediaQuery from "react-responsive";
// import List from "../../../../components/list/list";
import Links from "../../../Links/Links";
import instagramIcon from "/public/icons/social-media-icons/instagram-icon.svg";
import facebookIcon from "/public/icons/social-media-icons/facebook-icon.svg";
import mailIcon from "/public/icons/social-media-icons/mail-icon.svg";
import phoneIcon from "/public/icons/social-media-icons/phone-icon.svg";
import menuArrayFooter from "./../../../../data/footerMenu.json";

function FooterGlassInfo() {
  const iconsArray = [instagramIcon, facebookIcon, mailIcon, phoneIcon];

  const footerNavbarItems = [
    iconsArray,
    menuArrayFooter[0],
    menuArrayFooter[1],
    menuArrayFooter[2],
  ];

  return (
    <div className="footer__glass-info">
      <nav className="footer__navbar">
        <MediaQuery maxWidth={1439.98}>
          <ul className="social__media-list-mobile">
            {iconsArray.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Links className="list__item">
                  <img src={item} alt={`Icon ${itemIndex + 1}`} />
                </Links>
              </li>
            ))}
          </ul>
        </MediaQuery>

        <MediaQuery minWidth={1440}>
          <ul className="footer__navbar-list">
            {footerNavbarItems.map((listItems, index) => (
              <li key={index} className="footer__navbar-item">
                <ul
                  className={`footer__navbar-item ${
                    index === 0 ? "social__media-list" : ""
                  }`}
                >
                  {listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {index === 0 ? (
                        <Links className="list__item list__item__left">
                          <img src={item} alt={`Icon ${itemIndex + 1}`} />
                        </Links>
                      ) : (
                        // <Link href={"#"} linkText={item} />
                        <Links href={item.href} linkText={item.name} />
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </MediaQuery>
      </nav>
    </div>
  );
}

export default FooterGlassInfo;
