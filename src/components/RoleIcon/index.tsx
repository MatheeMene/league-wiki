import React from 'react';

import './styles.scss';

interface RoleIconProps {
    championTags: string[];
}

export const RoleIcon: React.FC<RoleIconProps> = ({ championTags }) => {
    const verifyRole = (role: string) => {
        if (role === 'Assassin') return 'role_icon_assassin.png';
        if (role === 'Fighter') return 'role_icon_fighter.png';
        if (role === 'Mage') return 'role_icon_mage.png';
        if (role === 'Marksman') return 'role_icon_marksman.png';
        if (role === 'Support') return 'role_icon_support.png';
        if (role === 'Tank') return 'role_icon_tank.png';
        return 'role_icon_tank.png';
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
