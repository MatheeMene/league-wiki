import React, { useEffect, useState } from 'react';

import { Card } from '../../components';
import { getLOLChampionsData } from '../../services/api/Champions';

import './styles.scss';

export const Champions: React.FC = () => {
    const [championsData, setChampionsData] = useState();
    console.log(getLOLChampionsData());

    useEffect(() => {
        const fetchChampionsData = async () => {
            const data = await getLOLChampionsData();
            setChampionsData(data.data);
        };

        fetchChampionsData();
    }, []);

    return (
        <div className="champions__container">
            <Card championName="aaaaaa" championDescription="aaaaaaaaaaaaaaaa" firstRole="Assassin" />
        </div>
    );
};
