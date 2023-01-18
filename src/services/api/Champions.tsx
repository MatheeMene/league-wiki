import axios from 'axios';

const championsData = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';

export const getLOLChampionsData = async () => {
    const { data } = await axios.get(championsData);
    console.log(data);
};
