import './header.css';
import logoImg from './../../../public/logo.svg';
import Menu from './../menu/menu.jsx';
import SearchUserActions from './search-user-actions/search-user-actions.jsx';
import { useState, useEffect } from 'react';

function Header({modalOn}) {
    const [isFixed, setIsFixed] = useState(false)

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
                        <img className={`logo__icon ${isFixed ? 'fixed' : ''}`} src={logoImg} alt="PulseRun" />
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
