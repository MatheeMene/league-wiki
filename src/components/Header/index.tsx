import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import './styles.scss';

interface HamburguerProps {
    hamburguerClick: boolean;
}

const Logo: React.FC = () => (
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

const Hamburguer: React.FC<HamburguerProps> = ({ hamburguerClick }) => {
    return (
        <div className={clsx({ 'hamburguer__list': true, 'hidden_hamburguer__list': !hamburguerClick })}>
            <ul>
                <li>Sobre nós</li>
                <li>Campeões</li>
                <li>Itens</li>
                <li>Provisório</li>
            </ul>
        </div>
    );
};

export const Header: React.FC = () => {
    const [hamburguerClick, setHamburguerClick] = useState<boolean>(false);

    const handleHamburguerClick: VoidFunction = () => setHamburguerClick((prevState) => !prevState);

    return (
        <header className="header">
            <Hamburguer hamburguerClick={hamburguerClick} />
            <div
                className={clsx('hamburguer__button', { hamburguer__button__active: hamburguerClick })}
                onClick={handleHamburguerClick}
                role="button"
            >
                <span className={clsx({ 'bar__1': hamburguerClick })} />
                <span className={clsx({ 'bar__2': hamburguerClick })} />
                <span className={clsx({ 'bar__3': hamburguerClick })} />
            </div>
            <Logo />
        </header>
    );
};
