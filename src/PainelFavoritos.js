import React from 'react';

function PainelFavoritos({ favoritos }) {
    return (
        <div>
            <h2>Atletas Favoritos</h2>
            {favoritos.map((atleta) => (
                <div key={atleta.id}>
                    <h3>{atleta.name}</h3>
                    <p>País: {atleta.country.name}</p>
                    <p>Gênero: {atleta.team.gender}</p>
                </div>
            ))}
        </div>
    );
}

export default PainelFavoritos;
