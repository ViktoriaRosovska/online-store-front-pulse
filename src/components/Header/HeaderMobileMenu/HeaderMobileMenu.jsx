import { useState } from "react";
import ProfileMenu from "../../../components/UserAccount/ProfileMenu/ProfileMenu";
import Menu from "../../HeaderMenu/HeaderMenu.jsx";
import { Button } from "./HeaderMobileMenu.styled";
import { ReactComponent as UpSvg } from '../../../assets/svg/up.svg'
import {ReactComponent as DownSvg} from '../../../assets/svg/down.svg'

const HeaderMobileMenu = ({ onClose }) => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

    const arrowSvg = isProfileMenuOpen ? <UpSvg/> : <DownSvg/>
    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen)
    }
  return (
    <>
          <Menu onClose={onClose} />
          <Button type="button" onClick={toggleProfileMenu}>Профіль <span>{arrowSvg}</span></Button>
          {isProfileMenuOpen && <ProfileMenu onClose={onClose} isProfile />}
          <hr style={{width: '100%', height: '1px', backgroundColor: '#7A7C7F', marginTop: isProfileMenuOpen ? '0' : '16px'}} />
    </>
  );
};

export default HeaderMobileMenu;
