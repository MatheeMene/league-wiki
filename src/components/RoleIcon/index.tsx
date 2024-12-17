import React from 'react';

import './styles.scss';

interface RoleIconProps {
  championTags: string[];
}

export const RoleIcon: React.FC<RoleIconProps> = ({ championTags }) => {
  const verifyRole = (championTag: string) => {
    const role = {
      Assassin: 'role_icon_assassin.png',
      Fighter: 'role_icon_fighter.png',
      Mage: 'role_icon_mage.png',
      Marksman: 'role_icon_marksman.png',
      Support: 'role_icon_support.png',
      Tank: 'role_icon_tank.png',
    }[championTag] || 'role_icon_tank.png';

    return role;
  };

  return (
    <span className="role__container">
      <img
        src={require(`../../assets/images/${verifyRole(championTags[0])}`)}
        className="champion__role"
        alt="role"
      />
      {championTags[1] && (
        <img
          src={require(`../../assets/images/${verifyRole(championTags[1])}`)}
          className="champion__role"
          alt="role"
        />
      )}
    </span>
  );
};
