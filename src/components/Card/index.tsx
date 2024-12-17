import React from 'react';
import { RoleIcon } from '../RoleIcon';
import './styles.scss';

interface CardProps {
  championName: string;
  championDescription: string;
  championTags: string[];
}

export const Card: React.FC<CardProps> = ({
  championName,
  championDescription,
  championTags,
}) => {
  return (
    <div className="card__container">
      <div className="card__image">
        <img src={require('../../assets/images/challenger.png')} alt="Challenger helmet" />
      </div>
      <h1 className="card__title">{championName}</h1>
      <span>{championDescription}</span>
      <RoleIcon championTags={championTags} />
      <button className="card__button" type="button">Ver mais</button>
    </div>
  );
};
