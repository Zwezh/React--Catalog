import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <nav className="header__nav">
                    <Link className="header__nav-link" to="/">Главная</Link>
                    <Link className="header__nav-link" to="/products">Товары</Link>
                    <Link className="header__nav-link" to="/about">О нас</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header