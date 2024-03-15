import "./footer-glass-info.css";
import MediaQuery from "react-responsive";
import List from "../../../../components/list/list";
import Link from "../../../../components/link/link";
import instagramIcon from "../../../../../public/icons/social-media-icons/instagram-icon.svg";
import facebookIcon from "../../../../../public/icons/social-media-icons/facebook-icon.svg";
import mailIcon from "../../../../../public/icons/social-media-icons/mail-icon.svg";
import phoneIcon from "../../../../../public/icons/social-media-icons/phone-icon.svg";

function FooterGlassInfo() {
  const iconsArray = [instagramIcon, facebookIcon, mailIcon, phoneIcon];
  const footerNavbarItem1 = ["Підтримка", "Умови та положення", "Гарантія та повернення", "Політики конфіденційності"];
  const footerNavbarItem2 = ["Головна", "Про нас", "Профіль", "Доставка"];
  const footerNavbarItem3 = ["Каталог товарів", "Новинки", "Распродаж", "Бренди"];

  const footerNavbarItems = [iconsArray, footerNavbarItem1, footerNavbarItem2, footerNavbarItem3];

  return (
    <div className="footer__glass-info">
      <nav className="footer__navbar">
        <MediaQuery maxWidth={1439}>
          <List className="social__media-list-mobile">
            {iconsArray.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link className="list__item">
                  <img src={item} alt={`Icon ${itemIndex + 1}`} />
                </Link>
              </li>
            ))}
          </List>
        </MediaQuery>

        <MediaQuery minWidth={1440}>
          <List className="footer__navbar-list">
            {footerNavbarItems.map((listItems, index) => (
              <li key={index} className="footer__navbar-item">
                <List className={`footer__navbar-item ${index === 0 ? "social__media-list" : ""}`}>
                  {listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {index === 0 ? (
                        <Link className="list__item">
                          <img src={item} alt={`Icon ${itemIndex + 1}`} />
                        </Link>
                      ) : (
                        <Link href={"#"} linkText={item} />
                      )}
                    </li>
                  ))}
                </List>
              </li>
            ))}
          </List>
        </MediaQuery>
      </nav>
    </div>
  );
}

export default FooterGlassInfo;
