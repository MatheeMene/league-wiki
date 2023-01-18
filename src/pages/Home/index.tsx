import React from 'react';
import './styles.scss';

export const Home: React.FC = () => {
    return (
        <main className="home__container">
            <div className="home__image">
                <img src={require('../../assets/images/home_image.png')} alt="league of legends" />
            </div>
            <div className="home__content">
                <div>
                    <h1>Conheça um pouco mais sobre Samuel&apos;s Drift</h1>
                    <p>
                        Conheça um pouco de cada campeão clicando no botão abaixo
                    </p>
                    <span>
                        ⬇ Conheça alguns campeões ⬇
                    </span>
                </div>
            </div>
        </main>
    );
};

// Limitar itens por scroll
// Fazer carregamento dos cards para cada limite atingido no scroll
// Fazer shimmer
