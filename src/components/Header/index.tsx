import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useStores } from '../../hooks/useStores';

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
                <li>Campeões</li>
                <li>Itens</li>
                <li>Provisório</li>
                <li>Sobre nós</li>
            </ul>
        </div>
    );
};

export const Header: React.FC = observer(() => {
    const [hamburguerClick, setHamburguerClick] = useState<boolean>(false);

    const { UIStore: { setHideButtonBelowModal, hideButtonBelowModal } } = useStores();

    const handleHamburguerClick: VoidFunction = () => {
        setHamburguerClick(!hamburguerClick);
        setHideButtonBelowModal(!hideButtonBelowModal);
    };

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
});
