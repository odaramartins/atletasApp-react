import React from 'react';

function CardAtleta({ atleta, onAdicionarFavorito }) {
    return (
        <div>
            <h2>{atleta.name}</h2>
            <p>País: {atleta.country.name}</p>
            <p>Gênero: {atleta.team.gender}</p>
            <button onClick={() => onAdicionarFavorito(atleta)}>Adicionar aos Favoritos</button>
        </div>
    );
}

export default CardAtleta;
