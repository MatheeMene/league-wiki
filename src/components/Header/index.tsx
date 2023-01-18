import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Logo = () => (
    <div className="main">
        <ul className="list__left">
            <li><Link to="/about">Sobre nós</Link></li>
            <li>
                Campeões
            </li>
        </ul>
        <Link to="/" className="logo__wrapper">
            <img className="logo__img" src={require('../../assets/images/logo.png')} alt="logo" />
        </Link>
        <ul className="list__right">
            <li>Itens</li>
            <li>Provisório</li>
        </ul>
    </div>
);

export const Header: React.FC = () => (
    <header className="header">
        <Logo />
    </header>
);
