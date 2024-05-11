import { useState } from "react";
import ProfileMenu from "../../../components/UserAccount/ProfileMenu/ProfileMenu";
import Menu from "../../HeaderMenu/HeaderMenu.jsx";
import { Button, FooterMenuList, Wrapper } from "./HeaderMobileMenu.styled";
import { ReactComponent as UpSvg } from "../../../assets/svg/up.svg";
import { ReactComponent as DownSvg } from "../../../assets/svg/down.svg";
import mobileFooterMenu from '../../../data/mobileFooterMenu.json';
import { Link } from "react-router-dom";

const HeaderMobileMenu = ({ onClose }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const arrowSvg = isProfileMenuOpen ? <UpSvg /> : <DownSvg />;
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  return (
    <Wrapper>
      <Menu onClose={onClose} />
      <Button type="button" onClick={toggleProfileMenu}>
        Профіль <span>{arrowSvg}</span>
      </Button>
      {isProfileMenuOpen && <ProfileMenu onClose={onClose} isProfile />}
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
              <li key={itemIndex} >
                <Link to={item.href} onClose={onClose}>
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
