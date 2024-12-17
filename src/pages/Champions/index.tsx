import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import { ChampionItem } from '../../types';
import { getLOLChampionsData } from '../../services/api/Champions';

import './styles.scss';

export const Champions: React.FC = () => {
  const [championsData, setChampionsData] = useState<ChampionItem[]>();

  useEffect(() => {
    const fetchChampionsData = async () => {
      const data = await getLOLChampionsData();
      setChampionsData(data);
    };

    fetchChampionsData();
  }, []);

  return (
    <div className="champions__container">
      {championsData?.map(championData => {
        return (
          <Card
            championName={championData.name}
            championDescription={championData.title}
            championTags={championData.tags}
            key={championData.id}
          />
        );
      })}
    </div>
  );
};
