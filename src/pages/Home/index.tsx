import React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../hooks/useStores';
import { ChampionBanner } from '../../components';

import './styles.scss';

const champions = [
    {
        name: 'Heimerdinger',
        title: 'Heimer é top heimer é tudo, melhor boneco do league',
        tags: ['Mage', 'Support'],
        image: 'Heimerdinger.jpg',
    },
    {
        name: 'Olaf',
        title: 'Olaf é paia olaf é merda, pior boneco do league',
        tags: ['Fighter', 'Tank'],
        image: 'Olaf.jpg',
    },
];

export const Home: React.FC = observer(() => {
    const { UIStore: { hideButtonBelowModal } } = useStores();

    return (
        <main className="home__container">
            <section className="home__welcome__wrapper">
                <div className="home__image">
                    <img src={require('../../assets/images/home_image.png')} alt="league of legends" />
                </div>
                <div className="home__content">
                    <div>
                        <h1>Conheça um pouco mais sobre Samuel&apos;s Drift</h1>
                        <p>
                            Conheça um pouco de cada campeão clicando no botão abaixo
                        </p>
                        <span className={clsx(hideButtonBelowModal && 'disable__animation')}>
                            ⬇ Conheça alguns campeões ⬇
                        </span>
                    </div>
                </div>
            </section>
            <section className="home__banner__section">
                <div className="home__banner__wrapper">
                    {
                        champions.map((champion => (
                            <ChampionBanner
                                championName={champion.name}
                                championTitle={champion.title}
                                championTags={champion.tags}
                                championImage={champion.image}
                                key={champion.name}
                            />
                        )))
                    }
                </div>
                <span className="home__banner__button">Veja todos os campeões</span>
            </section>
        </main>
    );
});

// Limitar itens por scroll
// Fazer carregamento dos cards para cada limite atingido no scroll
// Fazer shimmer
