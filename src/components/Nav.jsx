import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Nav =() => {
    return (
        <nav className="nav">
            <Link to="/">Главная</Link>
            <Link to="/products">Продукты</Link>
            <Link to="/about">О нас</Link>
        </nav> 
    )
}

export default Nav