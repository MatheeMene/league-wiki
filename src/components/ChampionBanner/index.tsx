import React from 'react';
import { RoleIcon } from '../RoleIcon';
import './styles.scss';

interface ChampionBannerProps {
  championName: string;
  championTitle: string;
  championTags: string[];
  championImage: string | undefined;
}

export const ChampionBanner: React.FC<ChampionBannerProps> = ({
  championName,
  championTitle,
  championTags,
  championImage,
}) => {
  return (
    <div className="champion__banner__container">
      <div>
        <img
          className="champion__banner_image"
          src={require(`../../assets/images/${championImage}`)}
          alt="Heimerdinger"
        />
        <h1 className="champion__name">{championName}</h1>
        <h3 className="champion__title">{championTitle}</h3>
        <RoleIcon championTags={championTags} />
      </div>
    </div>
  );
};
