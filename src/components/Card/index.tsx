import React from 'react';

import './styles.scss';
import { RoleIcon } from '../RoleIcon';

interface CardProps {
    championName: string;
    championDescription: string;
    firstRole: string;
    secondRole?: string;
}

export const Card: React.FC<CardProps> = ({
    championName, championDescription, firstRole, secondRole,
}) => {
    return (
        <div className="card__container">
            <div className="card__image">
                <img src={require('../../assets/images/challenger.png')} alt="Challenger helmet" />
            </div>
            <h1 className="card__title">{championName}</h1>
            <span>{championDescription}</span>
            <RoleIcon firstRole={firstRole} secondRole={secondRole} />
            <button className="card__button" type="button">Ver mais</button>
        </div>
    );
};
