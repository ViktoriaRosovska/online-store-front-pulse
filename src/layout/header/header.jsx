import './header.css';
import logoImg from './../../../public/logo.svg';
import Menu from './../menu/menu.jsx';
import SearchUserActions from './search-user-actions/search-user-actions.jsx';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";


function Header({modalOn}) {
    const [isFixed, setIsFixed] = useState(false)

    const navigate = useNavigate()
    const  homeClick = () => {
        navigate('/')
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header className={`header ${isFixed ? 'fixed' : ''}`}>
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="logo">
                        <img className={`logo__icon ${isFixed ? 'fixed' : ''}`} src={logoImg} alt="PulseRun" onClick={homeClick}/>
                    </a>

                    <nav className="menu">
                        <Menu />
                    </nav>

                    <SearchUserActions isFixed={isFixed} modalOn={modalOn}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
