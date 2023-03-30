import React from 'react';
import headerLogo from '../images/logo-header.svg'

const Header = () => {
    return (
        <header className="header">
          <img src={headerLogo} className="header__logo" alt="Логотип" />
        </header>
    )
}

export default Header;