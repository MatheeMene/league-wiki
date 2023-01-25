import React from 'react';

import './styles.scss';

interface RoleIconProps {
    firstRole: string;
    secondRole?: string;
}

export const RoleIcon: React.FC<RoleIconProps> = ({ firstRole, secondRole }) => {
    const verifyRole = (role: string) => {
        if (role === 'Assassin') return 'role_icon_assassin.png';
        if (role === 'Fighter') return 'role_icon_fighter.png';
        if (role === 'Mage') return 'role_icon_mage.png';
        if (role === 'Support') return 'role_icon_support.png';
        if (role === 'Tank') return 'role_icon_tank.png';
    };

    return (
        <span className="role__container">
            <img
                src={require(`../../assets/images/${verifyRole(firstRole)}`)}
                className="champion__role"
                alt="role"
            />
            {secondRole && (
                <img
                    src={require(`../../assets/images/${verifyRole(secondRole)}`)}
                    className="champion__role"
                    alt="role"
                />
            )}
        </span>
    );
};
